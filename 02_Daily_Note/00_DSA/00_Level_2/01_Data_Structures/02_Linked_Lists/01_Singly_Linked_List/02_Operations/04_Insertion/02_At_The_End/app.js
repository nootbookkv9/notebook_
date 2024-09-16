// Javascript function to insert a node at the end of the linked list
function insertAtEnd(head, value) {

    // Create a new node with the given value
    let newNode = new Node(value);

    // If the list is empty, make the new node the head
    if (head === null) {
        return newNode;
    }

    // Traverse the list until the last node is reached
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }

    // Link the new node to the current last node
    current.next = newNode;

    return head;
}

