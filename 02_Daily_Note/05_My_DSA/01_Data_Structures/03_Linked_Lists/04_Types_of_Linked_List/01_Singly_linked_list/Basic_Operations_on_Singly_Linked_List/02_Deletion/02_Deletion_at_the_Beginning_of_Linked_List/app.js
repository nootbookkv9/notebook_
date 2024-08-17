// Javascript program to delete a node from the beginning of
// given linked list
class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

// Function to delete head node
function deleteHead(head)
{
    // Base case if linked list is empty
    if (head === null)
        return null;

    // Move the head to the next node
    head = head.next;

    // Return the new head
    return head;
}

// Function to print the list
function printList(head)
{
    while (head !== null) {
        console.log(head.data + " -> ");
        head = head.next;
    }
    console.log("null");
}

// Driver code
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original list: ");
printList(head);

// Deleting the head node
head = deleteHead(head);

console.log("List after deleting the head: ");
printList(head);

