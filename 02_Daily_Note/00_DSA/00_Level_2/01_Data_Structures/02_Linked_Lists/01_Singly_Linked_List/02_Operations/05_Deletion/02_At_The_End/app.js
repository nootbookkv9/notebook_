// Javascript Function to remove the last node of the linked list
function removeLastNode(head) {
    // If the list is empty, return null
    if (head === null)
        return null;

    // If the list has only one node, delete it
    // and return null
    if (head.next === null) {
        head = null;
        return null;
    }

    // Find the second last node
    let second_last = head;
    while (second_last.next.next !== null)
        second_last = second_last.next;

    // Remove the last node
    second_last.next = null;
    
    // Return the modified list
    return head;
}
