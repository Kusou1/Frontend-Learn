<template>
    <h1 :style="{ color }">Vue</h1>
</template>

<script>
export default {
    // 类似observedAttributes
    data() {
        return {
            color: "purple",
        };
    },
    setup() {},
    beforeCreate() {},
    beforeMount() {},
    mounted() {
        this.color = 'red'
    }, //相当于connectedCallback
    beforeUpdate() {},
    Updated() {},
    beforeUnmount() {},
    unMounted() {}, //相当于disconnectedCallback
    watch: {
        color(newValue, oldValue) {
            this.$refs.dom.style.color = newValue;
        },
    },
};
</script>

<style>
</style>