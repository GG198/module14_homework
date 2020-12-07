/*Вывести в консоль получилось,но с таблице роблемы,не понимаю как вывести значения в таблиу? Объясните,что необходимо выполнить дальше. Стили не использовала,так как не хватило времени разобраться как работает html и css*/
let reqUrl = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440"; 

function pageLoaded() {
  // Убрала пару лишних переменных, которые нигде не использовались
  let input = document.querySelector("#select");
  let btn = document.querySelector(".btn");
  let output = document.querySelector("#output");
  
  function sendRequest() {
    if (input.value !== '') {
      fetch(reqUrl) // Раз объявлена отдельная переменная с URL запроса, надо её использовать :)
      .then(response => {
        return response.json();
      })
      .then(data => {
        writeOutput(formatOutput(data));
      })
    }
  }
  
  // Неправильно сделан вывод данных. Нужно выводить цифры не в консоль, а на страницу, чтолбы их мог видеть пользователь. Исправила функцию formatOutput
  function formatOutput(data) {
    let yearSales, resultHTML = '';
    data.forEach(item => {
      if(item.year == input.value){
        yearSales = item.sales;
      }
    });
    if (yearSales) {
      resultHTML = `
        <table>
          <tr>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
          </tr>
          <tr>
            <td>${yearSales.q1}</td>
            <td>${yearSales.q2}</td>
            <td>${yearSales.q3}</td>
            <td>${yearSales.q4}</td>
          </tr>
        </table>
      `;
    }
    return resultHTML;
  }
    
  function writeOutput(message) {
    output.innerHTML = message;
  }
  
  btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);
