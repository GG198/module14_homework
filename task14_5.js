//Запрашиваем имя пользователя (если его нет в localStorage)
if (localStorage.getItem('nameUser')) {
  showLastVisit(localStorage.getItem('nameUser'), localStorage.getItem('userDate'));
  setVisitDate();
} else {
  let nameUser = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
  localStorage.setItem('nameUser', nameUser);
  setVisitDate();
}

function setVisitDate() {
  //Определим время и дату компьютера
  let currentdate = new Date(); // старайтесь не использоваться ключевое слово var для объявления переменных, это устаревший синтаксис
  let datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  localStorage.setItem('userDate', datetime);
}

function showLastVisit(name, date) {
  console.log(`Добрый день, ${name} Давно не виделись. В последний раз вы были у нас ${date}`);
}
     
// Задание выполнено не совсем верно. По условию нужно запрашивать имя только один раз, после этого оно должно браться из localStorage, обновляться должна только дата последнего визита. Исправила на правильный вариант.