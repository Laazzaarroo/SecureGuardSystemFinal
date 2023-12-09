<template>
    <appbar/>
    <adminnavbar /> 
    <v-main style="height: 250px;" color>
        <product_table/>    
    </v-main>
</template>

<script>
import product_table from '../components/product_table.vue'
import adminnavbar from '../components/navbar.vue'
import appbar from '../components/appbar.vue'
export default {
    components: {
        adminnavbar, appbar, product_table
    }
}

</script>