const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function pwdgntr() {
    
let password ="";
for(let i=0;i< 15;i++){
    let random =Math.floor( Math.random()*characters.length)
     password += characters[random]
}
return password
}

function btnfnction() {
    let password1 = document.querySelector("#pwd1")
let password2 = document.querySelector("#pwd2")
password1.textContent = pwdgntr();
password2.textContent = pwdgntr();
}



