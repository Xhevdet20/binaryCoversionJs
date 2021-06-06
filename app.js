let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let button = document.querySelector('button');
let result = document.querySelector('.result');

button.addEventListener('click', function (){
    if(num1.value && num2.value){
       result.innerHTML =  addBinary(parseInt(num1.value), parseInt(num2.value));
    }
});

function addBinary(a,b) {
    let binaryArrayReverse = [];
    let decSum = a + b;
   
    while(decSum > 0){

        if(decSum % 2 === 1){
            binaryArrayReverse.push(1);
            decSum = (decSum-1) /2 ;
        } else {
            binaryArrayReverse.push(0);
            decSum /=2;
        }
        if(decSum === 1){
            binaryArrayReverse.push(1);
            decSum -=1;
            let binaryString = (binaryArrayReverse.reverse()).join('');
            return binaryString;
        }
    }
  }
