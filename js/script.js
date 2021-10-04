let y = parseInt(Math.random() * 10) + 1;
let guess = 1;
  
document.querySelector("#submitguess").onclick = ()=>{
   
let x = document.querySelector("#guessField").value;

if(x == y){    
   alert("You Win");
}

else if(x > y) {    
   guess++;
   alert("Correct answer is smaller!");
}

else{
   guess++;
   alert("Correct answer is greater! ");
  }
 
}
   