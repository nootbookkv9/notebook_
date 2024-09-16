// Javascript function to find the length of the linked list
function findLength(head) {

    // Initialize a counter for the length
    let length = 0;

    // Start from the head of the list
    let current = head;

    // Traverse the list and increment the length for each
    // node
    while (current !== null) {
        length++;
        current = current.next;
    }

    // Return the final length of the linked list
    return length;
}

