import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import DadosDiploma from '@/pages/DadosDiploma'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/diploma',
      name: 'DadosDiploma',
      component: DadosDiploma
    }
  ]
})
