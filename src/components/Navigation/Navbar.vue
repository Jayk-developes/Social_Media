<script setup lang="ts">

</script>

<template>
    <nav class="nav">
        <div class="nav-top">

            <router-link :to="{name: 'homepage'}" class="nav-item">
                <div >
                    Homepage
                </div>
            </router-link>
            <router-link :to="{name: 'for_you'}" class="nav-item" style="margin: auto">
                <div >
                    For You
                </div>
            </router-link>
            <div>
                <input type="text" class="nav-input" placeholder="Search">
            </div>
            <router-link :to="{name: 'add_post'}" class="nav-item" style="margin: auto">
                <div >
                    Add
                </div>
            </router-link>
            <router-link :to="{name: 'profile'}" class="nav-item">
                <div >
                    Profile
                </div>
            </router-link>
        </div>
    </nav>

</template>

<style scoped>

.nav {
    position: fixed;
    z-index: 50;
    width: 100%;
    top: 0;
    left: 0;
    height: 4rem;
    background: rgb(74, 100, 210);
    background: linear-gradient(42deg, rgba(74, 100, 210, 1) 0%, rgba(161, 99, 219, 1) 50%, rgba(203, 58, 182, 1) 100%);
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
}

.nav-top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.nav-item {
    color: white;
    margin: 0.2rem 1rem 0.2rem 1rem;
    padding: 0.75rem 4rem 0.75rem 4rem;
    text-decoration: None;
}

.nav-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
}

.nav-item:active {
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
}

.nav-input {
    background-color: rgba(200, 150, 250, .3);
    border: 1px solid rgba(150, 50, 255, .5);
    border-radius: .3rem;
    padding: 0 1rem 0 1rem;
    width: 20rem;
    height: 2rem;
    color: white;
}

::placeholder {
    color: white;
    opacity: 0.8;
}

</style>
