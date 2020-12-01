<template>
    <div id='idNav'>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#/">{{nomeEmpresa}}</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#/diploma">Diplomas</b-nav-item>
                    <!-- <b-nav-item href="#/sobre" >Sobre</b-nav-item> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>


<script>
export default {
    name: 'NavBar',
    data () {

    },
    props: {
        nomeEmpresa: String
    }
}
</script> 