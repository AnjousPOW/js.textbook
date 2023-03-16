// Сортировать по полю

// У нас есть массив объектов, который нужно отсортировать:

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

// Можем ли мы сделать его короче, например вот таким?
console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

// То есть чтобы вместо функции мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.

function byField(field) {
    return function(a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}