<template>
  <div class="flex flex-col h-screen">
    <!-- <MainNavigation /> -->
    <!-- Header -->
    <SharedHeader />

    <!-- Main -->
    <main class="container mx-auto flex-1 mt-8">
      <slot></slot>
    </main>

    <!-- Footer -->
    <SharedFooter />
  </div>
</template>
