<template>
  <div class="flex h-screen">
    <DashboardSidebar />

    <div class="flex flex-col flex-1 overflow-hidden">
      <DashboardNavbar />
      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
