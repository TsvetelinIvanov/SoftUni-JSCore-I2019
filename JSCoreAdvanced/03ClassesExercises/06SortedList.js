class SortedList {
    constructor() {
        this.sortedList = [];
        this.size = 0;
    }

    add(element) {
        this.sortedList.push(element);
        this.sortedList.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            //return;
            throw new Error('Incorrect index!');
        }
        
        this.sortedList.splice(index, 1);
        this.size--;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            //return;
            throw new Error('Incorrect index!');
        }
        
        return this.sortedList[index];
    }
}
