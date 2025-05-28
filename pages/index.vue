<script setup lang="ts">
useHead({
    title: "Dashboard"
})
definePageMeta({
    layout: 'auth',
    middleware: "auth"
})
const { user, clear } = useUserSession()

async function logout() {
    await clear();
    navigateTo("/login")
}
</script>
<template>
    <div>Home pages</div>
    <pre>{{ user }}</pre>
    <Button @click="logout">Logout</Button>
</template>