<script setup lang="ts">

import {ref} from "vue";

const pic_url = ref("uwu")

const get_url = () => {
    const file = document.getElementById("file")
    const preview = document.getElementById("img-preview")


    const files = file.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(files)
    reader.addEventListener("load", () => {
        preview.style.display = "block"
        preview.innerHTML = '<img src="' + reader.result + '" style=" width: 450px; height: auto"/>'
        console.log(preview.innerHTML)
    })
    console.log(files)
}

</script>

<template>
    <fieldset class="grid-container">
        <div class="head">
            <h1>Add Post</h1>
        </div>
        <div class="file" style="overflow: hidden">
            <input type="file" id="file" @input="get_url" accept=".jpg, .jpeg, .png" style="display: none">
            <input type="button" value="Browse..." onclick="document.getElementById('file').click()"/>
        </div>
        <div class="title">
            <textarea name="title" id="title" placeholder="title"></textarea>
        </div>
        <div class="mention">
            <input type="text" placeholder="mention">
        </div>
        <div id="img-preview" class="pic">

        </div>
        <div class="submit">
            <router-link :to="{name: 'homepage'}">
                <input type="button" value="Post">
            </router-link>
        </div>
    </fieldset>
</template>

<style scoped>
div {
    padding: 1rem 0 1rem 0;
    text-align: left;
    width: 200%;
}

#img-preview img {
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    height: auto;
    display: inline-block;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
"head ."
"file pic"
"title pic"
"mention pic"
"submit .";
}

.file {
    grid-area: file;
}

.pic {
    grid-area: pic;
}

.title {
    grid-area: title;
}

.mention {
    grid-area: mention;
}

.submit {
    grid-area: submit;
    text-align: right;
}

.head {
    grid-area: head;
    text-align: center;
}


</style>
