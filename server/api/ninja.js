export default defineEventHandler((event) => {
    const { name } = getQuery(event)
    return {
        home: `Hello ${name}! Scamazon is a site where we sell you scammed rip offs from popular E-Commerce websites`,
        about: `For any complaints or any assistance, call us at 1-800-GOTCHA or email us at udafool@scamazon.com`
    }
})