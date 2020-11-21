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
let studentNode = xmlDOM.querySelectorAll("student");
let nameNode = xmlDOM.querySelectorAll('name');
let firstNode = xmlDOM.querySelectorAll("first");
let secondNode = xmlDOM.querySelectorAll("second");
let ageNode = xmlDOM.querySelectorAll("age");
let profNode = xmlDOM.querySelectorAll("prof");
//console.log('studentNode', studentNode);

//Получение данных из атрибутов

let lang = nameNode.forEach(lang => {
   console.log(`lang: ${lang.getAttribute('lang')}`)
    });
    //Вывод данные по студенту
let student =  studentNode.forEach(student => {
   console.log(`student: ${student.textContent}`);
	
});

