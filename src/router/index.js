import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import Stats from '../pages/Stats'
import Currents from '../pages/Currents'


Vue.use(Router)

export default new Router({
  routes: [
    {
        name: 'HomePage',
        path: '/homepage',
        component: HomePage
    },
    {
        name: 'Stats',
        path: '/stats',
        component: Stats
    },
    {
        name: 'Currents',
        path: '/currents',
        component: Currents
    }
  ]
})