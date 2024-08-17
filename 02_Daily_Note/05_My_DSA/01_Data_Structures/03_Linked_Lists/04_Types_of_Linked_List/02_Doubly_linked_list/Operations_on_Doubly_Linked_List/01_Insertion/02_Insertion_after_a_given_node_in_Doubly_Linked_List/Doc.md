Insertion after a given node in Doubly Linked List

To insert a new node after a specific node,

    Find the given node in the linked list, say curr.
    Once we find it, create a new node say new_node with the given input data.
    Set the new node’s previous pointer to given node, new_node->prev = curr.
    Set the new node’s next pointer to the given node’s next, new_node->next = curr->next.
    Then, we update the next pointer of given node with new node, curr->next = new_node.
    Also, if the new node is not the last node of the linked list, then update previous pointer of new node’s next node to new node, new_node->next->prev = new_node. 
