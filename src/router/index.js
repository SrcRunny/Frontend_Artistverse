import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomepageView.vue'
import LyricsGeneratorGenreView from '../views/LyricsGeneratorGenreView.vue'
import LyricsGeneratorMoodView from '@/views/LyricsGeneratorMood.vue'
import LyricsGeneratorArtistView from '@/views/LyricsGeneratorArtistView.vue'
import LayoutView from '../views/LayoutView.vue'
//for test
import GsapCard from '../components/GsapCard.vue'
import AssisatanceView from '@/views/AssisatanceView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/generate-lyrics-genre',
      name: 'generate-lyrics-genre',
      component: LyricsGeneratorGenreView
    },
    {
      path: '/generate-lyrics-mood',
      name: 'generate-lyrics-mood',
      component: LyricsGeneratorMoodView
    },
    {
      path: '/generate-lyrics-artist',
      name: 'generate-lyrics-artist',
      component: LyricsGeneratorArtistView
    },
    {
      path: '/layoutview',
      name: 'layoutview',
      component: LayoutView
    },
    {
      path: '/gsapcard',
      name: 'gsapcard',
      component: GsapCard
    },
    {
      path: '/ai-assistance',
      name: 'ai-assistance',
      component: AssisatanceView
    }

    // {
    //   path: '/artist/0',
    //   name: 'generate-lyrics',
    //   component: LyricsGenerator
    // }
  ]
})

export default router
