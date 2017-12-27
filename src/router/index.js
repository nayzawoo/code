import Vue from 'vue'
import Router from 'vue-router'
import BubbleSort from '../components/sortings/BubbleSort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bubble',
      component: BubbleSort,
    }
  ]
})
