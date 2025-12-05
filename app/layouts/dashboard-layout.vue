<template>
  <UDashboardGroup storage="local" storageKey="dashboard" :persistent="true">
    <DashboardSidebar />

    <UDashboardPanel>
      <DashboardNavbar />

      <div class="flex-1 overflow-auto p-6">
        <slot />
      </div>
    </UDashboardPanel>
  </UDashboardGroup>
</template>
