<script setup lang="ts">
import {posts} from "../../data/pictures.ts";
import PostCard from "./PostCard.vue";
import {ref} from "vue";



</script>

<template>
    <h1>For You Page</h1>
    <PostCard :post="item" v-for="item in posts" />
</template>

<style scoped>

</style>
