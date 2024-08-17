Insertion at the Beginning in Doubly Linked List

To insert a new node at the front of doubly linked list,

    Create a new node, say new_node with its previous pointer as NULL.
    Set the next pointer to the current head, new_node->next = head.
    Check if the linked list is not empty then we update the previous pointer of the current head to the new node, head->prev = new_node.
    Finally, we return the new node as the head of the linked list.
