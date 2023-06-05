<script setup lang="ts">

import Navbar from "./components/Navigation/Navbar.vue";
</script>
<template>
    <div class="div_content">
        <Navbar/>
        <div style="height: 4rem"></div>
        <suspense>
            <router-view/>
        </suspense>
    </div>
</template>
<style scoped>
.div_content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
