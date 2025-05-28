<script setup lang="ts">
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from '@/components/ui/sidebar'
</script>

<template>
    <Sidebar>
        <SidebarHeader>
            <div>Hearder</div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <div>Content</div>
            </SidebarGroup>
            <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            <div>Footer</div>
        </SidebarFooter>
    </Sidebar>
</template>