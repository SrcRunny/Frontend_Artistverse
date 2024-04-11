import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomepageView.vue'
import LyricsGenerator from '../views/LyricsGeneratorView.vue'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/generate-lyrics',
      name: 'generate-lyrics',
      component: LyricsGenerator
    },
    {
      path: '/layoutview',
      name: 'layoutview',
      component: LayoutView
    },
    // {
    //   path: '/artist/0',
    //   name: 'generate-lyrics',
    //   component: LyricsGenerator
    // }
  ]
})

export default router
