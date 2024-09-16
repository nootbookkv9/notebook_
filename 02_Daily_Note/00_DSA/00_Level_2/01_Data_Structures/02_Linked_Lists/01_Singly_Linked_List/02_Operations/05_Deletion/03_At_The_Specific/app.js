// Javascript function to delete a node at a specific position
function deleteAtPosition(head, position) {
    // If the list is empty or the position is invalid
    if (head === null || position < 1) {
        return head;
    }

    // If the head needs to be deleted
    if (position === 1) {
        let temp = head;
        head = head.next;
        temp = null;
        return head;
    }

    // Traverse to the node before the position to be deleted
    let current = head;
    for (let i = 1; i < position - 1 && current !== null; i++) {
        current = current.next;
    }

    // If the position is out of range
    if (current === null || current.next === null) {
        return head;
    }

    // Store the node to be deleted
    let temp = current.next;

    // Update the links to bypass the node to be deleted
    current.next = current.next.next;

    // Delete the node
    temp = null;
    return head;
}
