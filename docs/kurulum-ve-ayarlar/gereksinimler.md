-----

<p style="color:gray; font-size:small;">
Ürünlerimiz farklı işletim sistemleri için farklı bağımlılıklar gerektirir. Lütfen işletim sisteminiz için tüm bağımlılıkların yüklü olduğundan emin olun, aksi takdirde ürünlerimiz başlamayabilir veya düzgün çalışmayabilir.
</p>


# Gereksinimler

## Bağımlılıklar:

  * Node.js 20.x.x LTS veya üzeri
  * En az 512MB RAM ve 1 CPU çekirdeği olan bir Hosting (VPS, Dedicated Server, Bot Hosting)
  * Bir metin düzenleyici
  * Stabil bir İnternet bağlantısı
  * `package.json` dosyasında listelenen tüm NPM paketleri ( `npm install` ile otomatik olarak yüklenir)


**Replit**, **Heroku**, **Glitch** veya benzeri ücretsiz hosting platformlarının kullanılması kesinlikle yasaktır. Bu platformlar genellikle kodunuzu varsayılan olarak herkese açık hale getirir ve fikri mülkiyetinizi riske atar. Kodunuzu bu tür hizmetlere yüklerseniz, yetkisiz erişim, paylaşım veya kamuya açıklanmasından yalnızca siz sorumlu olursunuz. Kodunuzun herkese açık olması durumunda lisansınız iptal edilebilir.


## Windows Bağımlılıkları

1.  **Visual Studio Desktop Development C++**

      * Yerel Node.js modüllerini derlemek için gereklidir.

2.  **Node.js LTS Kurulumu**

      * Node.js'in en son Uzun Süreli Destek (LTS) sürümünü doğrudan [resmi Node.js web sitesinden](https://nodejs.org/en/) indirin ve kurun.

3.  **Derleme Araçlarının Kurulumu**

      * Yönetici olarak bir Komut İstemi açın ve gerekli derleme araçlarını kurmak için aşağıdaki komutu çalıştırın:

    <!-- end list -->

    ```bash
    npm install --global --production --vs2018 --add-python-to-path windows-build-tools
    ```

-----

## Linux Bağımlılıkları

**Gerekli Paketler**

  * **Ortak Paketler:**
      * `autoconf`, `automake`, `g++`, `libtool`, `build-essential`
      * Bu araçlar, yerel Node.js modüllerini derlemek ve çalıştırmak için gereklidir.

**Node.js ve Bağımlılıkları Kurulumu**

**Debian/Ubuntu için:**  
Gerekli paketleri ve en son Node.js LTS'yi kurmak için aşağıdaki komutları çalıştırın:

```bash
# Gerekli derleme araçlarını kur
sudo apt-get install -y autoconf automake g++ libtool build-essential

# En son Node.js için NodeSource deposunu ekle
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Node.js'i kur
sudo apt-get install -y nodejs
```

**CentOS/RHEL için:**  
Gerekli paketleri ve en son Node.js LTS'yi kurmak için bu komutları çalıştırın:

```bash
# CentOS için Geliştirme Araçları grubunu kur
sudo yum groupinstall -y "Development Tools"

# En son Node.js için NodeSource deposunu ekle
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -

# Node.js'i kur
sudo yum install -y nodejs
```

**Kurulumu Doğrulama**

Kurulumdan sonra, Node.js ve npm'in doğru şekilde yüklendiğini doğrulamak için şunları çalıştırın:

```bash
node -v
npm -v
```