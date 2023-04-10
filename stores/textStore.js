import { defineStore } from 'pinia'

export const useTextStore = defineStore('text', {
    state: () => ({
        quote: null,
        contact: null,
        products: []
    }),
    // getters: {
    //     textTotal(){
    //         return this.cart.reduce((total, item) => {
    //             return total + (item.price * item.quantity)
    //         },0)
    //     }
    // },
    actions:{
        async getText(){
            const data = await $fetch('https://hipsum.co/api/?type=hipster-centric&sentences=30')
            this.quote = data[0]
        },
        async getContact(){
            const data = await $fetch('https://randomuser.me/api/')
            this.contact = data.results[0]
        },
        async getProducts(){
            const data = await $fetch('https://fakestoreapi.com/products')
            this.products = data
        }
    }
})