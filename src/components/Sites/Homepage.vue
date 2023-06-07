<script setup lang="ts">
import {posts} from "../../data/pictures.ts";
import PostCard from "./PostCard.vue";
import {ref} from "vue";

const last_10_posts = ref(posts.value.slice(-10))



</script>

<template>
    <h1>Homepage</h1>
    <PostCard :post="item" v-for="item in last_10_posts" />
</template>

<style scoped>

</style>
