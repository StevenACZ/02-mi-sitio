<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";

definePageMeta({
  layout: "login-layout",
});

const toast = useToast();

const fields: AuthFormField[] = [
  {
    name: "name",
    type: "text",
    label: "Nombre",
    placeholder: "Ingrese su nombre",
    required: true,
  },
  {
    name: "lastname",
    type: "text",
    label: "Apellido",
    placeholder: "Ingrese su apellido",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Ingrese su correo electrónico",
    required: true,
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "Ingrese su contraseña",
    required: true,
  },
  {
    name: "password_confirmation",
    label: "Confirmar contraseña",
    type: "password",
    placeholder: "Ingrese su contraseña nuevamente",
    required: true,
  },
  {
    name: "remember",
    label: "Recuérdame",
    type: "checkbox",
  },
];

const schema = z.object({
  name: z
    .string("El nombre es requerido")
    .min(3, "Debe tener al menos 3 caracteres"),
  lastname: z
    .string("El apellido es requerido")
    .min(3, "Debe tener al menos 3 caracteres"),
  email: z
    .string("El correo electrónico es requerido")
    .email("Correo electrónico inválido"),
  password: z
    .string("La contraseña es requerida")
    .min(8, "Debe tener al menos 8 caracteres"),
  password_confirmation: z
    .string("La confirmación de la contraseña es requerida")
    .min(8, "Debe tener al menos 8 caracteres"),
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log("Submitted", payload);
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Registrarse"
        description="Registrese
      para acceder a su cuenta."
        icon="i-lucide-user-plus"
        :fields="fields"
        @submit="onSubmit"
        :ui="{ leadingIcon: 'text-2xl' }"
      />
    </UPageCard>

    <UButton
      color="primary"
      variant="ghost"
      label="Ya tienes cuenta? Inicia sesión"
      to="/login"
    />
  </div>
</template>

<style lang="scss" scoped></style>
