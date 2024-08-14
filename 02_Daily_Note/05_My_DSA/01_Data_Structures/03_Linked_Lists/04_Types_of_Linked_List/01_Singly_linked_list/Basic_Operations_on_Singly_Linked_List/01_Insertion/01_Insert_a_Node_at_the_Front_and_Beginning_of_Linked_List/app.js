// JavaScript Program to insert the node at the beginning of
// Linked List

class Node {
    constructor(newData)
    {
        this.data = newData;

        this.next = null;
    }
}

// Function to insert a new node at the beginning of the
// list
function insertAtFront(head, newData)
{
    // Create a new node with the given data
    const newNode = new Node(newData);

    // Make the next of the new node point to the current
    // head
    newNode.next = head;

    // Return the new node as the new head of the list
    return newNode;
}

function printList(head)
{
    let curr = head;
    let result = "";

    while (curr !== null) {
        result += " " + curr.data;
        curr = curr.next;
    }
    console.log(result);
}

// Create the linked list 2->3->4->5
let head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(5);

// Print the original list
console.log("Original Linked List:");
printList(head);

// Insert a new node at the front of the list
console.log("After inserting Nodes at the front:");
const data = 1;
head = insertAtFront(head, data);

// Print the updated list
printList(head);
