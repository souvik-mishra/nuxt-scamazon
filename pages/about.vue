<template>
    <div>
        <p class="mt-7 text-6xl border-b-2 mb-4 pb-2">ABOUT US</p>
        <p>Feel free to reach out to Youssef Avineri Halevi</p>
    </div>
</template>

<script setup>
 const { data } = await useFetch('/api/user')
</script>

<style scoped>

</style>