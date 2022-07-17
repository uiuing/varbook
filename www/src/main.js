import { createPinia } from 'pinia'
import { createApp } from 'vue'

import copyright from '@/utils/window/copyright'
import { color } from '@/utils/window/theme'

import VARBook from './VARBook.vue'

color.auto()
copyright.init()

createApp(VARBook).use(createPinia()).mount('var-book')
