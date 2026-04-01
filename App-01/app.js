let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");
let clear = document.querySelector('#clear');

let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let mul = document.querySelector("#mul");
let div = document.querySelector("#div");


add.addEventListener("click", function () {
    let sum = parseFloat(num1.value) + parseFloat(num2.value);
    result.value = sum;
});

sub.addEventListener("click", function () {
    let difference = parseFloat(num1.value) - parseFloat(num2.value);
    result.value = difference;
}); 

mul.addEventListener("click", function () {
    let product = parseFloat(num1.value) * parseFloat(num2.value);
    result.value = product;
}); 
div.addEventListener("click", function () {
    let quotient = parseFloat(num1.value) / parseFloat(num2.value);
    result.value = quotient;
}); 

clear.addEventListener('click', function(){
    num1.value='';
    num2.value='';
    result.value='';
})