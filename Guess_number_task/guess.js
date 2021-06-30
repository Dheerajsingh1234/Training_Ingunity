
 var ranvalue= Math.floor(Math.random()*100);
function checkValue(){
    
   
                
                var value=parseInt(prompt('Guess a number from 1 to 100: '));
                if(value > ranvalue)
                {
                    alert("you guess is high");
                }
                else if(value < ranvalue){
                    alert("you guess is low");
                }
                else if(value == ranvalue)
                {
                    alert("you guess is correct");
                
                    //console.log("you guess is correct");
                }
               while(value !== ranvalue) {
                    value = parseInt(prompt('Guess a number from 1 to 100: '));
                
                     //alert(ranvalue);    
                if(value > ranvalue)
                {
                    alert("you guess is high");
                }
                else if(value < ranvalue){
                    alert("you guess is low");
                }
                else if(value == ranvalue)
                {
                    alert("you guess is correct");
                
                    //console.log("you guess is correct");
                }

           
                 }     //document.getElementById("content").innerHTML="you guess is high";

    }