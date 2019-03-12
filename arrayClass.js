class MyArray {

    // This the constructor of the class
    constructor(){
        this.length = 0;
        this.data = {};
    }

    // This is the method to get the item of a specific index
    get(index){
        return this.data[index];
    }

    // This method adds an item in the end of the array
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // This method deletes the last item of an array
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // This method deletes a specific item with his index
    delete(index){
        const item =this.data[index];
        this.shiftItems(index);
        return item;
    }

    // This is a function that helps us to reorganize our array by shifting the items to the left and deleting the last
    shiftItems(index){
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length--;
    }
}
// These are some tests that can help you understand the process

const newArray = new MyArray();
console.log(newArray);
newArray.push('Hi');
newArray.push('Mr');
newArray.push('Amin');
console.log(newArray);
newArray.delete(1);
console.log(newArray);