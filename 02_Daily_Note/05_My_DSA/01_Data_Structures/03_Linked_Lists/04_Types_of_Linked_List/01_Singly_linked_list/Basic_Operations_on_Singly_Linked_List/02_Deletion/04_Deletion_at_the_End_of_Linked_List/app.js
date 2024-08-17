// Javascript program to delete the last node of linked list

// Node structure for the linked list
class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

// Function to remove the last node of the linked list
function removeLastNode(head)
{
    // If the list is empty, return null
    if (!head) {
        return null;
    }

    // If the list has only one node, delete it and return
    // null
    if (!head.next) {
        return null;
    }

    // Find the second last node
    let secondLast = head;
    while (secondLast.next.next) {
        secondLast = secondLast.next;
    }

    // Delete the last node
    secondLast.next = null;

    return head;
}

function printList(head)
{
    while (head) {
        process.stdout.write(head.data + " -> ");
        head = head.next;
    }
    console.log("null");
}

// Creating a static linked list
// 1 -> 2 -> 3 -> 4 -> 5 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original list: ");
printList(head);

// Removing the last node
head = removeLastNode(head);

console.log("List after removing the last node: ");
printList(head);

