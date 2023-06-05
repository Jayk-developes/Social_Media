<script setup lang="ts">

const tmp_data = {
    name: "Jayk_develops",
    title: "Just some dude, programming",
    descr: "lorem ipsum fgdfg dfg dfg dfg dfg dfgdfg sf ad asd asd as fsdfadhgk askdlfgj halfdkg hlasdkfg hlsdfhgs dkjfhsdfhg s fdhglhsdlfgh s fjghlskd fghlsjkdfhglks dfhglskdfhglksdfgh sldkfjghsldfs sdfghsldfgh lsfdg"
}

</script>

<template>
    <fieldset class="grid-container">
        <div class="pic">
            <div style="width: 100px; height: 100px; background-color: black"></div>
        </div>
        <div class="name"><h1>{{ tmp_data.name }}</h1></div>
        <div class="title"><strong>{{ tmp_data.title }}</strong></div>
        <div class="descr">{{ tmp_data.descr }}</div>
    </fieldset>

</template>

<style scoped>

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
"pic name . ."
"title title . ."
"descr descr . .";
}

.pic {
    grid-area: pic;
    padding-bottom: 2rem;
}

.name {
    grid-area: name;
}

.title {
    grid-area: title;
    text-align: left;
}

.descr {
    grid-area: descr;
    text-align: left;
}

</style>
