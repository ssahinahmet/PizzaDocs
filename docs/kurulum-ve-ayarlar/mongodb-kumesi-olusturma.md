---
description: 'MongoDB Kümesi oluşturma ve bağlantı stringi alma rehberi'
---

# MongoDB Kümesi Oluşturma

MongoDB bağlantı stringini almak için bir MongoDB Kümesi oluşturmalısınız. Nasıl yapılacağını bilmiyorsanız, aşağıdaki metin rehberini takip edebilirsiniz.


### Metin Rehberi:

Bu rehberde MongoDB Cluster oluşturma ve `config.yml` dosyanıza koyacağınız MongoDB bağlantı stringini alma işlemleri anlatılacaktır.

Yapacaklarımız : 

- MongoDB Atlas Hesabı oluşturma  
- Cluster oluşturma  
- Cluster bağlantısı için kullanıcı oluşturma  
- IP adresinizi erişime izin verme  
- Bağlantı stringini `config.yml` dosyasına ekleme  

## Adım 1: MongoDB Atlas Hesabı Oluşturma

[https://cloud.mongodb.com](https://cloud.mongodb.com) adresine gidin. Karşınıza açılan sayfada "Try Free" butonuna tıklayın. Google ile veya e-posta ile kayıt olun ve e-postanızı doğrulayın. Sonrasında Overview sayfasına yönlendirileceksiniz.

## Adım 2: MongoDB Cluster Oluşturma

- "Create" butonuna tıklayın.  
- Üstte M0 ücretsiz planını seçin.  
- İsterseniz isim, sağlayıcı gibi ayarları değiştirebilirsiniz.  
- Bölge (region) olarak size en yakın olanı seçin.  
- "Preload sample dataset" seçeneğini kapatın.  
- En altta "Create Deployment" butonuna tıklayın.  

Bu adımlardan sonra MongoDB kümeniz oluşturulmaya başlayacaktır.

## Adım 3: Bağlanmak İçin Kullanıcı Oluşturma

Sol taraftaki "Security" menüsünden "Database Access" sekmesine tıklayın.  

"Add New Database User" butonuna tıklayın.  
Kimlik doğrulama yöntemi olarak "Password" seçili kalsın.  
Kullanıcı adı ve unutmayacağınız bir şifre belirleyin (veya otomatik oluşturun).  

::: warning
**MongoDB şifrenizi kesinlikle kimseyle, hatta Pizza Development ekibiyle bile paylaşmayın! Pizza Development sizden şifrenizi asla istemez. Şifrenizi güvende tutun!**
:::

Aşağı kaydırarak "Database User Privileges" bölümüne gelin.  
"Built-in Role" açılır menüsünden "Add Built-in Role" seçeneğini seçin.  
Açılan "Select Role" menüsünden "Read and write to any database" rolünü seçin.  
Son olarak "Add User" butonuna basın.

## Adım 4: IP Erişim İzinleri Verme

Sol menüden "Network Access" sekmesine tıklayın.  
"Add IP Address" butonuna tıklayın.

Üstte iki seçenek göreceksiniz:  
- Eğer veritabanına her IP’den erişim izni vermek isterseniz ikinci butona (0.0.0.0/0) tıklayın.  
- Botunuz başka bir sunucuda çalışıyorsa, o sunucunun IP adresini "Access List Entry" kutusuna girin.  
- Yerel bilgisayarınızdan bağlanıyorsanız ilk butona tıklayın.  

Son olarak "Confirm" butonuna basın.

## Adım 5: Bağlantı Stringini `config.yml` Dosyasına Eklemek

Sol menüden "Clusters" sekmesine gidin.  
Clusterınızın yanındaki "Connect" butonuna tıklayın.  

Açılan pencerede "Drivers" seçeneğine tıklayın.  
`mongodb+srv://` ile başlayan bağlantı stringini kopyalayın. Genellikle şöyle görünür:

<p style="font-size:12px; font-family: monospace; color:#d4d4d4; padding:5px; border-radius:4px;">
MongoURI: "mongodb+srv://username:password@cluster-url/database?retryWrites=true&w=majority"
</p>



```bash
mongodb+srv://<kullanıcı_adı>:<şifre>@<cluster-url>/<veritabanı>?retryWrites=true&w=majority
```
::: tip
Tebrikler! MongoDB Kümeniz başarıyla oluşturuldu ve bağlantı stringiniz hazır.
:::
