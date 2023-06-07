<script setup lang="ts">
import {IPost} from "../../data/pictures.ts";

const props = defineProps<{
    post: IPost
}>()

</script>

<template>
    <fieldset class="grid-container" style="width: 625px !important; margin: 1.5rem 0 1.5rem 0">
        <div class="pic">{{ props.post.url }}</div>
        <div class="title">{{ props.post.title }}</div>
        <div class="like">&lt;3</div>
        <div class="comment">"..."</div>
        <div class="share">&lt;--</div>
        <div class="date">{{ props.post.date }}</div>

    </fieldset>
</template>

<style scoped>

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    grid-template-areas:
    " pic pic pic"
    "title title title"
    "like comments share"
    ". . date"
}

.pic {
    grid-area: pic;
    width: 600px;
    height: 600px;
    background: linear-gradient(-45deg, rgba(0, 0, 0, 1) 0%, rgba(68, 68, 68, 1) 11%, rgba(25, 25, 25, 1) 22%,
    rgba(56, 51, 51, 1) 36%, rgba(54, 50, 50, 1) 43%, rgba(0, 0, 0, 1) 48%, rgba(59, 59, 59, 1) 54%,
    rgba(78, 78, 78, 1) 56%, rgba(78, 78, 78, 1) 60%, rgba(43, 43, 44, 1) 65%, rgba(38, 38, 38, 1) 68%,
    rgba(73, 73, 73, 1) 72%, rgba(44, 45, 51, 1) 79%, rgba(65, 65, 65, 1) 87%, rgba(0, 0, 0, 1) 100%);
    margin-top: 1.5rem;
    text-align: center;
}

.title {
    grid-area: title;
    text-align: left;
    margin: 0;
}

.like {
    grid-area: like;
}

.comment {
    grid-area: comments;
}

.share {
    grid-area: share;
}

.date {
    grid-area: date;
    margin: 0;
    text-align: right;
}

div {
    margin: 1rem;
}


</style>
