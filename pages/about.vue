<template>
    <div>
        <p class="mt-7 text-6xl border-b-2 mb-4 pb-2">ABOUT US</p>
        <p>For any queries, feel free to reach out to our director, <em>{{ data.results[0].name.title }} {{ data.results[0].name.first }} {{ data.results[0].name.last }}</em> via our email <strong>{{data.results[0].email}}</strong>. For F2Fs please visit our office at <em>{{data.results[0].location.city}}, {{data.results[0].location.state}}</em> in <strong>{{data.results[0].location.country}}</strong></p>
    </div>
</template>

<script setup>
 const { data } = await useFetch('https://randomuser.me/api/')
</script>

<style scoped>

</style>