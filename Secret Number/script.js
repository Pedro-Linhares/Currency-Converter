var secretNumber = parseInt(Math.random() * 11);

function Random() {
    
    //take the only the value in the number input
    var random = parseInt(document.getElementById("num").value);
    var result = document.getElementById("result");
    
     if( random == secretNumber){
        result.innerHTML = "Congratulation, you win";
            
        }
    else if(random > 10 || random < 0){
        alert("Choose a number between 0 and 10");
    }
    else{
        result.innerHTML =" Nop, try again ";
        
    }
    
    
         

}