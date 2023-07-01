<template>
    <div>Login</div>
    <div class="w-25">
        <input
            class="form-control mt-3 mb-3"
            type="email"
            id="email"
            placeholder="email"
        />
        <input
            class="form-control mb-3"
            type="password"
            id="password"
            placeholder="password"
        />
        <input
            class="form-control btn btn-primary"
            type="submit"
            name=""
            id=""
            value="login"
        />
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component List of fruits.")
    },
}
</script>
