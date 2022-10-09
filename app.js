let dob = document.querySelector("#dateOfBirth");
let luckyNumber = document.querySelector("#luckyNumber");
let submitBtn  = document.querySelector("#submit-btn");

let outputDiv = document.querySelector("#output");

function displayMessage(msg){
    outputDiv.innerHTML = `<h2>${msg}</h2>`
}

function isBirthdayLucky(){
    let dateAsNum = parseInt(dob.value.replaceAll("-", "")) ;

   
    let sumOfDigits  = 0 ;

    while( dateAsNum   > 0 ){
      
        sumOfDigits += dateAsNum % 10  ;
        dateAsNum = Math.trunc(dateAsNum / 10)  ;
    } 


    if(luckyNumber.value === ""  || dob.value === ""){
        displayMessage("Enter both the field");
    }
    else if(luckyNumber.value <= 0 ){
        displayMessage("Enter valid positive lucky number") ;
    }
    else if(sumOfDigits % luckyNumber.value  === 0 ){
       // console.log(sumOfDigits % luckyNumber.value)
        displayMessage("Your Birthday is lucky 🥳");
    }
    else{
        //console.log(sumOfDigits % luckyNumber.value)
        displayMessage("Sorry your birthday is not lucky 😞");
    }


}

submitBtn.addEventListener("click" , isBirthdayLucky );