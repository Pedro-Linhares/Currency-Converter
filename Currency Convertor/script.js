function Convert(){
    var elementValue = document.getElementById("value");
    var value = elementValue.value;
    //covert value string to float
    var floatCurrencyValue = parseFloat(value);
    //convert Real on Dollar
    var covertedValue = floatCurrencyValue * 5.24;

    var covertedElementValue = document.getElementById("answer");
    var real = "The Brazilian Real value is: R$" + covertedValue.toFixed(2); 

    covertedElementValue.innerHTML = real;
}