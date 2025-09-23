import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    // Başlıkları değiştiren fonksiyon
    function replaceTitles() {
      if (typeof document !== 'undefined') {
        document.querySelectorAll('.custom-block-title').forEach(el => {
          const map = {
            TIP: 'İPUCU',
            WARNING: 'UYARI',
            DANGER: 'TEHLİKE'
          }
          const key = el.innerText.trim()
          if (map[key]) {
            el.innerText = map[key]
          }
        })
      }
    }

    onMounted(() => {
      // İlk yükleme
      replaceTitles()

      // Route değiştiğinde
      watch(() => router.route.path, () => {
        setTimeout(() => {
          replaceTitles()
        }, 50)
      })
    })
  }
}
