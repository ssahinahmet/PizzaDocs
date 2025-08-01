import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    // Başlıkları değiştiren fonksiyon
    function replaceTitles() {
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

    // Sayfa ilk yüklendiğinde
    onMounted(() => {
      replaceTitles()
    })

    // Sayfa değiştiğinde
    watch(() => router.route.path, () => {
      // Vue bileşeni tam render olmadan çalışabilir, ufak gecikme koyabiliriz
      setTimeout(() => {
        replaceTitles()
      }, 50)
    })
  }
}
