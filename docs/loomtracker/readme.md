# LoomTracker

Üretim takibi, tezgâh yönetimi, desen (BMP) arşivleme, gerçek zamanlı sohbet, bildirim, denetim (audit log), iki aşamalı doğrulama (2FA) ve otomatik e-posta raporlama özelliklerine sahip entegre bir web uygulaması.

---

## 📑 İçindekiler

* [Özellikler](#özellikler)
* [Mimari Genel Bakış](#mimari-genel-bakış)
* [Ortam Değişkenleri](#ortam-değişkenleri)
* [Dizin Yapısı](#dizin-yapısı)
* [Çalıştırma](#çalıştırma)
* [Modüller ve Akışlar](#modüller-ve-akışlar)
* [API Uçları](#api-uçları)
* [Socket.io Olayları](#socketio-olayları)
* [Güvenlik & Loglama](#güvenlik--loglama)
* [Raporlama](#raporlama)
* [Lisans Doğrulama](#lisans-doğrulama)
* [Lisans](#lisans)

---

## 🚀 Özellikler

* **Kullanıcı & Rol Yönetimi**

  * Roller: `admin`, `yonetim`, `ustabasi`, `planlamaci`, `makinist`, `operator`
  * JWT tabanlı oturum yönetimi
  * Şifre sıfırlama, hesap kilitleme
  * Profil fotoğrafı yükleme

* **İki Aşamalı Doğrulama (2FA)**

  * Google Authenticator uyumlu
  * QR kod üretimi
  * Yedek kod oluşturma

* **Tezgâh Yönetimi**

  * CRUD işlemleri
  * Bakım kayıtları (tarih, açıklama, yapan kişi)
  * Durum: `aktif`, `pasif`, `bakımda`

* **Üretim Kaydı**

  * Fotoğraf yükleme
  * Vardiya kaydı
  * Üretim hesaplama (m², duruş dk)
  * Onay / red işlemleri

* **Desen Yönetimi**

  * BMP yükleme
  * PNG önizleme üretme
  * Tekrarlayan desen engelleme

* **Gerçek Zamanlı Sohbet**

  * Kanal/oda sistemi
  * Direkt mesaj (DM)
  * Mention desteği (@kullanici)
  * Mesaj silme / sadece benden sil
  * Okundu / teslim bilgisi
  * Rate limit (mesaj hız limiti)

* **Bildirim Sistemi**

  * Mesaj, mention, sistem bildirimleri
  * Öncelik seviyeleri (`low`, `normal`, `high`)
  * Okundu işaretleme

* **Audit Log (Denetim Kayıtları)**

  * Tüm işlemler DB ve dosyaya kaydedilir
  * IP, User-Agent bilgisi saklanır

* **Aylık Excel Raporu**

  * Toplam üretim, duruş süreleri, en çok üretim yapanlar
  * Excel dosyası oluşturma
  * E-posta ile otomatik gönderim

* **Lisans Kontrolü**

  * Harici API ile doğrulama
  * Lisans geçersizse uygulama kapanır

---

## 🏗 Mimari Genel Bakış

* **Backend**: Node.js, Express, Mongoose, Socket.io
* **Veritabanı**: MongoDB
* **Kimlik Doğrulama**: JWT (httpOnly cookie)
* **Dosya Yönetimi**: Multer (uploads klasörü)
* **E-posta**: Nodemailer (SMTP)
* **Raporlama**: ExcelJS
* **Görüntü İşleme**: Jimp (BMP → PNG)
* **Loglama**: DB (AuditLog) + dosya (`/logs/audit-trail.log`)

---

## 🔑 Ortam Değişkenleri

`.env` dosyası örneği:

```ini
APP_URL=http://localhost:3000
PORT=3000
NODE_ENV=development
JWT_SECRET=super-secret-key

MONGO_URI=mongodb://localhost:27017/loomtracker

SMTP_HOST=smtp.mailserver.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=no-reply@yourdomain.com
EMAIL_PASS=yourpassword
```

---

## 📂 Dizin Yapısı

```
src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── sockets/
└── utils/
uploads/
logs/
```

* **controllers/** → İş mantığı
* **middleware/** → Kimlik doğrulama, lisans kontrolü
* **models/** → Mongoose şemaları
* **routes/** → API uçları
* **services/** → Lisans, raporlama, bildirim
* **sockets/** → Sohbet sistemi
* **utils/** → Yardımcı araçlar (mail, logger, 2FA)

---

## ▶️ Çalıştırma

* **Geliştirme**: `npm start`
* **Prod**: `NODE_ENV=production` ile HTTPS proxy önerilir

---

## 🔄 Modüller ve Akışlar

### 1. Kullanıcı Yönetimi

* JWT oturum açma
* 2FA doğrulama
* Profil güncelleme
* İşten çıkarma / işe alma

### 2. Tezgâh Yönetimi

* CRUD
* Bakım kayıtları

### 3. Üretim Kayıtları

* Fotoğraf yüklemeli
* Formüller ile m² hesabı
* Onay sistemi

### 4. Desen Yönetimi

* BMP → PNG dönüştürme
* Regex ile dosya adı kontrolü

### 5. Sohbet Sistemi

* Kanal türleri: public, role, private, direct
* Mention desteği
* DM gizleme / açma

### 6. Bildirimler

* Gerçek zamanlı socket yayını
* Okundu işaretleme

### 7. Raporlama

* Aylık rapor
* Excel export
* E-posta ile gönderim

### 8. Loglama

* DB + dosya loglama
* IP, User-Agent kaydı

---

## 🌐 API Uçları

### Kullanıcılar (`/api/users`)

* `POST /login` → Giriş
* `POST /` → Kullanıcı oluştur
* `GET /` → Kullanıcıları listele
* `PUT /:id` → Güncelle
* `DELETE /:id` → Sil
* `PUT /:id/fire` → İşten çıkar
* `PUT /:id/rehire` → Tekrar işe al
* `POST /forgot-password` → Şifre sıfırlama isteği
* `POST /reset-password/:token` → Şifre sıfırla

### Tezgâhlar (`/api/looms`)

* CRUD işlemleri
* Bakım kayıtları ekleme

### Üretim (`/api/production`)

* `GET /` → Listele / filtrele
* `POST /` → Yeni kayıt oluştur
* `PUT /approve` → Onay

### Desenler (`/api/designs`)

* `POST /` → Desen yükle (BMP)
* `GET /` → Listele
* `DELETE /:id` → Sil

### Bildirimler (`/api/notifications`)

* `GET /` → Listele
* `POST /mark-read` → Tümünü okundu işaretle

---

## 📡 Socket.io Olayları

* `join room` / `leave room`
* `chat message`
* `typing` / `stop typing`
* `delete message` / `delete message for me`
* `create dm` / `close dm` / `reopen dm`
* `create channel` / `edit channel` / `delete channel`

---

## 🔒 Güvenlik & Loglama

* Hatalı giriş limiti (5 deneme → 10 dk kilitlenme)
* 2FA zorunluluğu opsiyonel
* Tüm işlemler DB + dosya logunda saklanır
* Hassas bilgiler maskeleme (`password`, `token`, `secret` vs.)

---

## 📊 Raporlama

* Aylık rapor otomatik oluşturulur
* Excel dosyası kaydedilir
* Yönetim ekibine e-posta ile gönderilir
* İçerik: toplam üretim, duruş süresi, en çok üretim yapanlar

---

## 📝 Lisans Doğrulama

* Başlangıçta harici API’ye doğrulama isteği atılır
* Lisans geçersizse uygulama kapanır

---


## 📜 Lisans

Bu proje **Pizza Development** tarafından geliştirilmiştir. Tüm hakları saklıdır.
