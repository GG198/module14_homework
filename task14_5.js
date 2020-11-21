//Запрашиваем имя пользователя
 var nameUser=prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");

//Определим время и дату компьютера
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

//Получаем данные по ключу name and userDate в localStorage
let name = localStorage.getItem('nameUser');
let userDate = localStorage.getItem('userDate');


if (name == nameUser) {
    // Если данные в localStorage есть - просто выводим их
    console.log(`Добрый день, ${nameUser} Давно не виделись. В последний раз вы были у нас ${userDate}`);
  } else {
    // Если данных в localStorage нет
    localStorage.setItem('userDate', datetime);
     userDate = localStorage.getItem('userDate');
     console.log(userDate);
    
    localStorage.setItem('nameUser', nameUser)
     name = localStorage.getItem('nameUser');
     console.log(name);
  }
     
    