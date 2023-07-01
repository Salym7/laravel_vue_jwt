<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="">
                    <router-link class="me-3" :to="{ name: 'fruit.index' }"
                        >test</router-link
                    >
                    <router-link class="me-3" :to="{ name: 'user.login' }"
                        >Login</router-link
                    >
                    <router-link
                        class="me-3"
                        :to="{ name: 'user.registration' }"
                        >Registration</router-link
                    >
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.")
    },
}
</script>
