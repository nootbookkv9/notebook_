// Javascript Program to Insert a Node At a Specific
// Position in Linked List

class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

// Function to insert a node at a specific position in the
// linked list
function insertAtPosition(head, position, data)
{
    let newNode = new Node(data);

    // If inserting at the beginning
    if (position === 1) {
        newNode.next = head;
        head = newNode;
        return head;
    }

    let current = head;
    for (let i = 1; i < position - 1 && current !== null;
         ++i) {
        current = current.next;
    }

    // If the position is out of bounds
    if (current === null) {
        console.log("Position is out of bounds.");
        return head;
    }

    newNode.next = current.next;
    current.next = newNode;
    return head;
}

function printList(head)
{
    let current = head;
    while (current !== null) {
        process.stdout.write(` ${current.data}`);
        current = current.next;
    }
    console.log();
}

// Creating the list 3->5->8->10
let head = new Node(3);
head.next = new Node(5);
head.next.next = new Node(8);
head.next.next.next = new Node(10);

console.log("Linked list before insertion:");
printList(head);

// Insert a new node with data 12 at position 3
let data = 12, pos = 2;
head = insertAtPosition(head, pos, data);
console.log(`Linked list after insertion of 12 at position ${pos}:`);
printList(head);

