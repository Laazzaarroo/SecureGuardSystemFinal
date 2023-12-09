<template>
    <appbar/>
    <clientnavbar/>

</template>

<script>
import clientnavbar from '../components/navbarclient.vue'
import appbar from '../components/appbar.vue'
export default {
    name: 'shop',
    components:{
        clientnavbar, appbar,
    }
}
</script>