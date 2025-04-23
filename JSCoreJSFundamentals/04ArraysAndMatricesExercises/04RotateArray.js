function rotateArray(arr) {
    let rotationsCount = Number(arr.pop());
    for (let i = 0; i < rotationsCount % arr.length; i++) {
        arr.unshift(arr.pop());        
    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
