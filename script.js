// --1--
// 1) написати об'єкт студента який буде виводити ім'я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//     name: "name",
//     specialty: "specialty",
//     avgScore: 0,
//     missedClasses: 0,
//     showInfo: function () {
//         console.group();
//         console.log("Name:", this.name);
//         console.log("Speciality:", this.specialty);
//         console.log("Average score:", this.avgScore);
//         console.log("Missed classes:", this.missedClasses);
//         console.groupEnd();
//     }
// }
// student.showInfo();

// const alex = {
//     name: "Alex",
//     specialty: "Applied Mathematics",
//     avgScore: 82.32,
//     missedClasses: 3
// }

// const ann = {
//     name: "Ann",
//     specialty: "Sociology",
//     avgScore: 91.5,
//     missedClasses: 2
// }

// const john = {
//     name: "John",
//     specialty: "Linguistics",
//     avgScore: 75.21,
//     missedClasses: 6
// }

// student.showInfo.bind(alex)();
// student.showInfo.call(ann);
// student.showInfo.apply(john);


// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const term = {
//     definition: "something",
//     getDef: function () {
//         return this.definition;
//     }
// }

// const html = {
//     definition: "HTML, or Hypertext Markup Language, is a markup language for the web that defines the structure of web pages."
// }

// const css = {
//     definition: "CSS, or Cascading Style Sheets, is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML."
// }

// const htmlRef = document.querySelector("#html");
// htmlRef.addEventListener("click", () => alert(term.getDef.call(html)));

// const cssRef = document.querySelector("#css");
// cssRef.addEventListener("click", () =>alert(term.getDef.call(css)));


// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89, 3,4

// const shop = function (name, price, count) {
//     return [name, price * count];
// }

// console.log(shop("banana", 30, 4.5));
// console.log(shop("cherry", 58, 1.3));
// console.log(shop("orange", 89, 3.4));




