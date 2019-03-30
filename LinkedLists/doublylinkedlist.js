

// The example we are working on : 69 --> 100 --> 11

// We create a nodeClass to make the code cleaner
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// Our linkedListClass
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
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
        newNode.prev = this.tail;
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
        this.head.prev = newNode;
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
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    // It does not ork for the last and first item
    remove(index){
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;

        leader.next = unwantedNode.next;
        unwantedNode.next.prev = leader;
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