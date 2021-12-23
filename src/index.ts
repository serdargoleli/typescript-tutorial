// Değişken tanımlama
let myname: string = "Hello World!";

// Bir değişkenin string veya number olabilmesi için
let variable: string | number = "Lorem ipsun ";

// Boolen
let flag: boolean = true;

// Symbol()
let c = Symbol();

// Obje
const Person = {
  firstname: "Serdar",
  lastname: "Göleli",
  age: 25,
  // as  ..|..|.. diyerek o özelliğin sadece belirtilen değerleri alacağını söylüyoruz.
  defaultValue: "Test 1" as "Test 2" | "Test 3" | "Test 4",
};

Person.defaultValue = "Test 3";

// Array
const dizi: string[] = ["Lorem", "Ipsun", "Dolor", "Sit"];
const dizi2: number[] = [1, 2, 3, 4, 5, 6];
const dizi3 = [] as Array<string>;
const dizi4: (number | boolean | string)[] = [];

const dizitest: (string | number)[] = [];

dizitest.push(1);

// function
function test(): number {
  return 25;
}
console.log(test());

// function

function test2(v: number): string {
  if (typeof v === "number") {
    return v.toLocaleString();
  }
  return v;
}

console.log(test2(5));

// Tip isimlendirme
type person2 = {
  username: string;
  password?: string; // soru işareti opsiyonel yazsanda yazmanasada olur
  age: number;
  status: boolean;
};

const obj: person2 = {
  username: "serdargoleli",
  age: 25,
  status: true,
};
