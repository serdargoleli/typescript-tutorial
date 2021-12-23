// Değişken tanımlama
let myname = "Hello World!";
// Bir değişkenin string veya number olabilmesi için
let variable = "Lorem ipsun ";
// Boolen
let flag = true;
// Symbol()
let c = Symbol();
// Obje
const Person = {
    firstname: "Serdar",
    lastname: "Göleli",
    age: 25,
    // as  ..|..|.. diyerek o özelliğin sadece belirtilen değerleri alacağını söylüyoruz.
    defaultValue: "Test 1",
};
Person.defaultValue = "Test 3";
// Array
const dizi = ["Lorem", "Ipsun", "Dolor", "Sit"];
const dizi2 = [1, 2, 3, 4, 5, 6];
const dizi3 = [];
const dizi4 = [];
const dizitest = [];
dizitest.push(1);
// function
function test() {
    return 25;
}
console.log(test());
// function
function test2(v) {
    if (typeof v === "number") {
        return v.toLocaleString();
    }
    return v;
}
console.log(test2(5));
const obj = {
    username: "serdargoleli",
    age: 25,
    status: true,
};
