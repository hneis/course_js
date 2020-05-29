"use strict";

function convertCToF(tempC) {
     return (9 / 5) * tempC + 32;
}

function convertFToC(tempF) {
    return ((tempF - 32) * 5) / 9;
}

function convert(id) {
    let _convert = function (selectGetter, selectSetter, handler) {
        let input = document.querySelector(selectGetter).value;
        input = parseFloat(input);

        let convertedValue = handler(input);

        let setInput = document.querySelector(selectSetter);
        setInput.value = convertedValue.toFixed(2);
    };

    switch (id) {
        case "celsius":
            _convert("#celsius", "#fahrenheit", convertCToF);
            break;
        case "fahrenheit":
            _convert("#fahrenheit", "#celsius", convertFToC);
            break;
    }
}
