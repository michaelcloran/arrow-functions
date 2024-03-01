//vanilla JavaScript
//function addTwoNumbers(a, b){
    //code block
  //  return a + b;
//}

//let sum = addTwoNumbers(3, 5);




//ES6 arrow functions
const addTwoNumbers = (a, b) => {
    //code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);

console.log(sum);

//single line arrow functions
const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(3, 6);
console.log(sum2);

//implicit functions
const saySomething = message => console.log(message);
saySomething("Hello there!!");

const sayHello = () => console.log("Hello")
sayHello();

//returning multiple lines at once
const returnMultipleLines = () => (
    `<p>
    This is a multi line string
    </p>`
)
console.log(returnMultipleLines());


