<template>
    <appbar/>
    <adminnavbar /> 
</template>

<script>
import product_table from '../components/product_table.vue'
import adminnavbar from '../components/navbar.vue'
import appbar from '../components/appbar.vue'
export default {
    name: "ticket",
    components: {
        adminnavbar, appbar, product_table
    }
}
</script>