/*
BOLUM 1:
Bu bolumde if condisyonlariyla alakali calsimalarimiz var.
Sizden istenen kendi senaryonuzu olusturup:
orneklerinizde <, >, <=, >=, !==, ===, ||, &&
operatorlerini en az 2 kere kullanmaniz.
*/

// ORNEK
// variable larin degerlerini degistirerek browserda cikan sonuclara bakiniz!
const anmeldung = true;
const mitgliedsBeitrag = true;
const alt = 18;
const parzel = true;
const kontrat = true;

if(anmeldung && mitgliedsBeitrag && parzel && kontrat && alt >= 18) {

  console.log('Herzlichen Glückwunsch ! Sie haben eine Parzelle, weil Sie den Mitgliedsbeitrag bezahlt haben. Sie können morgen in Ihrem Garten arbeiten.');
}
else if (!parzel)

{
  console.log('Da derzeit keine leeren Parzelle vorhanden sind, können wir Sie nicht als Mitglied akzeptieren.');
}
else {
  console.log("Bitte erfüllen Sie die Bedingungen für die Familiengartensmitgliedschaft.");
}


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
var not = 44;
if(not < 45 ){
  console.log('kaldi');
}
else if(not < 56 ){
  console.log('gecti');
}
else if(not < 71 ){
  console.log('orta');
}
else if(not < 85 ){
  console.log('iyi');
}
else{
  console.log('pekiyi :)');
}
