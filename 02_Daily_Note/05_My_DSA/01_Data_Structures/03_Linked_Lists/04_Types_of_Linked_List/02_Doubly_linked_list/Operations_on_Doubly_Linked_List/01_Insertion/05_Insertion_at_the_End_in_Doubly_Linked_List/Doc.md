Insertion at the End in Doubly Linked List

To insert a new node at the end,

    Allocate memory for a new node, say new_node and assign the provided value to its data field.
    Initialize the next pointer of the new node to NULL, new_node->next = NULL.
    If the linked list is empty, we set the new node as the head of linked list and return it as the new head of the linked list.
    Traverse the entire list until we reach the last node, say curr.
    Set the next pointer of last node to new node, curr->next = new_node
    Set the prev pointer of new node to last node, new_node->prev = curr
