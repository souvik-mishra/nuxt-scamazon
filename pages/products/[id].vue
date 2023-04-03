<template>
    <div>
        <Head>
            <Title>Scamazon | {{product.title}}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <product-details :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/'+id
    const {data: product} = await useFetch(uri)
    if(!product.value){
        throw createError({ statusCode: 404, statusMessage: 'Product not found'})
    }
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>