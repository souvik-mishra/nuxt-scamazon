<template>
    <div>
        <p class="mt-7 text-6xl border-b-2 mb-4 pb-2">HOME</p>
        <div v-if="textStore.quote">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gbihv5hGKKoa1J2TBxIp8O15WafqTV95Aw&usqp=CAU" alt="pic" class="p-8 mb-4">
            <p class="shadow-sm">
                Welcome to Scamazon online marketplace! We are thrilled to have you here.

                At our marketplace, we strive to provide a seamless and enjoyable shopping experience for our customers. We offer a wide variety of products from trusted sellers, ranging from electronics to home goods and everything in between. Our platform is easy to navigate, and we're constantly working to improve it to meet the needs of our customers.

                {{ textStore.quote }}
            </p>
        </div>
        <p v-else>LOADING...</p>
    </div>
</template>

<script setup>
   import { useTextStore } from '@/stores/textStore'
   const textStore = useTextStore()
   textStore.getText() 
</script>

<style scoped>

</style>