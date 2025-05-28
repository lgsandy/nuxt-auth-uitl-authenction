<script setup lang="ts">
definePageMeta({
    middleware: "guest"
})
useHead({
    title: "login"
})
const { loggedIn, user, session, fetch: fetchUserSession, clear } = useUserSession()
const username = ref('admin')
const password = ref('password')

async function login() {
    await $fetch('/api/login', {
        method: "POST",
        body: { username: username.value, password: password.value }
    })
    await fetchUserSession()
    navigateTo("/")
}

</script>
<template>
    <div class="flex justify-center items-center h-screen w-full">
        <Card class="w-1/4">
            <CardHeader>
                <CardTitle class="text-2xl">
                    Login
                </CardTitle>
                <CardDescription>
                    Enter your email below to login to your account.
                </CardDescription>
            </CardHeader>
            <CardContent class="grid gap-4">
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <Input v-model="username" id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div class="grid gap-2">
                    <Label for="password">Password</Label>
                    <Input v-model="password" id="password" type="password" required />
                </div>
            </CardContent>
            <CardFooter>
                <Button class="w-full" @click="login">
                    Sign in
                </Button>
            </CardFooter>
        </Card>
    </div>

</template>
