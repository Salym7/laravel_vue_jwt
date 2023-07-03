<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="">
                    <router-link class="me-3" :to="{ name: 'fruit.index' }"
                        >List</router-link
                    >
                    <router-link
                        v-if="!accessToken"
                        class="me-3"
                        :to="{ name: 'user.login' }"
                        >Login</router-link
                    >
                    <router-link
                        v-if="!accessToken"
                        class="me-3"
                        :to="{ name: 'user.registration' }"
                        >Registration</router-link
                    >
                    <router-link
                        v-if="accessToken"
                        class="me-3"
                        :to="{ name: 'user.personal' }"
                        >Personal</router-link
                    >
                    <a
                        href="#"
                        v-if="accessToken"
                        @click.prevent="logout"
                        class="me-3"
                        >Logout</a
                    >
                    <router-view :key="$route.fullPath"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from "./../api"
export default {
    mounted() {
        console.log("Component mounted.")
    },

    data() {
        return {
            accessToken: null,
        }
    },

    mounted() {
        this.getAccessToken()
    },
    updated() {
        this.getAccessToken()
    },
    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem("access_token")
        },
        logout() {
            API.post("/api/auth/logout").then((res) => {
                localStorage.removeItem("access_token")
                this.$router.push({ name: "user.login" })
            })
        },
    },
}
</script>
