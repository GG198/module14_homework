 /* Создать Promise, в котором c задержкой в 3 секунды сгенерировать случайное целое число от 1 до 100. Для создания задержки использовать setTimeout. Если сгенерированное число — четное, Promise выполнится успешно (resolve), если нечетное — выполнится с ошибкой (reject). После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:
«Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
«Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число
 */

/*Создаем Promise, в котором c задержкой в 3 секунды сгенерируем случайное целое число от 1 до 100. Для создания задержки используем setTimeout.
 */
   //Функция выполнения promise
    function usePromise() {
    // Создаем promise
    let Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      function getRandomInt(min,max) {
      return Math.floor(min + Math.random() * (max - min));
    }
    let intNum = getRandomInt(1,101);
     // let evenNum = intNum % 2 
     console.log(intNum);
      if (intNum % 2 === 0) {
    resolve({
      message: "Получаем четное число",
      data: intNum,
    });
    } else {
      reject({
      message: "Получаем нечетное число",
      data: intNum,
      });
    }
    }, 3000);
    });
      
    // Выполняем promise
    Promise1
      .then((result) => {
        //console.log('Обрабатываем resolve: ', result.message);
        console.log(`Завершено успешно.  Сгенерированное число — ${result.data}`);
             })
      .catch((error) => {
       // console.log('Обрабатываем reject: ', error.message);
        console.log(`Завершено с ошибкой.  Сгенерированное число — ${error.data}`)
              })
      };
       usePromise();
