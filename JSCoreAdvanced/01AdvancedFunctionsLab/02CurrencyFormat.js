function getCurrencyFormatterAndMakeDollarFormatter(currencyFormatter){
    function makeDollarFormatter(value){
        return currencyFormatter(',', '$', true, value);
    };

    return makeDollarFormatter;
}

let dollarFormatter = getCurrencyFormatterAndMakeDollarFormatter(currencyFormatter);
console.log(getCurrencyFormatterAndMakeDollarFormatter(currencyFormatter)(789));
console.log(dollarFormatter(8907))
console.log(dollarFormatter(11.8919))
console.log(dollarFormatter(1.978))
console.log(dollarFormatter(-9))
console.log(dollarFormatter(1/4))

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}