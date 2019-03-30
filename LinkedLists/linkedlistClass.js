

// The example we are working on : 69 --> 100 --> 11

// We create a nodeClass to make the code cleaner
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Our linkedListClass
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    // Add value at the end of the linked list
    append(value) {
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
    prepend(value) {
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
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    // A method to insert a value in a specific place(index) inside the linked list
    insert(value, index) {

        // Check parameters (Normally we should also check the params in the previous methods)
        // If the index is greater than the lenght of the linkedlist we will just add the value at the the end of the it
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    remove(index){
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length++;
        return this.printList;
    }

    // A function that returns the node with the given index
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    
    reverse(){
        // If the linked list contains just one element
        if (!this.head.next) {
            return this;
        }

        let first = this.head;
        let second = first.next;
        while(second){ // as long as second is not null
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }

}

// For testing
const myLinkedList = new LinkedList(69);
myLinkedList.append(100);
myLinkedList.append(11);
myLinkedList.prepend(99);
myLinkedList.insert(77,2);
myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.printList();


// console.log(myLinkedList);