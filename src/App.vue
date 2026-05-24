<template>
    <div>
        <Navbar />

        <router-view></router-view>
        
        <Footer></Footer>
    </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
// មិនត្រូវ Import Shop មកទីនេះទេ ព្រោះ Shop នឹងត្រូវគ្រប់គ្រងដោយ Router
</script>