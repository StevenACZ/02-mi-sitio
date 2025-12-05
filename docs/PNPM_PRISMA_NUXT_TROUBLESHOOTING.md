# Troubleshooting: pnpm + Prisma + Nuxt 4

Este documento describe los problemas encontrados al usar **pnpm** como gestor de paquetes con **Prisma** y **Nuxt 4**, junto con sus soluciones.

## Problema Principal

Al ejecutar `pnpm dev` se obtenían múltiples errores:

```
ERROR  Cannot read properties of null (reading 'name')
    at getBuilder (node_modules/.pnpm/@nuxt+cli@.../banner-CWBLwDiB.mjs:24:20)
```

```
ERROR  Could not resolve ".prisma/client/index-browser"
```

## Causas Raíz

### 1. Dependencias faltantes

`@nuxt/ui` v4 requiere módulos que no se instalan automáticamente:

- `@nuxt/fonts`
- `@nuxtjs/color-mode`

### 2. pnpm no hace hoisting por defecto

pnpm usa una estructura de `node_modules` estricta que no hace hoisting de dependencias. Esto causa que:

- `vite` no sea encontrado por `@nuxt/cli`
- `.prisma/client` no sea accesible desde la raíz

### 3. Incompatibilidad @prisma/nuxt con Prisma 7

`@prisma/nuxt@0.3.0` tiene dependencia de `@prisma/client@^6.1.0` y **no es compatible con Prisma 7**.

### 4. Schema de Prisma incompleto

El datasource no tenía configurada la URL de conexión.

---

## Soluciones Aplicadas

### 1. Configurar `.npmrc` para hoisting

Crear archivo `.npmrc` en la raíz del proyecto:

```ini
shamefully-hoist=true
hoist-pattern[]=*prisma*
hoist-pattern[]=*.prisma*
hoist-pattern[]=*vite*
hoist-pattern[]=*nuxt*
```

### 2. Instalar dependencias faltantes

```bash
pnpm add @nuxt/fonts @nuxtjs/color-mode
pnpm add -D @nuxt/vite-builder
```

### 3. Usar Prisma 6.x (no 7.x)

En `package.json`:

```json
{
  "dependencies": {
    "@prisma/client": "^6.19.0",
    "@prisma/nuxt": "^0.3.0"
  },
  "devDependencies": {
    "prisma": "^6.19.0"
  }
}
```

### 4. Configurar schema de Prisma correctamente

En `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**Importante:** NO usar `output` personalizado con `@prisma/nuxt`.

### 5. Configurar alias en Vite

En `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  vite: {
    resolve: {
      alias: {
        ".prisma/client/index-browser":
          "./node_modules/.prisma/client/index-browser.js",
      },
    },
  },
});
```

### 6. Script postinstall para crear symlink

En `package.json`:

```json
{
  "scripts": {
    "postinstall": "prisma generate && mkdir -p node_modules/.prisma/client && ln -sf $(find node_modules -path '*/.prisma/client/index-browser.js' | head -1 | xargs realpath) node_modules/.prisma/client/index-browser.js && nuxt prepare"
  }
}
```

---

## Verificación

Después de aplicar todas las soluciones:

```bash
# Limpiar e instalar
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Ejecutar dev
pnpm dev
```

Deberías ver:

```
Nuxt 4.2.1 (with Nitro 2.12.9, Vite 7.2.6 and Vue 3.5.25)
  ➜ Local:    http://localhost:3000/
```

---

## Notas Adicionales

### Warning de fonts.bunny.net

Si ves este error:

```
WARN  Could not fetch from https://fonts.bunny.net/list
```

Es un problema de red temporal y **no afecta la funcionalidad** de la aplicación.

### Actualización a Prisma 7

Cuando `@prisma/nuxt` sea compatible con Prisma 7, podrás actualizar. Mientras tanto, usa Prisma 6.x.

---

## Referencias

- [Prisma Nuxt Troubleshooting](https://www.prisma.io/docs/orm/more/help-and-troubleshooting)
- [pnpm Hoisting](https://pnpm.io/npmrc#hoist-pattern)
- [Nuxt 4 Documentation](https://nuxt.com/docs)
