
var name = prompt('Enter your name')

function capFirstLetter(name){
   
    return name.charAt(0).toUpperCase() + name.slice(1)

}
console.log(capFirstLetter(name))