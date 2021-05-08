
function countdown(string){
  let num = prompt('Enter number to be conuntdoun')
let num1 = parseFloat(num)
    for(countdown = num1; countdown >=0; countdown --){
        if (countdown === 0){
            console.log("Blast Off!");
            
        }else{
            console.log(countdown);
        }
    }
         
 }
 countdown()

