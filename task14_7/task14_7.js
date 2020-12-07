/*Не получается подставить вмето 3 другое число,и не получилось вывести данные в htm*/

/*task14_7Написать код приложения, интерфейс которого состоит из поля ввода и кнопки «Получить список задач». При нажатии на кнопку нужно отправить запрос с помощью fetch на URL https://jsonplaceholder.typicode.com/users/3/todos. Число 3 представляет собой id пользователя, вместо него нужно подставить число, введенное в поле. Если пользователь с таким id существует, вернется список задач для этого пользователя, каждая задача представлена объектом*/


// Пример API запроса: https://api.openweathermap.org/data/2.5/weather?q=Москва&appid=59aaed6f10d8ae0565183dd571a3b596&units=metric
// Пример ссылки на иконку: http://openweathermap.org/img/wn/${icon}.png  

function pageLoaded() {
  const input = document.querySelector("#input");
  const btn = document.querySelector("#button");
  const output = document.querySelector("#output");
  
  function sendRequest() {
    if (input.value !== '') {
      fetch(`https://jsonplaceholder.typicode.com/users/${input.value}/todos`) // лучше писать полную ссылку на API, включая протокол
      .then(response => {
        return response.json();
      // console.log(response.json());
      })
      .then(data => {
        writeOutput(formatOutput(data));
        // console.log(data);
      })
    }
  }
  
  // Вывод сделан неверно, т.к. выводить данные нужно на страницу, где их будет видеть пользователь, не в консоль.
  // Судя по закомментированным строкам, вы были на верном пути :) поправила код
  function formatOutput(data) {
    if (data.length) { // если пользователь с таким id существует и в ответе пришёл массив задач, выводим их
      let resultHTML = '<ol>'
      data.forEach(task => {
        if (task.completed) {
          resultHTML += `<li><strike>${task.title}</strike></li>`;
        } else {
          resultHTML += `<li>${task.title}</li>`;
        }
      });
      resultHTML += '</ol>';
      return resultHTML;
    } else {
      // Если пользователя с таким id нет, выводим соответствующее сообщение
      return 'Пользователь с указанным id не найден';
    }
    
  }
  
  function writeOutput(message) {
   output.innerHTML = message;
  }
  
  btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);
