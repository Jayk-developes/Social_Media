// @ts-ignore
import {createRouter, createWebHashHistory} from "vue-router";
import Homepage from "../components/Sites/Homepage.vue";
import ForYou from "../components/Sites/ForYou.vue";
import AddPost from "../components/Sites/AddPost.vue";
import Profile from "../components/Sites/Profile.vue";


const routes = [
    {path: "/", component: Homepage, name: "homepage"},
    {path: "/foryou", component: ForYou, name: "for_you"},
    {path: "/add", component: AddPost, name: "add_post"},
    {path: "/profile", component: Profile, name: "profile"},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
