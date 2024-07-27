
const amountToConvert = document.getElementById("amount-to-convert");
const amountToConvertFrom = document.getElementById("convert-from");
const amountToConvertTo = document.getElementById("convert-to");
const convertButton = document.getElementById("Convert");
const resetButton = document.getElementById("Reset");
const convertedAmount = document.getElementById("convertedAmount");
const changeRate = document.getElementById("changeRate");
 convertButton.addEventListener('click', function convert(){
    let fromCurrency= amountToConvertFrom.value
    let toCurrency= amountToConvertTo.value
    let amount=amountToConvert.value
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => {
          return response.json();
    })
    .then(data =>{
        console.log('API response',data)
        let rate= data.rates[toCurrency]
        let total= amount * rate
        convertedAmount.innerHTML= `${amount} ${fromCurrency}
=${total}${toCurrency}`
changeRate.innerHTML=`1`+`${fromCurrency}`+`=`+`${rate}`+`${toCurrency}`




    })

    
    
 })
 

 resetButton.addEventListener("click", function reset(){
    let element=document.getElementsByClassName('reset')
    for(let i= 0; i<element.length;i++){
        element[i].value="";
    }
    
 } )
 /*****cryto to currency converter */


 
 



