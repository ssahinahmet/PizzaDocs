  <h1>Nginx Reverse Proxy Kurulumu</h1>
  <p>Bu rehber, Ubuntu (Linux) VPS veya dedicated sunucuda Nginx kullanarak reverse proxy kurulumu adımlarını içerir.</p>


Reverse proxy, kendi alan adını kullanarak Node.js uygulamanı (panel, dashboard, API vb.) yayına almanı sağlar. Daha kolay bir seçenek için [Cloudflare Tüneller Rehberine](cloudflare-tunnel) göz atabilirsin.

::: danger
Bu rehber sadece VPS veya dedicated sunucular içindir. Paylaşımlı hostinglerde çalışmaz.
:::

### Reverse Proxy Nedir?

Kısaca, bir sunucu tarayıcıdan gelen istekleri arka plandaki uygulamaya yönlendirir. Mesela kullanıcı `https://alanadi.com`'a girdiğinde, bu istek aslında `localhost:3000`'daki botuna yönlendirilir.

Avantajları:

* Alan adını kullanabilirsin.
* HTTPS bağlantısı sağlar.
* Güvenlik ve hız iyileşir.

## Gerekli Şartlar:

1. Ubuntu VPS / Dedicated sunucu
2. `localhost:3000`'da çalışan bir Node.js uygulaması (Pizza panel, bot dashboard vs.)

---

##  Adım 1: Nginx Kurulumu

```bash
sudo apt update && sudo apt install nginx -y
sudo systemctl enable --now nginx
```

Tarayıcıdan sunucu IP'ni aç, "Welcome to nginx" yazısı görmelisin.

---

##  Adım 2: Dosyalarını Sunucuya Yükle

* FileZilla ya da WinSCP ile sunucuna bağlan.
* Ürün klasörünü `/home/pizza` gibi bir dizine koy.

---

##  Adım 3: Nginx Yapılandırması

```bash
sudo nano /etc/nginx/sites-available/alanadi.com
```

Aşağıdaki örneği düzenle:

```nginx
server {
    listen 80;
    server_name alanadi.com www.alanadi.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
    }

    error_page 502 /502.html;
    location = /502.html {
        root /home/pizza;
    }
}
```

Kaydet (`CTRL+O`, Enter, `CTRL+X`)

---

##  Adım 4: Yapılandırmayı Aktifleştir

```bash
sudo ln -s /etc/nginx/sites-available/alanadi.com /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
```

---

##  Adım 5: Nginx Test ve Yeniden Başlatma

```bash
sudo nginx -t && sudo systemctl reload nginx
```

---

##  Adım 6: Alan Adı Yönlendirmesi

Alan adının kontrol paneline girip bir **A kaydı** ekle:

* **Name:** @ (veya boş)
* **Value:** VPS IP adresin

---

##  Adım 7: Uygulamada `config.yml` Ayarı

```yaml
Secure: false # HTTPS aktif değilse false kalmalı
trustProxy: true # Reverse proxy kullanıyorsan true
```

> URL ve callback adreslerinin domain ile aynı olduğuna emin ol.

---

##  SSL Kurulumu (HTTPS Etkinleştirme)

SSL ile HTTPS aktif hale gelir. Daha güvenlidir.

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d alanadi.com -d www.alanadi.com
```

* Geçerli bir e-mail gir.
* Terms of Service kabul et.
* 2 yazarak HTTP'den HTTPS'e yönlendirme seç.

---

##  Birden Fazla Uygulama Hostlama

Her uygulama farklı port kullanmalı:

* pizza.com → localhost:3000
* panel.pizza.com → localhost:3001

Her biri için ayrı Nginx dosyası oluştur ve `server_name`'i doğru gir.

---

:::tip
Tebrikler! Artık Pizza panelini / bot dashboard'unu alan adından çalıştırıyorsun. SSL, yönlendirme ve proxy düzgün çalışıyor.
:::