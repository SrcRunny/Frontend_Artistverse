import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomepageView.vue'
import LyricsGeneratorGenreView from '../views/LyricsGeneratorGenreView.vue'
import LyricsGeneratorMoodView from '@/views/LyricsGeneratorMood.vue'
import LyricsGeneratorArtistView from '@/views/LyricsGeneratorArtistView.vue'
import LayoutView from '../views/LayoutView.vue'
import RecommendSongView from '@/views/RecommendSongView.vue'
import GuitarChordView from '@/views/GuitarChordView.vue'
import PianoChordView from '@/views/PianoChordView.vue'
//for test
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
      path: '/ai-assistance',
      name: 'ai-assistance',
      component: AssisatanceView
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: RecommendSongView
    },
    {
      path: '/guitarchord',
      name: 'guitarchord',
      component: GuitarChordView
    },
    {
      path: '/pianochord',
      name: 'pianochord',
      component: PianoChordView
    }
  ]
  
})

export default router
