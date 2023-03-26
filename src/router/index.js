import { createRouter, createWebHistory } from 'vue-router'
import GuestHouseApp from '../views/GuestHouse/_App.vue'
import GuestHouseHome from '../views/GuestHouse/Home.vue'
import GuestHouseAccess from '../views/GuestHouse/Access.vue'
import GuestHouseReserve from '../views/GuestHouse/Reserve.vue'
import SpaceApp from '../views/Space/_App.vue'
import SpaceHome from '../views/Space/Home.vue'
import NewsIndex from '../views/News/Index.vue'
import ContactForm from '../views/Contact/Form.vue'
import Owner from '../views/Owner/Show.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/guest_house',
      name: 'GuestHouseApp',
      component:GuestHouseApp,
      children: [
        {
          path: '',
          name: 'GuestHouseHome',
          component: GuestHouseHome,
        },
        {
          path: '/guest_house/access',
          name: 'GuestHouseAccess',
          component: GuestHouseAccess,
        },
        {
          path: '/guest_house/reserve',
          name: 'GuestHouseReserve',
          component: GuestHouseReserve,
        },
        {
          path: '/guest_house/contact',
          name: 'GuestHouseContactForm',
          component: ContactForm,
        },
        {
          path: '/guest_house/owner',
          name: 'GuestHouseOwner',
          component: Owner,
        },
        {
          path: '/guest_house/news',
          name: 'GuestHouseNews',
          component: NewsIndex,
        },
        {
          path: '/guest_house/news/:id',
          component: () => import('../views/News/_id.vue'),
          props: true,
        },
      ]
    },
    {
      path: '/space',
      name: 'space',
      component: SpaceApp,
      children: [
        {
          path: '',
          name: 'SpaceHome',
          component: SpaceHome,
        },
        {
          path: '/space/owner',
          name: 'SpaceOwner',
          component: Owner,
        },
        {
          path: '/space/news',
          name: 'SpaceNewsIndex',
          component: NewsIndex,
        },
        {
          path: '/space/contact',
          name: 'SpaceContactForm',
          component: ContactForm,
        },
        {
          path: '/space/news/:id',
          component: () => import('../views/News/_id.vue'),
          props: true,
        }
      ]
    },
  ],
  // ページ遷移でスクロール位置を TOP に戻す
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
