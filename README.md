# TypeScript Tutorial

TypeScript nedir, nasıl kullanılır....

### TS Nedir?

- microsoft tarafından geliştirilen Javascript'in yazım standartlarını değiştiren üst seviye yazım standartıdır.
- Typescript ile yazılan kodlar transpilar aracılığıla Javascripte derlenir.

## Neden ortaya çıktı

- JavaScript'in Node.js ile birlikte sunucularda, Electron.js ile masaüstü uygulamalarında ve çeşitli kütüphaneler sayesinde hibrit mobil uygulama geliştirmede sıkça kullanılmaya başlandı. JS, bu tarz platformlar ve büyük çaplı projeler için bazı yapısal eksiklikleri vardı. Tip kontrolünün olmaması, derleme aşamasının olmamasından dolayı hata kontrolünün zor olması gibi... TS bü tür eksikleri gidermek ve JS büyük projelerde daha etkili kullanmak için çıkarılmış javascript supersetidir. Yeni bir dil değildir, karbon fiberler güçlendirilmiş javascriptir, diyebiliriz:)

### TS Özellikleri

- Statik Tipleme(Static Typing) (Java ve C#'daki gibi değişken tipi tanımlamaları)
- Sınıf tabanlı objeler ve OOP Özellikleri
- Modülerlik
- ES6 Standartları

### TS Derleyici (tsc)

- TS standarlarının browserda çalışabilmesi için yazılan kodu JS'ye çevirir.
- NPM Package olarak indirilir.

## TS Kurulumu

1. Global: <code>npm i -g typescript</code> <br>
   1.1 Versiyon kontrolü: <code>tsc -v</code>
2. Package.json oluştur: <code>npm init y</code>
3. tsconfig.json adında config file oluştur ve gerekli ayarları oluştur
4. node.js tiplerini eklemek için <code>npm i -D @types/node</code> <br>
   4.1 -D developer oratamında kullanılıacağını belirtmek için
