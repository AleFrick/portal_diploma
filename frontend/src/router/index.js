import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import DadosDiploma from '@/pages/DadosDiploma'
import Sobre from '@/pages/Sobre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/diploma',
      name: 'DadosDiploma',
      component: DadosDiploma
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    }
  ]
})
