-----

# Bot Uygulama Kurulumu

### Botunuzu Oluşturma

1.  [Discord Geliştirici Portalı'nı](https://discord.com/developers/applications) açın ve hesabınıza giriş yapın.
2.  "Yeni Uygulama" (New Application) butonuna tıklayın.
3.  Bir isim girin ve açılır pencereyi "Oluştur" (Create) butonuna tıklayarak onaylayın.

Şuna benzer bir sayfa görmelisiniz:

![https://discordjs.guide/assets/create-app.ed82aede.png](https://discordjs.guide/assets/create-app.ed82aede.png)


Burada uygulamanızın adını, açıklamasını ve avatarını düzenleyebilirsiniz. Değişikliklerinizi kaydettikten sonra, sol paneldeki "Bot" sekmesini seçerek devam edin.

Sağdaki "Bot Ekle" (Add Bot) butonuna tıklayın ve açılır pencereyi "Evet, yap\!" (Yes, do it\!) diyerek onaylayın.

-----

### Botunuzun Token'ı

::: danger
Bu bölüm kritik öneme sahiptir, bu yüzden dikkatlice okuyun. Bot token'ınızın ne olduğunu ve güvenlik yönlerini açıklamaktadır.
:::

Bir bot kullanıcısı oluşturduktan sonra, şuna benzer bir bölüm göreceksiniz:

![https://discordjs.guide/assets/created-bot.de724f7c.png](https://discordjs.guide/assets/created-bot.de724f7c.png)

Bu panelde botunuza bir avatar verebilir, kullanıcı adını ayarlayabilir ve botu herkese açık veya özel yapabilirsiniz. Token'ınıza da bu panelden, token'ı göstererek veya "Kopyala" (Copy) butonuna basarak erişebilirsiniz. Token'ınızı bir yere yapıştırmanızı istediğimizde, bu değeri kullanmanız gerekir. Eğer bir noktada kaybederseniz endişelenmeyin; her zaman bu sayfaya geri gelip tekrar kopyalayabilirsiniz.

-----

### Gateway Intents

::: danger
Bu bölüm kritik öneme sahiptir, bu yüzden dikkatlice okuyun. Bu adım, botun doğru çalışması için tüm gateway intent'lerini nasıl etkinleştireceğinizi gösterir.
:::

Sayfanın altında, "Ayrıcalıklı Gateway Intents" (Privileged Gateway Intents) adlı bir bölüm göreceksiniz, bu bölüm şöyle görünecektir:

<figure>
  <img src="https://1969737448-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FqwlxYjWFM5WTbNhtK52s%2Fuploads%2FKTDJdzOXNbrEXShTvbxs%2Ffirefox_madOMZ4uP6.png?alt=media&token=b4900d8d-4df6-4d22-a259-2db2b18e5032" alt=""/>
  <figcaption></figcaption>
</figure>


Bu bölümde, aşağıdaki **intent'leri etkinleştirmeniz GEREKİR**: Presence Intent, Server Members Intent ve Message Content Intent. Botun doğru çalışması için bu intent'lerin etkin olduğundan emin olun.