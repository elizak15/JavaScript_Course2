//Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, 
//а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//Должен получиться точно такой же массив

//Fill the new array (result) with numbers from the old one (arr). The number of elements in the array can be obtained as arr.length, 
//and access the elements in the same way: arr[0], arr[1], etc.
//You should get exactly the same array

// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i];
    }
    // Не трогаем
    return result;
}
// console.log(firstTask())

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
//Для определения типа данных используйте typeof();
//Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// Modify this array so that all numbers are incremented by a factor of 2, and if a string is encountered, " - done" is appended to it.
// Use typeof() to define the data type;
//It should result in: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ].


function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++){
        if(typeof data[i] === "number"){
            data[i] = 2 * data[i];
        }
        if(typeof data[i] === "string"){
            data[i] += ' - done';
        }
    }
    // Не трогаем
    return data;
}
console.log(secondTask())


//Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
//Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

//Expand the data array in reverse using a loop and write the data to the result array.
//You should get: [ 'Homework', 20, 'Shopping', 10, 5 ]


// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 0; i < data.length; i++){
        result[data.length - i - 1] = data[i]
    }
    
    
    // Не трогаем
    return result;
}
console.log(thirdTask())