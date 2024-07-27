



const theAmount=document.getElementById("amount")
 const theAmountCrypto=document.getElementById("crypto")
 const theAmountCurrency=document.getElementById("currency")
 const result=document.getElementById("result")
 const ExchangeRate=document.getElementById("rate")
 const convertCrypto=document.getElementById("convert")
 const clearButton=document.getElementById('clear')
 
 convertCrypto.addEventListener("click", function convertCrytoToCurrencies(){
    let fromCrypto= theAmountCrypto.value
    let theCurrency=theAmountCurrency.value
    let theNumber=theAmount.value
    
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCrypto}&vs_currencies=${theCurrency}`)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log('API response',data)
        let exchangeRate=data[fromCrypto][theCurrency.toLowerCase()]
        let theResult= theNumber * exchangeRate
        result.innerHTML=`${theNumber} ${fromCrypto}=${theResult.toFixed(2)} ${theCurrency}`
        ExchangeRate.innerHTML=`1`+`${fromCrypto}`+`=`+`${exchangeRate}`+ `${theCurrency}`
    })
 })



 clearButton.addEventListener('click', function clear(){
    let element=document.getElementsByClassName("clear")
    for(let i= 0;i <element.length;i++){
        element[i].value="";
    }
 })
 

 