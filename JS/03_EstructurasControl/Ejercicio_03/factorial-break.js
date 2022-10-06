// factorial-break

let factorial = 1
let i = 1

while(i <= 20){
    factorial = factorial * i
    i++
    if(i === 10){
        break;
    }
}
console.log(factorial)