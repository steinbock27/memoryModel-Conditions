/**
 1 --------
 2 --------
 3 ---7----     // elma
 4 --------
 5 ---15---     // depo
 6 --------
 7 --ahmet-    // sayi
 8 ----6---     // ev
 9 ---6----    // artiran
 10 -------
 ...
 */




// var & let & const
// const - let
const depo = 15;

let ev = 6;
ev = 23;


var elma = 7;
// console.log(depo);
// let const
let sayi = 10;   // 10 => number
sayi = 'ahmet';  // 'ahmet' => string

// Matematik te ki pi sayisi gibi
// degismesini istemedigimiz degerler icin kullaniriz.
const sabit = 40;

// hesap makinasi ornegi
const sayi1 = 15;
const sayi2 = 3;

const carpma = sayi1 * sayi2;
const cikarma = sayi1 - sayi2;
const toplama = sayi1 + sayi2;
const bolme = sayi1 / sayi2;

// console.log("carpma islemi", carpma);
// console.log("cikarma islemi", cikarma);
// console.log("toplama islemi", toplama);
// console.log("bolme islemi", bolme);

/**
 *
 +   -   /    *   %    ++    --
      *=     +=     -=    /=
 */

 let rakam1 = 13;
 let rakam2 = 2;
 sonuc = rakam1 % rakam2;
 // console.log('modulus', sonuc);  // 1

 let artiran = 0;

 //artiran = artiran + 1;
  artiran += 1;

//  console.log('artiran', artiran++); // 5 -> 6
//  console.log('artiran', ++artiran); // 7

 //  console.log('artiran ++', artiran++ );  //
 //  console.log(' ++ artiran', ++artiran );  //

 // Kondisyonlar

let siradanBirSayi = 12;

const sayilarEsitmi = siradanBirSayi === 12;



// If statements
// if (sayilarEsitmi) {
//   console.log('verdigniz sayilar esit', sayilarEsitmi);
// } else {
//   console.log('sayilar esit deyil', sayilarEsitmi);
// }

let elmaAlinsin = true; // boolean -> true, false
let karpuzAlinsin = true;
let carsiyaGidilecekmi = false;

// && -> AND ve
// || -> OR veya

if(carsiyaGidilecekmi || elmaAlinsin) {
  // console.log('elma isteniyor!');
}

const erkekmi = true;
const yasi = 42;
const ustYasSiniri = 40;

// > < <= >=

if(erkekmi && yasi >= 19 && yasi < ustYasSiniri) {
  console.log('ASKERLIK ZAMANI');
} else {
  console.log('ASKERLIGE UYGUN YASTA DEYILSINIZ');
}


const yas = 32;
// sadece bir tane if condisyonuna girer.
if(yas < 5) {
  console.log('BEBEKLIK ZAMANI');
} else if ( yas > 5 && yas < 12){
  console.log('COCUKLUK ZAMANI');
} else if ( yas > 12 && yas < 18){
  console.log('ERGENLIK ZAMANI');
} else if ( yas > 18 && yas < 55){
  console.log('OLGUNLUK ZAMANI');
} else if( yas > 55){
  console.log('YASLILIK ZAMANI');
}

// birden cok kosula gore farkli
// code calsitirmak istioyorsaniz
if (yas > 12) {
  console.log('yas 12 den buyuk');
}

if (yas > 22) {
  console.log('yas 22 den buyuk');
}

const javaScriptLevel = 10;

if (javaScriptLevel != 10) {
  console.log('sen daha master olamadin');
} else {
  console.log('sen bir mastersen');
}

