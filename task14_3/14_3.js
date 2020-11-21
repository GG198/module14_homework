/*Вывести в консоль получилось,но с таблице роблемы,не понимаю как вывести значения в таблиу? Объясните,что необходимо выполнить дальше. Стили не использовала,так как не хватило времени разобраться как работает html и css*/
let reqUrl = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440"; 

function pageLoaded() {
  let input = document.querySelector("#select");
  let btn = document.querySelector(".btn");
  let elem = document.querySelector('#elem');
  let table = document.createElement('table');
  let output = document.querySelector("#output");
  
  function sendRequest() {
    if (input.value !== '') {
      fetch(`https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        writeOutput(formatOutput(data));
      })
    }
  }
  
  function formatOutput(data) {
    //console.log(input.value);
    //console.log(data);
    //console.log(input);
    for (let i in data) {
      if(data[i].year == input.value){
        for (let j in data[i].sales){
          console.log(j, ":", data[i].sales[j]);
        }
      }
    }
  }
  
    function writeOutput(message) {
    output.innerHTML = message;
  }
  
  btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);
