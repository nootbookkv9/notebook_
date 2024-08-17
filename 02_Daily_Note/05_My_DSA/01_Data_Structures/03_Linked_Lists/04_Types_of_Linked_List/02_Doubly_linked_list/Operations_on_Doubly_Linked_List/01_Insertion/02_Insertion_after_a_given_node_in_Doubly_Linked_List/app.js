// Javascript Program to insert a node after a given node of doubly linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Function to insert a new node after a given node in the doubly linked list
function insertAfter(head, key, newData) {
    let curr = head;

    // Iterate over Linked List to find the key
    while (curr !== null) {
        if (curr.data === key) {
            break;
        }
        curr = curr.next;
    }

    // If curr becomes null, the given key is not found in
    // the linked list
    if (curr === null) {
        return head;
    }

    // Create a new node
    const newNode = new Node(newData);

    // Set prev of new node to the given node
    newNode.prev = curr;

    // Set next of new node to next of the given node
    newNode.next = curr.next;

    // Update next of the given node to the new node
    curr.next = newNode;

    // Update the prev of new node's next with the new node
    if (newNode.next !== null) {
        newNode.next.prev = newNode;
    }

    return head;
}

function printList(head) {
    let curr = head;
    let result = "";
    while (curr !== null) {
        result += curr.data + " ";
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

// Insert a new node after node with data 1
console.log("Inserting Node with data 2 after node 1:");
const data = 2;
const key = 1;
insertAfter(head, key, data);

// Print the updated list
printList(head);

