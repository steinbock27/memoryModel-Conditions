let x = 10;
let y = 5;

/**

 Her bir ornek icin memory modelini derste anlatildigi
 cizip yan tarafina programin nasil davrandigiy alakali
 anladiginizi yaziniz. Lütfen cevaplarinizi
 birinci ornekteki gibi yapiniz.
 Browserda console ekraninda sonuclarinizin
 dogru yazilmis oldugunu kontrol edin.
 Birinci ornek icin gorunmesi gereken: Sonuc Bir 22

 memory model:
 address  value
 ----------------
 1        -------
 2        ---10-- // x icin memory de secilen alan
 3        -------
 4        ---5---  // y icin memory de secilen alan
 ...

 Not: aciklama kismi => istenen islemin memoryde nasil
 islendiginin anlasildigindan ogretmenin ikna edilmesidir.
 */

    /**
     BOLUM 1
    */
    x = 7;
    y = 15;
    const sonucBir = x + y;
    console.log("Sonuc Bir", sonucBir);
    /*
    ORNEK:
    memory model ornek:
    -----------------------------
    2        ---7----  // x degeri
    4        ---15---  // y degeri
    7        ---22---  // sonucBir
    -----------------------------
    ACIKLAMA: x ve y nin adresi bilindiginden
    x ve y adreslerinin icerigi verilen degerler atanir.
    */

    x = 7;
    y = 15;
    const sonucIki = x - y;
    console.log("Sonuc iki", sonucIki);
    /* memory model ve aciklama
    -----------------------------
    2        ---7----  // x degeri
    4        ---15---  // y degeri
    7        --8-----  // sonucBIki (memory'de sonucBir'den farkli bir yere atanir.)
    -----------------------------
    ACIKLAMA: x ve y nin adresi bilindiginden
    x ve y adreslerinin icerigi verilen degerler atanir.
    */

    x = 7;
    y = 15;
    const sonucUc = x * y;
    console.log("Sonuc Uc", sonucUc);
    /* memory model ve aciklama
    -----------------------------
    2        ---7----  // x degeri
    4        ---15---  // y degeri
    7        -----105-  // sonucBUc (memory'de sonucBir-Iki'den farkli bir yere atanir.)
    -----------------------------
    ACIKLAMA: x ve y nin adresi bilindiginden
    x ve y adreslerinin icerigi verilen degerler atanir.
    */
    x = 45;
    y = 15;
    const sonucDort = x / y;
    console.log("Sonuc dort", sonucDort);
    /* memory model ve aciklama
    -----------------------------
    2        ---7----  // x degeri
    4        ---15---  // y degeri
    7        ------3  // sonucBDort (memory'de sonucBir-Iki-Uc'den farkli bir yere atanir.)
    -----------------------------
    ACIKLAMA: x ve y nin adresi bilindiginden
    x ve y adreslerinin icerigi verilen degerler atanir.
    */
    x = 47;
    y = 15;
    const sonucBes = x % y;
    console.log("Sonuc bes", sonucBes);
    /* memory model ve aciklama
    -----------------------------
    2        ---7----  // x degeri
    4        ---15---  // y degeri
    7        ----2--  // sonucBDort (memory'de sonucBir-Iki-Uc-Dort'den farkli bir yere atanir.)
    -----------------------------
    ACIKLAMA: x ve y nin adresi bilindiginden
    x ve y adreslerinin icerigi verilen degerler atanir.
    */

    /**
     BOLUM 2
     Bu bolumde x ler bir onceki isleme baglidir.
     nasil ve neden degisitigini aciklama bolumunde
     anlatiniz. Browserdan gelen sonuclara bakin,
     sizin beklediginiz geliyormu? beklediginizin disindaysa
     youtub linkine birdaha goz atin: http://youtu.be/VK21dbopmwg
     */
    x = 10;
    console.log("1111", x++);
    /* memory model ve aciklama
    Toplama işareti sağ tarafta. Bu şu demek:
    Önce x değerini yazdır, sonra 1 arttır.
    Bu yüzden ekrana x 10 olarak çıkar.*/
    console.log("2222", x);
    /* memory model ve aciklama
    x'in değeri yukarıda bir artıp geldi.
    Bu yüzden ekrana x 11 olarak çıkar.*/
    console.log("3333", ++x);
    /* memory model ve aciklama
    Toplama işareti sol tarafta. Bu şu demek:
    Önce x değerini arttır, sonra yazdır.
    Bu yüzden ekrana x 12 olarak çıkar.*/

    console.log("4444", x--);
    /* memory model ve aciklama
    Çıkarma işareti sağ tarafta. Bu şu demek:
    Önce x değerini yazdır, sonra 1 azalt.
    Bu yüzden ekrana x 12 olarak çıkar.*/
    console.log("5555", x);
    /* memory model ve aciklama
    x'in değeri yukarıda bir azalıp geldi.
    Bu yüzden ekrana x 11 olarak çıkar.*/
    console.log("6666", --x);
    /* memory model ve aciklama
    Çıkarma işareti sol tarafta. Bu şu demek:
    Önce x değerini azalt, sonra yazdır.
    Bu yüzden ekrana x 10 olarak çıkar.*/


    /**
     BOLUM 3
    */
    x = 17;
    y = 5;
    let result = x;

    console.log("aaaa", result);
    console.log("bbbb", result += x);
    /* memory model ve aciklama
    Önce result'ı yazdırıyor, o da x'e eşit. Yani 17 yazdırılır.
    Sonra result'a eklenip yazdırılıyor. Ekrana 34 yazdırılır*/
    console.log("cccc", result -= y);
    /* memory model ve aciklama
    result'dan y çıkarılıp yazdırılıyor. Ekrana 29 çıkar*/
    console.log("dddd", result *= y);
    /* memory model ve aciklama
    result y ile çarpılır. Yani 29*5 = 145 yazdırılır.*/
    console.log("eeee", result /= y);
    /* memory model ve aciklama
    result y'ye bölünüyor. Yani ekrana 29 yazdırılır*/
    console.log("ffff", result %= y);
    /* memory model ve aciklama
    29'un 5'lik modülü, yani ekrana 4 yazdırılır.*/
