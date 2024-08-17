// Iterative JavaScript program to search
// an element in linked list

// A Linked List Node
class Node {

    // Constructor to initialize a new node with data
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

// Checks whether key is present in linked list
function searchKey(head, key) {

    // Initialize curr with the head of linked list
    let curr = head;

    // Iterate over all the nodes
    while (curr !== null) {

        // If the current node's value is equal to key,
        // return true
        if (curr.data === key)
            return true;

        // Move to the next node
        curr = curr.next;
    }

    // If there is no node with value as key, return false
    return false;
}

// Driver code

// Create a hard-coded linked list:
// 14 -> 21 -> 13 -> 30 -> 10
let head = new Node(14);
head.next = new Node(21);
head.next.next = new Node(13);
head.next.next.next = new Node(30);
head.next.next.next.next = new Node(10);

// Key to search in the linked list
let key = 14;

if (searchKey(head, key))
console.log("Yes");
else
console.log("No");

