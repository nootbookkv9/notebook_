// Recursive Javascript program to search
// an element in linked list


// A Linked List Node
class Node {

    // Constructor to initialize a new node with data
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

// Checks whether the key is present in linked list
function searchKey(head, key) {

    // Base case
    if (head === null) 
        return false;

    // If key is present in current node, return true
    if (head.data === key) 
        return true;

    // Recur for remaining list
    return searchKey(head.next, key);
}

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

