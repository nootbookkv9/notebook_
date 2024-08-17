// Javascript Program to insert a node at a given position

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Function to insert a new node at a given position
function insertAtPosition(head, pos, newData) {

    // Create a new node
    let newNode = new Node(newData);

    // Insertion at the beginning
    if (pos === 1) {
        newNode.next = head;
        if (head !== null) {
            head.prev = newNode;
        }
        head = newNode;
        return head;
    }

    let curr = head;
    
    // Traverse the list to find the node before the insertion point
    for (let i = 1; i < pos - 1 && curr !== null; ++i) {
        curr = curr.next;
    }

    // If the position is out of bounds
    if (curr === null) {
        console.log("Position is out of bounds.");
        return head;
    }

    // Set the prev of new node to curr
    newNode.prev = curr;

    // Set the next of new node to the next of curr
    newNode.next = curr.next;

    // Update the next of current node to new node
    curr.next = newNode;

    // If the new node is not the last node, update prev of next node to new node
    if (newNode.next !== null) {
        newNode.next.prev = newNode;
    }

    return head;
}

// Function to print the list
function printList(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.data + " ");
        curr = curr.next;
    }
    console.log();
}

// Create a hardcoded doubly linked list:
// 1 <-> 2 <-> 4
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(4);
head.next.next.prev = head.next;

// Print the original list
console.log("Original Linked List:");
printList(head);

// Insert new node with data 3 at position 3
console.log("Inserting Node with data 3 at position 3:");
head = insertAtPosition(head, 3, 3);

// Print the updated list
printList(head);

