// Use the loop to print the numbers from 5 to 10 to the console. 5 and 10 inclusive. You can use any loop

// 1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

function firstTask() {
    for(let i = 5; i <= 10; i++){
        console.log(i)
    }  
}
firstTask();

// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...).
// Когда цикл дойдет до числа 13 - остановить весь цикл

//2. Using a for loop, print the numbers from 20 to 10 to the console. In reverse order (20, 19, 18...).
// When the loop reaches the number 13 - stop the whole loop
function secondTask() {
    for(let i = 20; i > 10; i--){
        if(i == 13){
            break
        }
        console.log(i)
    }   
}
secondTask()

// 3. При помощи цикла for выведите чётные числа от 2 до 10 включительно

// 3. Using the for loop, print the even numbers from 2 to 10 inclusive
function thirdTask() {
    for (let i = 2; i <= 10; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }  
}
thirdTask()  

//4. Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. 
//Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//4. Rewrite the for loop into a while loop. The result should be exactly the same. 
//Do not create an infinite loop! Otherwise the browser may freeze.

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


function fourthTask() {
    let i = 2;
    while(i <= 16){
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        } 
        i++;
    }   
}
fourthTask();

// 5. Заполните массив цифрами от 5 до 10 включительно. 
//Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

//5. Fill the array with numbers from 5 to 10 inclusive. 
//Remember that array elements can be formed in the same way as they can be accessed: arr[0]

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++){
        arrayOfNumbers[i - 5] = i;
    //    arrayOfNumbers.push(i)
    }

    return arrayOfNumbers;
}


console.log(fifthTask())