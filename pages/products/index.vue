<template>
    <div>
        <div class="grid grid-cols-4 gap-5" v-if="textStore.products.length">
            <div v-for="p in textStore.products" :key="p.id">
                <product-card :product="p" />
            </div>
        </div>
        <div v-else>LOADING...</div>
    </div>
</template>

<script setup>
    import { useTextStore } from '@/stores/textStore'
    definePageMeta({
        layout: 'products'
    })
    const textStore = useTextStore()
    textStore.getProducts()
    useHead({
        title: 'Scamazon | Products',
        meta: [
          { name: 'description', content: 'Products of Scamazon'}
        ]
    })
</script>

<style scoped>

</style>