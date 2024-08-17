Insertion at a specific position in Doubly Linked List

To insert a new node at a specific position,

    Traverse the list to position – 1.
    If the position is valid, update the next pointer of new node to the next of current node and prev pointer of new node to the current node.
    Similarly, update next pointer of current node to the new node and prev pointer of new node’s next to the new node. 
