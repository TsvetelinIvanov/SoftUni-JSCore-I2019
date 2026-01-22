function manipulateSortedList() {
    let processSortedList = (function() {
        let sortedList = [];
        let add = function(element) {
            sortedList.push(element);
            sortedList.sort((a, b) => a - b);
            this.size++;
            
            return sortedList;
        };
        
        let remove = function(index) {
            if (index < 0 || index >= this.size) {
                //return;
                throw new Error('Incorrect index!')
            }
            
            sortedList.splice(index, 1);
            this.size--;
            
            return sortedList;
        };
        
        let get = function(index) {
            if (index < 0 || index >= this.size) {
                //return;
                throw new Error('Incorrect index!')
            }
            
            return sortedList[index];            
        };
        
        let size = 0;
        
        return {add, remove, get, size};
    })();
    
    return processSortedList;
}
