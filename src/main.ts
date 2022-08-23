import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// @ts-ignore
import VueDrawioPreview from 'vue-drawio-preview'


createApp(App).use(VueDrawioPreview).mount('#app')
