function fiver (number) {
    if (!Number.isInteger(number)) { //Gaurd Clause
    return " " + null;
    }
let isEven = number % 2 === 0;
let isMultipleOfFive = number % 5 === 0;
let isOdd = !isEven;

let output = "";

    if (isEven) {
        output += " even";
    }
    else {
        output += " odd";
    }

    if (isMultipleOfFive) {
        output += "Fiver"
    } 
    return output;
}
let fiverArray = [15, 16, 19, 125, 4, 7, 23, 25, "cat", 3.2];

let letsPlay = "";
for (let i = 0; i < fiverArray.length; i++) {
    let numFiver = fiverArray[i];
    letsPlay += fiver(numFiver);
}
console.log(letsPlay);