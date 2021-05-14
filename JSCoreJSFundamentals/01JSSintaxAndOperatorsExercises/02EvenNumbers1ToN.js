function evenNumbers(n){
    let num = Number(n);
    for(let i = 1; i <= num; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}
evenNumbers(10)