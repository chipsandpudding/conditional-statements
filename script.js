var containerEle = document.body.querySelector(".container");

// var test = 5;

// if (test == 4 || 6 || 5){
//   containerEle.innerHTML = "Please input a number, next time";
// }


var num1 = Number(prompt("Give me a number"));
if (Number.isNaN(num1) == true){
  containerEle.innerHTML = "Please input a number, next time";
  exit();
}else{}

var num2 = Number(prompt("Give me a second number"));
if (Number.isNaN(num1) === true){
  containerEle.innerHTML = "Please input a number, next time";
  exit();
}else{}

var op1 = prompt("Give me an operator")
if (op1 === "/"){

}else if(op1 === "+"){
  
}else if(op1 === "*"){
  
}else if(op1 === "-"){
  
}

else{  
  containerEle.innerHTML = "Please input a valid operator, next time";
  exit();}


var answer = eval(num1 + op1 + num2);



containerEle.innerHTML = "the answer is " + answer;