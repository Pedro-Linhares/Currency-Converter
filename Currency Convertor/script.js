function Convert(){
    //Currency
    var dollar = 5.24;
    var euro = 6.21;
    var yen = 0.048;
    var peso = 0.053;
    var pound = 7.24;
    var yuan = 0.81;

    //Get the input number
    var elementValue = document.getElementById("value");
    var value = elementValue.value;
    //covert value to float
    var floatCurrencyValue = parseFloat(value);
    //Get the all the inputs radios and put in an array
    var currency = document.getElementsByName("currency")
    
    var convertedElementValue = document.getElementById("result");
    var convertionPrice = document.getElementById("price");

    //check what input radio is checked and convert the value
    if(currency[0].checked){
        
        var convertedValue = floatCurrencyValue * dollar;
        
        var real =  "R$" + convertedValue.toFixed(2);
        convertedElementValue.innerHTML = real;
        convertionPrice.innerText = `1 Dollar is: R$ ${dollar}`
    }
    else if(currency[1].checked){
        var convertedValue = floatCurrencyValue * euro;

        var real = "R$" + convertedValue.toFixed(2);
        convertedElementValue.innerHTML = real;
        convertionPrice.innerText = `1 Euro is: R$${euro}`
    }
    else if(currency[2].checked){
        var convertedValue = floatCurrencyValue * yen;

        var real = "R$" + convertedValue.toFixed(2);
        convertedElementValue.innerHTML = real;
        convertionPrice.innerText = `1 Yen is: R$${yen}`
    }
    else if(currency[3].checked){
        var convertedValue = floatCurrencyValue * peso;

        var real = "R$" + convertedValue.toFixed(2);
        convertedValue.toFixed(2);
        convertedElementValue.innerHTML = real;
        convertionPrice.innerText = `1 Peso is: R$${peso}`
    }
    else if(currency[4].checked){
        var convertedValue = floatCurrencyValue * pound;

        var real = "R$" + convertedValue.toFixed(2);
        convertedValue.toFixed(2);
        convertedElementValue.innerHTML = real;
        convertionPrice.innerText = `1 Pound is: R$${pound}`
    }
    else{
        var convertedValue = floatCurrencyValue * yuan;

        var real = "R$" + convertedValue.toFixed(2);
        convertedValue.toFixed(2);
        convertedElementValue.innerHTML = real;
        convertionPrice.innerText = `1 yuan is: R$${yuan}`
    }
   
    
}

