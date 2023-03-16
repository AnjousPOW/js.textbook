// Армия функций

// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
    let shooters = [];

    // let i = 0; // убрал
    // while (i < 10) { // убрал
    for (let i = 0; i < 10; i++) { // добавил
        let shooter = function() { // функция shooter
            console.log( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        // i++; // убрал
    }
  
    return shooters;
}
  
// Изменено: вместо while... for. for на каждой итерации создаёт новую переменную i,
// а while использует одну и ту же переменную. И все функции видят последнее значение
// этой переменной - i = 10.

let army = makeArmy();
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.