// JavaScript Program to insert a node at the beginning of doubly
// linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Function to insert a new node at the front of the doubly linked list
function insertAtFront(head, newData) {
    // Create a new node
    let newNode = new Node(newData);

    // Make next of new node as head
    newNode.next = head;

    // Change prev of head node to new node
    if (head !== null) {
        head.prev = newNode;
    }

    // Return the new node as the head of the doubly linked list
    return newNode;
}

// Function to print the doubly linked list
function printList(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.data);
        curr = curr.next;
    }
    console.log();  // for newline
}

// Create a hardcoded doubly linked list:
// 2 <-> 3 <-> 4

let head = new Node(2);
head.next = new Node(3);
head.next.prev = head;
head.next.next = new Node(4);
head.next.next.prev = head.next;

// Print the original list
console.log("Original Linked List:");
printList(head);

// Insert a new node at the front of the list
console.log("After inserting Node at the front:");
let data = 1;
head = insertAtFront(head, data);

// Print the updated list
printList(head);

