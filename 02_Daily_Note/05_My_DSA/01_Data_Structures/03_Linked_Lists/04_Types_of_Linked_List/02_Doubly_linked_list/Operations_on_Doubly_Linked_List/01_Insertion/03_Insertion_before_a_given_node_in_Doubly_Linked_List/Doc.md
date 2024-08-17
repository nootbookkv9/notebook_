Insertion before a given node in Doubly Linked List

List

To insert a new node before a specific node,

    Find the given node in the linked list, say curr.
    Once we find it, create a new node say new_node with the given input data.
    Set the new node’s previous pointer to the node before the given node, new_node->prev = curr->prev.
    Set the new node’s next pointer to the given node, new_node->next = curr.
    Check if the given node is not the head of the linked list, then update next pointer of new node’s prev node to new node, new_node->prev->next = new_node.
    Finally, we update the previous pointer of given node with new node, curr->prev = new_node.
