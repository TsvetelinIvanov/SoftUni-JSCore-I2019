let processedList = //in Judge must be paste only the IIFE
(function processLict(){
    let processedArray = [];
    let command = {
        add: function(processedArray, stringForAdding){
            processedArray.push(stringForAdding);
            return processedArray;
        },
        remove: function(processedArray, stringForRemoving){
            processedArray = processedArray.filter(s => s !== stringForRemoving);
            return processedArray;
        },
        print: function(){
            console.log(processedArray.join(','));
            return processedArray;
        }
    };

    return function readInputArrayAndApplyCommand(inputArray){
        for(let stringCommand of inputArray){
            let [commandName, commandSubject] = stringCommand.split(' ');
            processedArray = command[commandName](processedArray, commandSubject);
        }
    }
})()

processedList(['add hello', 'add again', 'remove hello', 'add again', 'print'])
//processedList(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'])
//processedList(['add JSFundamentals', 'print', 'add JSAdvanced', 'print','add JSApplications','print'])