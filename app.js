let dob = document.querySelector("#dateOfBirth");
let luckyNumber = document.querySelector("#luckyNumber");
let submitBtn  = document.querySelector("#submit-btn");


function isBirthdayLucky(){
    let dateAsNum = parseInt(dob.value.replaceAll("-", "")) ;

   
    let sumOfDigits  = 0 ;

    while( dateAsNum   > 0 ){
      
        sumOfDigits += dateAsNum % 10  ;
        dateAsNum = Math.trunc(dateAsNum / 10)  ;
    } 

    console.log(sumOfDigits)

    if(sumOfDigits % luckyNumber.value  === 0 ){
        console.log(sumOfDigits % luckyNumber.value)
        console.log("Your Birthday is lucky");
    }
    else{
        console.log(sumOfDigits % luckyNumber.value)
        console.log("Sorry your birthday is not lucky");
    }


}

submitBtn.addEventListener("click" , isBirthdayLucky );