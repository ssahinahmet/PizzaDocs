export default {
  title: 'Pizza Development',
  description: 'Resmi Dokümantasyon',
  themeConfig: {
    nav: [
      { text: 'Ana Sayfa', link: '/' },
      { text: 'Discord', link: 'https://discord.gg/nBYxxSrHUd' },
      { text: 'Web', link: 'https://pizzadevelopment.net' }
    ],
    sidebar: [
      {
        text: 'Kurulum ve Ayarlar',
        items: [
          { text: 'Gereksinimler', link: '/kurulum-ve-ayarlar/gereksinimler' },
          { text: 'Windows Kurulum Rehberi', link: '/kurulum-ve-ayarlar/windows-kurulum-rehberi' },
          { text: 'Linux Kurulum Rehberi', link: '/kurulum-ve-ayarlar/linux-kurulum-rehberi' },
          { text: 'Bot Uygulama Kurulumu', link: '/kurulum-ve-ayarlar/bot-uygulama-kurulumu' },
          { text: 'MongoDB Kümesi Oluşturma', link: '/kurulum-ve-ayarlar/mongodb-kumesi-olusturma' },
          { text: 'Nginx ile Ters Proxy Kurulumu', link: '/kurulum-ve-ayarlar/nginx-ters-proxy' },
          { text: 'Cloudflare Tünelleri ile Ters Proxy Kurulumu', link: '/kurulum-ve-ayarlar/cloudflare-tunnel' }
        ]
      },
      {
        text: 'LoomTracker',
        items: [
          { text: 'Readme', link: '/loomtracker/readme' }
        ]
      }
    ]
  }
}
