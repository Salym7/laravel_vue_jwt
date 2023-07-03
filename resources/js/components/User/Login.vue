<template>
    <div>Login</div>
    <div class="w-25">
        <input
            class="form-control mt-3 mb-3"
            type="email"
            id="email"
            placeholder="email"
            v-model="email"
        />
        <input
            class="form-control mb-3"
            type="password"
            id="password"
            placeholder="password"
            v-model="password"
        />
        <input
            class="form-control btn btn-primary"
            type="submit"
            name=""
            id=""
            value="login"
            @click.prevent="login"
        />
        <div v-if="error" class="mt-3 text-danger">{{ error }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            error: null,
        }
    },
    mounted() {
        console.log("Component List of fruits.")
    },
    methods: {
        login() {
            axios
                .post("/api/auth/login", {
                    email: this.email,
                    password: this.password,
                })
                .then((res) => {
                    console.log(res.data.access_token)
                    localStorage.access_token = res.data.access_token
                    this.$router.push({ name: "user.personal" })
                })
                .catch((error) => {
                    this.error = error.response.data.error
                })
        },
    },
}
</script>
