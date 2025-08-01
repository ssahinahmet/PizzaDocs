# Cloudflare Tünelleri ile Ters Proxy Kurulumu

<p style="font-size:13px;">Bu rehber, Ubuntu (Linux) bir VPS veya adanmış sunucu üzerinde Cloudflare Tünellerini kullanarak bir ters proxy kurma adımlarını gösterecektir.</p>

Bir ters proxy, kendi barındırdığınız Node.js uygulamalarınız (web siteleri ve yönetim paneline sahip botlar gibi) için özel bir alan adı kullanmanıza olanak tanır. Bu rehber, Cloudflare Tünellerini kullanarak bir ters proxy kurma adımlarını gösterecek ve bu belgelemenin temel işletim sistemi olarak Ubuntu'yu kullanacaktır. Daha gelişmiş bir seçenek istiyorsanız, [buraya](https://www.google.com/search?q=setting-up-a-reverse-proxy-with-nginx) gidin.

::: danger
<p style="font-size:13px;">Bu rehber yalnızca bir VPS, adanmış sunucu veya benzeri bir ortam kullanıyorsanız geçerlidir. Paylaşımlı hosting, özel ters proxy kurulumlarını desteklemez.</p>
:::

### Ters Proxy Nedir?

Bir ters proxy, istemcilerden (örn. web tarayıcıları) gelen istekleri başka bir sunucuya ileten bir sunucudur. Örneğin, bir kullanıcı `https://alanadiniz.com` adresini ziyaret ettiğinde, ters proxy isteği yerel olarak çalışan uygulamanıza (örn. `http://localhost:3000` adresine) yönlendirir. Bu, aşağıdakiler için önemlidir:

  * Uygulamanızla özel bir alan adı kullanmak.
  * HTTPS'i (güvenli bağlantılar) yönetmek.
  * Daha iyi performans ve güvenlik yönetimi.

Bu rehber, aşağıdaki ön koşullara sahip olduğunuzu varsayar:

1.  Bir Ubuntu VPS veya adanmış sunucu.
2.  DNS'i Cloudflare tarafından yönetilen bir alan adı.
3.  Node.js uygulamanızın yerel olarak çalışıyor olması (örn. `http://localhost:3000`).

### Artıları:

  * Ücretsiz
  * Tam GUI, sıfır konfigürasyon dosyası
  * Uygulamanızı bir güvenlik duvarının arkasına koyabilirsiniz
  * Gerçek IP adresinizi açığa çıkarmaya gerek yok
  * Nginx, Caddy veya Traefik gibi bir ters proxy yazılımına gerek yok
  * Sıfır konfigürasyonlu SSL
  * Ücretsiz SSL

### Eksileri:

  * (Zaten Cloudflare kullanıyorsanız bu bir eksi değildir) Alan adınızın isim sunucularının Cloudflare'a taşınması gerekir.

### Adım 1. Tünel Oluşturma

Bir tünel, Cloudflare sunucularına giden ve sunucunuzda çalışan daemon `cloudflared` ile iletişim kurarak gelen trafiği tünel aracılığıyla güvenli bir şekilde uygulamaya yönlendiren bir ters proxydir. Bir tünel oluşturmak için şu adımları izleyin:

1.  Cloudflare'a giriş yapın, ardından [Cloudflare Zero Trust](https://dash.teams.cloudflare.com/) sayfasına gidin.
2.  `Network` (Ağ) bölümüne, ardından `Tunnels` (Tüneller) bölümüne ve sonra `Create a Tunnel` (Tünel Oluştur) seçeneğine gidin. Görsel adımları göstermek için aşağıya bir resim de yerleştirilmiştir.

<figure>
  <img src="https://1969737448-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FqwlxYjWFM5WTbNhtK52s%2Fuploads%2FcncV5TIrd5uYpyOxunCv%2Ffirefox_hC8sjqHYkv.png?alt=media&token=961fcf68-fbf5-4e30-ac15-6389d8363e05" alt="">
  <figcaption></figcaption>
</figure>


