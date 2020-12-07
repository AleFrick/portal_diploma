import Vue from 'vue'
import Router from 'vue-router'
import DadosDiploma from '@/pages/DadosDiploma'
import DadosLinkUnico from '@/pages/DadosLinkUnico'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/diploma/',
      name: 'DadosDiploma',
      component: DadosDiploma
    },
    {
      path: '/:codigo',
      name: 'DadosLinkUnico',
      component: DadosLinkUnico
    }
  ]
})
