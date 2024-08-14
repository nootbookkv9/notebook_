// JavaScript Program to Insert a Node after a Given
// Node in Linked List

class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

// Function to insert a new node after a given node
function insertAfter(head, key, newData)
{
    let curr = head;

    // Iterate over Linked List to find the key
    while (curr !== null) {
        if (curr.data === key)
            break;
        curr = curr.next;
    }

    // if curr becomes null means, given key is not found in
    // linked list
    if (curr === null)
        return head;

    // Allocate new node by given data and point
    // the next of newNode to curr's next &
    // point current next to newNode
    let newNode = new Node(newData);
    newNode.next = curr.next;
    curr.next = newNode;
    return head;
}

function printList(node)
{
    while (node !== null) {
        process.stdout.write(node.data + " ");
        node = node.next;
    }
    console.log();
}

// Create the linked list 2->3->5->6
let head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(5);
head.next.next.next = new Node(6);

console.log("Original Linked List: ");
printList(head);

// Key: Insert node after key
let key = 3, newData = 4;

// Insert a new node with data 4 after the node having
// data 3
head = insertAfter(head, key, newData);

console.log("Linked List after insertion: ");
printList(head);

