-----

## description: 'Botu Linux sunucunuza kurmak ve çalıştırmak için bu adımları takip edin:'

# Linux Kurulum Rehberi

### **Adım 1: VPS'inize Giriş Yapın**

1.  Tercih ettiğiniz SSH istemcisini veya terminal yazılımını (örn. PuTTY, MobaXterm veya benzeri bir araç) kullanarak VPS'inize giriş yapın.

-----

### **Adım 2: Bot Dosyalarını Sunucuya Yerleştirin**

1.  Bot dosyalarının sunucuda seçtiğiniz bir dizine yüklendiğinden emin olun.

-----

### **Adım 3: Bot Dizinine Gidin**

1.  Sunucuda bir terminal açın ve `cd` komutunu kullanarak bot dosyalarınızı içeren klasöre gidin:

    ```bash
    cd /yol/to/bot-dizinadi
    ```

-----

### **Adım 4: Node.js Modüllerini Kurun**

1.  Gerekli tüm Linux bağımlılıklarının yüklü olduğundan emin olun.

      * Gerekli bağımlılıkların listesi için [Linux Bağımlılıkları Rehberi](https://www.google.com/search?q=requirements) bölümüne bakın.

2.  Bot için gerekli Node.js modüllerini aşağıdaki komutu çalıştırarak kurun:

    ```bash
    npm install
    ```

      * Bu, `package.json` dosyasında listelenen tüm gerekli bağımlılıkları yükleyecektir.

-----

### **Adım 5: Botu Başlatın**

1.  Botu aşağıdaki komutla çalıştırın:

    ```bash
    node index
    ```

2.  Botun hatasız başladığından emin olmak için terminal çıktısını kontrol edin.

-----
::: warning
**Botu 7/24 Çevrimiçi Tutma** <br>
Botu sürekli çalıştırmak için `screen` komutunu veya `tmux` komutunu kullanabilirsiniz. [`screen` veya `tmux` kullanımı hakkında detaylı bir rehber için buraya tıklayın.](https://www.google.com/search?q=../frequently-asked-questions/keep-your-node.js-application-running-24-7)
:::

::: tip
Bu rehberi takip ederek botunuz çok kısa sürede çalışır duruma gelecektir. Ek yardım için Discord'daki destek ekibimizle iletişime geçmekten çekinmeyin.
:::
