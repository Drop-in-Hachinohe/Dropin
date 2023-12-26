import { createRouter, createWebHistory } from 'vue-router'
import TopApp from '../views/Top/_App.vue'
import TopHome from '../views/Top/Home.vue'
import GuestHouseApp from '../views/GuestHouse/_App.vue'
import GuestHouseHome from '../views/GuestHouse/Home.vue'
import GuestHouseAccess from '../views/GuestHouse/Access.vue'
import GuestHouseReserve from '../views/GuestHouse/Reserve.vue'
import SpaceApp from '../views/Space/_App.vue'
import SpaceHome from '../views/Space/Home.vue'
import KurokamomeApp from '../views/Kurokamome/_App.vue'
import KurokamomeHome from '../views/Kurokamome/Home.vue'
import NewsIndex from '../views/News/Index.vue'
import ContactForm from '../views/Contact/Form.vue'
import Owner from '../views/Owner/Show.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top',
      component: TopApp,
      children: [
        {
          path: '',
          name: 'TopHome',
          component: TopHome,
        },
        {
          path: '/owner',
          name: 'TopOwner',
          component: Owner,
        },
        {
          path: '/contact',
          name: 'TopContactForm',
          component: ContactForm,
        },
        {
          path: '/news',
          name: 'TopNews',
          component: NewsIndex,
        },
        {
          path: '/news/:id',
          component: () => import('../views/News/_id.vue'),
          props: true,
        },
      ]
    },
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
    {
      path: '/kurokamome',
      name: 'kurokamome',
      component: KurokamomeApp,
      children: [
        {
          path: '',
          name: 'KurokamomeHome',
          component: KurokamomeHome,
        },
        {
          path: '/kurokamome/owner',
          name: 'KurokamomeOwner',
          component: Owner,
        },
        {
          path: '/kurokamome/news',
          name: 'KurokamomeNewsIndex',
          component: NewsIndex,
        },
        {
          path: '/kurokamome/contact',
          name: 'KurokamomeContactForm',
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
