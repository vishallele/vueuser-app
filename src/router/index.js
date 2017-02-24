import Vue from 'vue'
import Router from 'vue-router'
import hello from 'components/Hello'
import User from 'components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/users',
      name: 'users',
      component: User
    }
  ]
})
