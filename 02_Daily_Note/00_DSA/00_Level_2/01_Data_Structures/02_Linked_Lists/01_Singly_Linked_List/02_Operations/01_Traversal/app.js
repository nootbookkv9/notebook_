// Javascript Function to traverse and print the elements
// of the linked list
function traverseLinkedList(head) {

    // Start from the head of the linked list
    let current = head;

    // Traverse the linked list until reaching the
    // end (null)
    while (current !== null) {
    
        // Print the data of the current node
        console.log(current.data + " ");

        // Move to the next node
        current = current.next;
    }

    console.log();
}

