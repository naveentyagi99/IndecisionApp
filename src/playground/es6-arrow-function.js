let multiPlyer = {
 numbers: [1,2,3,4,5,6],
 multiplyBy:5,
 multiply() {
     return this.numbers.map((number)=> number*this.multiplyBy);
 }

}

console.log(multiPlyer.multiply());