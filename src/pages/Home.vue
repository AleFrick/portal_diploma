<template>
  <div class='msgCentro'>
    <b-row >
      <b-col></b-col>
      <b-col>
        <b-card bg-variant="Default" text-variant="black" title="">
          <b-card-text>
            Em desenvolvimento
          </b-card-text>          
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
  .msgCentro {    
    left: 50%;
    top: 50%;
  }
</style>
