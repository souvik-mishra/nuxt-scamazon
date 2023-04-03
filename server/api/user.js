export default defineEventHandler(async (event) => {
    const { data } = await $fetch('https://fakestoreapi.com/carts/5')
    return data
})