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
      fetch(`//jsonplaceholder.typicode.com/users/${input.value}/todos`)
      .then(response => {
        return response.json();
      // console.log(response.json());
      })
      .then(data => {
        writeOutput(formatOutput(data));
        //console.log(data);
       
        
      })
    }
  }
  
  function formatOutput(data) {
    for(let i in data){
      let outout;
          // if(data[i].userId == input.value){
             if(data[i].userId == input.value && data[i].completed === true){
               console.log(data[i].title);
                /*return output = 
                 `<li><strike>${data[i].title}</strike></li>`*/
             }  else {  
                console.log(`зачеркнуть: ${data[i].title}`);
                //writeOutput(formatOutput(data));
        }
        
        }
   
  }
  
  function writeOutput(message) {
   output.innerHTML = message;
  }
  
  btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);
