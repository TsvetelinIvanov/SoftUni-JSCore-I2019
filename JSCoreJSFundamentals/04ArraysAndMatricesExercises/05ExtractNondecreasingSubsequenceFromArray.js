function extractNondecreasingSubsecuence(arr){
    let last = -Infinity;
    let nondecreasingArr =  arr.reduce((acc, el) => {
        if (el >= last) {
            acc.push(el);
            last = el;
        }
        return acc;
    }, []);

    console.log(nondecreasingArr.join('\n'));
}

extractNondecreasingSubsecuence([1, 3, 8, 4, 10, 12, 3, 2, 24])
extractNondecreasingSubsecuence([1, 2, 3, 4])
extractNondecreasingSubsecuence([20, 3, 2, 15, 6, 1])