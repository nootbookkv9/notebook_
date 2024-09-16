// Javascript function to insert a new node at the beginning of the
// linked list
function insertAtBeginning(head, value) {

    // Create a new node with the given value
    let newNode = new Node(value);

    // Set the next pointer of the new node to the current
    // head
    newNode.next = head;

    // Move the head to point to the new node
    head = newNode;

    // Return the new head of the linked list
    return head;
}

