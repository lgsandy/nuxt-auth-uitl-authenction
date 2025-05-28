export default defineEventHandler(async (event) => {
    const { username, password } = await readBody(event);
    console.log(username, password)
    if (username == 'admin' && password == 'password') {
        await setUserSession(event, {
            user: {
                name: "admin",
                role: "admin",
            }
        })
        return { success: true }
    } else {
        throw createError({
            statusCode: 401,
            message: "User Not found"
        })
    }
})