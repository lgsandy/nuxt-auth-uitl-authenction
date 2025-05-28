<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b">
        <div class="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" class="mr-2 h-4" />

        </div>
      </header>
      <div class="min-h-[100vh] flex-1 rounded-xl  md:min-h-min px-4 py-4">
        <slot />
      </div>
    </SidebarInset>


  </SidebarProvider>
</template>

<script lang="ts" setup>

</script>

<style></style>