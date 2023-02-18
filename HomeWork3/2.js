/**
 * Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
 * используя переданное имя, в консоль.
   Необходимо у пользователя запросить имя и вызвать функцию greeting, 
   передав туда данное значение.
 */
lesson2();

function lesson2() {
    const lastName = prompt("Введите Ваше имя: ");
    greeting(lastName);
}

function greeting(lastName) {
    console.log(`Привет, ${lastName}!`);
}