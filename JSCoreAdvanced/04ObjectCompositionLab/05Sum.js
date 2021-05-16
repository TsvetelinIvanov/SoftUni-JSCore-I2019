function addOrSubtract(){
    let elementNum1, elementNum2, elementResult;
    function init(selectorNum1, selectorNum2, selectorResult){
        elementNum1 = document.querySelector(selectorNum1);
        elementNum2 = document.querySelector(selectorNum2);
        elementResult = document.querySelector(selectorResult);
    }

    function add(){
        elementResult.value = Number(elementNum1.value) + Number(elementNum2.value);
    }

    function subtract(){
        elementResult.value = Number(elementNum1.value) - Number(elementNum2.value);
    }

    let returnedFunctions = {init, add, subtract};
    return returnedFunctions;
}