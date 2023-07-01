<template>
    <div>Registration</div>
    <div class="w-25">
        <input
            id="name"
            v-model="name"
            class="form-control mt-3 mb-3"
            type="text"
            name=""
            placeholder="name"
        />
        <input
            id="email"
            v-model="email"
            class="form-control mb-3"
            type="email"
            name=""
            placeholder="email"
        />
        <input
            id="password"
            v-model="password"
            class="form-control mb-3"
            type="password"
            name=""
            placeholder="password"
        />
        <input
            id="password_confirmation"
            v-model="password_confirmation"
            class="form-control mb-3"
            type="password"
            name=""
            placeholder="confirm password"
        />
        <input
            class="form-control btn btn-primary"
            @click.prevent="store"
            type="submit"
            name=""
            id=""
            value="Registration"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },
    methods: {
        store() {
            axios
                .post("/api/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    mounted() {
        console.log("Component List of fruits.")
    },
}
</script>
