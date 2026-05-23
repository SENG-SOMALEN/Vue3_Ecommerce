<template>
    <div>
        <Navbar/>
        <Shop/><router-view></router-view>
    </div>


</template>

<script setup>
import Navbar from './components/layout/Navbar.vue';
</script>