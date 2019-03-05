/*
BOLUM 1:
Bu bolumde if condisyonlariyla alakali calsimalarimiz var.
Sizden istenen kendi senaryonuzu olusturup:
orneklerinizde <, >, <=, >=, !==, ===, ||, &&
operatorlerini en az 2 kere kullanmaniz.
*/

// ORNEK
// variable larin degerlerini degistirerek browserda cikan sonuclara bakiniz!
const havaGuneslimi = true;
const havuzAcikmi = true;
const yasSiniri = 12;
const cinsiyet = 'bayan';
const kisininYasi = 30;
const gun = 'pazar';

if(havaGuneslimi && havuzAcikmi && kisininYasi > yasSiniri) {
  if(gun === 'pazar' && cinsiyet === 'bayan') {
    console.log('Bu gun havuzumuz bayanlar icin reserve edilmistir, hosgeldiniz!');
  } else {
    console.log('Baylar giremez, pazar gunleri sadece bayanlara ozel!')
  }
} else {
  console.log("Bu gun hava gunesli deyil, havuz kapali yada yasiniz havuza girmeye uygun deyil")
}

// sizin orneginiz:


/*
BOLUM  IKI
bir variable belirleyip if, if else  statementi olusturun
cocugun notuna gore console da kaldi, gecti, orta, iyi, pekiyi yazdirin
benzer ornegi ders dosyasinda var.

Kullanilacak operatorler: <, >, <=, >=
--------------------------------------
45 ten kucukse kaldi
45 55 arasi ve bu sayilar esitse gecti
56 70 arasi ve bu sayilar esitse orta
71 84 arasi ve bu sayilar esitse iyi
85 100 arasi ve bu sayilar esitse pekiyi
eger not olarak 120 girilirse bunuda else kisminda degerlendirin!
*/
var not = 55;
// if(not > 45 ... ) gibi..
