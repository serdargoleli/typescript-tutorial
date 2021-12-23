# TypeScript Tutorial

TypeScript nedir, nasıl kullanılır....

### TS Nedir?

- microsoft tarafından geliştirilen Javascript'in yazım standartlarını değiştiren üst seviye yazım standartıdır.
- Typescript ile yazılan kodlar transpilar aracılığıla Javascripte derlenir.

### TS Özellikleri

- Statik Tipleme(Static Typing) (Java ve C#'daki gibi değişken tanımlamaları)
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
