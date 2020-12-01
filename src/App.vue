<template>
  <div id="app">
    <NavBar nomeEmpresa='AVMB' />
    <router-view/>
    <Footer texto='Copyright © 2020 AVMB Soluções em TI. Todos os direitos reservados.'/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
