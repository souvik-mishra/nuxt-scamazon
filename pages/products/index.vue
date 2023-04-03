<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p.id">
                <product-card :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { data:products } = await useFetch('https://fakestoreapi.com/products')
    useHead({
        title: 'Scamazon | Products',
        meta: [
          { name: 'description', content: 'Products of Scamazon'}
        ]
    })
</script>

<style scoped>

</style>