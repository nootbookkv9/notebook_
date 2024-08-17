// Javascript Program to insert a node at the end of doubly
// linked list

class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function insertEnd(head, newData)
{

    // Create a new node
    const newNode = new Node(newData);

    // If the linked list is empty, set the new node as the
    // head
    if (head === null) {
        head = newNode;
    }
    else {
        let curr = head;
        while (curr.next !== null) {
            curr = curr.next;
        }

        // Set the next of the last node to the new node
        curr.next = newNode;

        // Set the prev of the new node to the last node
        newNode.prev = curr;
    }

    return head;
}

function printList(head)
{
    let curr = head;
    let result = "";
    while (curr !== null) {
        result += curr.data + " ";
        curr = curr.next;
    }
    console.log(result.trim());
}

// Create a hardcoded doubly linked list:
// 1 <-> 2 <-> 3
let head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;

// Print the original list
console.log("Original Linked List: ");
printList(head);

// Insert a new node with data 4 at the end
console.log("Inserting Node with data 4 at the end: ");
const data = 4;
head = insertEnd(head, data);

// Print the updated list
printList(head);