3.  2 tünel tipi gördüğünüzde, `Select Cloudflared` (Cloudflared'i Seç) seçeneğine tıklayın.

<figure>
  <img src="https://1969737448-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FqwlxYjWFM5WTbNhtK52s%2Fuploads%2FL9FgRPtHH6KJy8X7i39b%2Ffirefox_elCzZjrZCt.png?alt=media&token=64d0b71e-2d99-4159-b291-8dad21e460dd" alt="">
  <figcaption></figcaption>
</figure>


4.  Tünel adınıza istediğiniz bir ismi verin, örneğin `pizza_server`.
5.  Şimdi bağlayıcıyı (`cloudflared`) kurmanız ve çalıştırmanız gereken bir ekrana yönlendirilmelisiniz. Mimarinize ve işletim sisteminize bağlı olarak, aşağıda size sunulan adımları izleyerek `cloudflared`'i kurmalısınız.
6.  Size verilen adımları tamamladıktan sonra, bağlayıcınızı görmelisiniz. `Next` (İleri) düğmesine tıklayın. Bağlayıcı başarıyla yüklendi.

### Adım 2: Uygulamamız İçin Bir Alan Adı Ayarlama

Bağlayıcıyı kurduğumuza göre, uygulamaya erişebileceğimiz bir alan adı oluşturmalıyız.

Bağlayıcıyı başarıyla kurduktan sonra, aşağıdaki resme benzer bir sayfaya yönlendirilmelisiniz. Eksik alanları doldurmak için şunları yapın:

  * Ortak ana bilgisayar adı (public hostname) için, favori alan adınızı girin. Bu, yönetim paneline erişmek için kullanılacaktır. Halihazırda var olan bir DNS kaydı olmamalıdır.
  * Aşağıdaki hizmet alanında, tür için HTTP'yi seçin ve URL `localhost:<uygulamanızın kullandığı port>` olmalıdır. Örneğin, uygulama 3000 portunu kullanıyorsa, `localhost:3000` yazmalısınız.
  * Son olarak, `Save Hostname` (Ana Bilgisayar Adını Kaydet) düğmesine tıklayın.

<figure>
  <img src="https://1969737448-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FqwlxYjWFM5WTbNhtK52s%2Fuploads%2FqnWBQ5klRfoz6FEeMe53%2Ffirefox_vKzJENoQD4.png?alt=media&token=2c4103e8-bd8c-4fea-995d-ef20da0fd716" alt="">
  <figcaption></figcaption>
</figure>


### Adım 3: Uygulamanın Alan Adımızı Tanımasını Sağlama

Her şeyi kurduğumuza göre, şimdi uygulamayı proxy'leri kabul edecek şekilde yapılandırmalıyız. `config.yml` dosyanıza gidin ve `Secure` ve `trustProxy` değerlerini bulun. `Secure`'ı devre dışı bırakmalı ve bunun yerine `trustProxy`'yi etkinleştirmelisiniz. Şuna benzer görünmelidir:

```yaml
Secure: false # HTTPS kullanıyorsanız etkinleştirin
trustProxy: true # Uygulamanız bir ters proxy'nin arkasındaysa (Cloudflare, Nginx vb. gibi) etkinleştirin
```

URL ve geri arama URL'sinin alan adıyla eşleştiğinden emin olun, yapılandırmayı kaydedin ve uygulamayı yeniden başlatın.

### Adım 4: Son Doğrulama

DNS değişiklikleri yayıldıktan sonra, Cloudflare Zero Trust'ta ayarlanan alan adını kullanarak uygulamanıza erişebilmelisiniz. (örn. `https://example.com`)

### Birden Fazla Ortak Ana Bilgisayar Adı Ekleme

Aynı sunucuda barındırılan birden fazla uygulamanız varsa, her uygulama için bir ortak ana bilgisayar adı oluşturabilirsiniz. Bunu yapmak için `Network` (Ağ) bölümüne, ardından `Tunnels` (Tüneller) bölümüne geri dönün, ardından tünelinize tıklayın ve `Edit` (Düzenle) düğmesine tıklayın. `Public Hostname` (Ortak Ana Bilgisayar Adı) sekmesine ve ardından `Add a public hostname` (Bir ortak ana bilgisayar adı ekle) seçeneğine gidin. Ardından, [Adım 2: Uygulamamız İçin Bir Alan Adı Ayarlama](https://www.google.com/search?q=%23ad%C4%B1m-2-uygulamamiz-i%C3%A7in-bir-alan-ad%C4%B1-ayarlama) ve [Adım 3: Uygulamanın Alan Adımızı Tanımasını Sağlama](https://www.google.com/search?q=%23ad%C4%B1m-3-uygulaman%C4%B1n-alan-ad%C4%B1m%C4%B1z%C4%B1-tan%C4%B1mas%C4%B1n%C4%B1-sa%C4%9Flama) adımlarını tekrarlayın.

:::tip
<p style="font-size:13px;">Tebrikler\! Kurulumunuz tamamlandı. Her şey doğru yapılandırıldıysa, uygulamanız özel alan adınız üzerinden erişilebilir olmalıdır. Herhangi bir sorunla karşılaşırsanız, yukarıdaki adımları tekrar kontrol edin veya yardım için destekle iletişime geçin.</p>
:::