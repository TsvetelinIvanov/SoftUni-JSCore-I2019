function greatestCD() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let result = document.getElementById('result');

    //function gcd(a, b) {
    //    while (b !== 0) {
    //        let temp = b;
    //        b = a % b;
    //        a = temp;
    //    }
        
    //    return a;
    //}

    function gcd(a, b) {
        if (!b) {
            return a;
        }

        return gcd(b, a % b);
    }
    
    result.innerHTML = gcd(num1, num2);
}
