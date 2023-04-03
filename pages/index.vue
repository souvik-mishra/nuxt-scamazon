<template>
    <div>
        <p class="mt-7 text-6xl border-b-2 mb-4 pb-2">HOME</p>
        <p>{{ data.home }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/ninja?name=Souvik')
</script>

<style scoped>

</style>