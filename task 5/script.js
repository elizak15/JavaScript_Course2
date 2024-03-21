// Now you need to write a code that will draw this figure using asterisks (*) in the console:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Hint: there is a line break \n at the end of the figure, which is also counted in the tests.
const lines = 5 ;
let result = '';
for(let i = 0; i <= lines; i++){
    for(let j = 0; j < lines - i; j++){
        result += " ";
    }
    for(let j = 0; j < 2 * i + 1; j++){
        result += "*";
    }
    result += "\n"
}
console.log(result)