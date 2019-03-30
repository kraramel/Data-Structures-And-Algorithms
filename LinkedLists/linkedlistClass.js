

// The example we are working on : 69 --> 100 --> 11

// We create a nodeClass to make the code cleaner
class Node {
    constructor(value){     
        this.value = value;
        this.next = null;
    }
}

// Our linkedListClass
class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    // Add value at the end of the linked list
    append(value){
        const newNode = new Node(value);// const newNode = {
                                        //     value: value,
                                        //     next: null
                                        // };

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    // Add value at the beginning of the linked list
    prepend(value){
        const newNode = new Node(value);// const newNode = {
                                        //     value: value,
                                        //     next: null
                                        // };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    // A function that is simply going to list our linkedList as an array
    printList(){
        const array = [];
        let currentNode = this.head;
        while (currenNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    // A method to insert a value in a specific place(index) inside the linked list
    insert(value, index){

    }
}

// For testing
const myLinkedList = new LinkedList(69);
myLinkedList.append(100);
myLinkedList.append(11);
myLinkedList.prepend(99);
// console.log(myLinkedList);