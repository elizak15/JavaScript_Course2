// Now you need to write a code that will draw this figure using asterisks (*) in the console:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Hint: there is a line break \n at the end of the figure, which is also counted in the tests.
const lines = 6;
let result = '';
for(i = 0; i < lines; i++){
    for(j = 0; j < lines - i; j++){
        result += " ";
    }
    for(j = 0; j < 2 * i + 1; j++){
        result += "*";
    }
    result += "\n"
}
console.log(result)