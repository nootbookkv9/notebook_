// JavaScript Program to insert a node before a given node of
// doubly linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Function to insert a new node before a given node in a doubly linked list
function insertBefore(head, key, newData) {
    let curr = head;

    // Iterate over Linked List to find the key
    while (curr !== null) {
        if (curr.data === key) {
            break;
        }
        curr = curr.next;
    }

    // if curr becomes null means, given key is not found in linked list
    if (curr === null) {
        return head;
    }

    // Create a new node
    const newNode = new Node(newData);

    // Set prev of new node to prev of given node
    newNode.prev = curr.prev;

    // Set next of new node to given node
    newNode.next = curr;

    // Update next of given node's prev to new node
    if (curr.prev !== null) {
        curr.prev.next = newNode;
    } else {
        // If the current node is the head, update the head
        head = newNode;
    }

    // Update prev of given node to new node
    curr.prev = newNode;

    // Return the head of the doubly linked list
    return head;
}

function printList(head) {
    let curr = head;
    let result = '';
    while (curr !== null) {
        result += ` ${curr.data}`;
        curr = curr.next;
    }
    console.log(result);
}

// Create a hardcoded doubly linked list:
// 1 <-> 3 <-> 4
const head = new Node(1);
head.next = new Node(3);
head.next.prev = head;
head.next.next = new Node(4);
head.next.next.prev = head.next;

// Print the original list
console.log("Original Linked List:");
printList(head);

// Insert a new node before node with data 3
console.log("Inserting Node with data 2 before node 3:");
const newData = 2;
const key = 3;
const newHead = insertBefore(head, key, newData);

// Print the updated list
printList(newHead);

