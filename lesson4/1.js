function convertDigitToObject(digit) {
    if (!(0 <= digit && digit <= 999)) {
        console.log('Digit less then 0 or great then 999');
        return {};
    }

    digit = (digit*0.001).toString().split(".")[1];

    return {
        'unit': digit[2],
        'decade': digit[1],
        'hundreds': digit[0],
    };

}
