/* 
Вам дана заготовка и результат, который вы должны получить.
Ваша задача — написать код, который будет преобразовывать XML 
в JS-объект и выводить его в консоль.*/

/*Этап 1. Подготвка данных. */

//1. Созданик экземпляра класса DOMParser, позволяет парсить XML
let parser = new DOMParser();
//console.log('parser',parser);
//2. Создаю переменную, в к-ю запишу данные  XML файла используюя шаблонные строки

let xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

/* Этап 2. Получение данных */
//Парсинг XML. Для этого для переменной parser  вызываем метод parseFromString
//Первым параметром метода передаем наш xml(xmlString), вторым - тип данных
//к-ый парсим(здесь это это текст xml)
let xmlDOM = parser.parseFromString(xmlString, "text/xml")
//console.log('xmlDOM',xmlDOM)

//Получение всех DOM нод
//let listNode = xmlDOM.querySelectorAll("list");
// let studentNode = xmlDOM.querySelectorAll("student");
// let nameNode = xmlDOM.querySelectorAll('name');
// let firstNode = xmlDOM.querySelectorAll("first");
// let secondNode = xmlDOM.querySelectorAll("second");
// let ageNode = xmlDOM.querySelectorAll("age");
// let profNode = xmlDOM.querySelectorAll("prof");
//console.log('studentNode', studentNode);

//Получение данных из атрибутов

// let lang = nameNode.forEach(lang => {
//    console.log(`lang: ${lang.getAttribute('lang')}`)
//     });
//     //Вывод данные по студенту
// let student =  studentNode.forEach(student => {
//    console.log(`student: ${student.textContent}`);
	
// });

// Задание выполнено не верно, т.к. вывод должен соответствовать тому, что указано в условии задачи: объект с массивом list, в котором перечислены объекты с информацией о студентах, которая находится в XML-строке. Для того, чтобы верно решить задачу, нужно использовать метод querySelectorAll, чтобы найти все узлы student (их может быть не обязвтельно 2, а сколько угодно). Затем с помощью цикла или метода forEach пройтись по всем узлам student и собрать информацию о каждом студенте (имя, фамилия, возраст и т.д.). Здесь уже можно использовать обычный querySelector, потому что в каждом узле student есть только одно имя, фамилия и т.д. Ниже написала верный вариант решения

let students = xmlDOM.querySelectorAll("student");
let result = {
  list:[]
};

students.forEach(student => {
  let name = student.querySelector("name");
  let firstName = name.querySelector("first");
  let secondName = name.querySelector("second");
  let age = student.querySelector("age");
  let prof = student.querySelector("prof");
  let lang = name.getAttribute("lang");
  result.list.push({
      name: firstName.textContent + ' ' + secondName.textContent,
      age: age.textContent,
      prof: prof.textContent,
      lang: lang
  });
})

console.log(result);