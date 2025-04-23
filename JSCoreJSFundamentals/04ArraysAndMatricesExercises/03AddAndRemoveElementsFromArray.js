function addAndRemoveElements(arr) {
    let resultArr = arr.reduce((actual, element, index) => {
        if (element === 'add') {
            actual.push(index + 1);
        }
        else if (element === 'remove') {
            actual.pop();
        }
        
        return actual;
    }, []);

    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    }
    else {
        console.log('Empty');
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add'])
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])
addAndRemoveElements(['remove', 'remove', 'remove'])
