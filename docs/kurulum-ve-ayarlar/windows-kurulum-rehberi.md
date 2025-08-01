---
description: 'Botu Windows sisteminizde kurmak ve çalıştırmak için bu adımları izleyin:'
---

# Windows Kurulum Rehberi

### **Adım 1: Botu Zip Dosyasından Çıkarın**

1. Botun ZIP dosyasını resmi kaynaktan indirin.  
2. **Dosyayı** seçtiğiniz bir klasöre çıkarın.  
   * Klasörün kolay erişilebilir bir konumda olduğundan emin olun, örneğin `C:\Bots\PizzaBot`.

***

### **Adım 2: Botu Yapılandırın**

1. `config.yml` dosyasını bir metin düzenleyicide açın (önerilen: **Visual Studio Code** veya **Notepad++**).  
2. `config.yml` içindeki ayarları ihtiyacınıza göre yapılandırın:  
   * [Bot **token**inizi (Discord Developer Portal’dan) ekleyin.](bot-uygulama-kurulumu)  
   * **Lisans anahtarınızı** ekleyin (varsa).  
   * Diğer ayarları ihtiyaçlarınıza göre özelleştirin.  
3. Tüm değişiklikleri yaptıktan sonra dosyayı kaydedin.

***

### **Adım 3: Komut İstemcisini Açın**

1. Başlat menüsünde **"cmd"** araması yaparak Komut İstemcisini açın.  
2. `cd` komutunu kullanarak bot klasörünüze gidin. Örnek:  

    ```bash
    cd C:\Bots\PizzaBot
    ```

***

### **Adım 4: Node Modüllerini Yükleyin**

1. Sisteminizde **Node.js LTS** yüklü olduğundan emin olun.  
   * Yüklü değilse, [Node.js resmi web sitesinden](https://nodejs.org/) en son LTS sürümünü indirip kurun.  
2. Komut İstemcisinde, gerekli Node.js bağımlılıklarını yüklemek için şunu çalıştırın:  

    ```bash
    npm install
    ```

    * Bu komut `package.json` dosyasındaki tüm modülleri yükleyecektir.

***

### **Adım 5: Botu Başlatın**

1. Komut İstemcisine aşağıdaki komutu yazıp botu başlatın:  

    ```bash
    node index
    ```
2. Başlangıç mesajları veya hata olup olmadığını kontrol edin.

***

### **Adım 6: Botu Doğrulayın**

1. Discord sunucunuza girin ve botun çevrimiçi olup olmadığını kontrol edin.  
   * Eğer bot çevrimiçi değilse:  
     * `config.yml` dosyasındaki **bot tokeninizi** tekrar kontrol edin.  
     * Gerekli yeteneklerin (intents) etkin olduğundan emin olun.  
     * **Lisans anahtarınızın** doğru girildiğini doğrulayın.  
2. Bu kontrolleri yaptıktan sonra sorun devam ederse, destek için [Discord Sunucumuza](https://discord.gg/nBYxxSrHUd) bir ticket açın.

::: tip
  Bu rehberi takip ederek botunuz kısa sürede çalışmaya başlayacaktır. Ek yardım için Discord destek ekibimize ulaşmaktan çekinmeyin.
:::

