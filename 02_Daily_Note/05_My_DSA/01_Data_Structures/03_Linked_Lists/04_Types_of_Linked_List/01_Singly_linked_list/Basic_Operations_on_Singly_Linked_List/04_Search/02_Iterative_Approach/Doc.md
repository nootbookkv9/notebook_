Search an element in a Linked List (Iterative Approach) – O(N) Time and O(1) Space:

    The idea is to traverse all the nodes of the linked list, starting from the head. While traversing, if we find a node whose value is equal to key then print “Yes”, otherwise print “No”.

Follow the below steps to solve the problem:

    Initialize a node pointer, curr = head.
    Do following while current is not NULL
         If the current value (i.e., curr->key) is equal to the key being searched return true.
        Otherwise, move to the next node (curr = curr->next).
    If the key is not found, return false
