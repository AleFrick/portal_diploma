<template>
    <div class='mainFooter'>{{texto}}</div>
</template>
<script>
export default {
    name: 'Footer',
    data () {

    },
    props: {
        texto: String
    }
}
</script>
<style scoped>
.mainFooter {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #17A2B8;
    color: white;
    text-align: center;
    font-size: 11px;
}
</style>