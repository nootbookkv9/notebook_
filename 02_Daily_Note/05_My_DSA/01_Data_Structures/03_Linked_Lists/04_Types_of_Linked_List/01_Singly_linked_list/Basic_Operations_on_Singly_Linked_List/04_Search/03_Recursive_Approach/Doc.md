Search an element in a Linked List (Recursive Approach) – O(N) Time and O(N) Space:

    The idea is to recursively traverse all the nodes starting from the head of linked list. For any node, if the value is equal to key, then return true. Otherwise, recursively search the next node. If at any point the head reaches NULL, it means that we have reached the end of linked list so return false.

Follow the below steps to solve the problem:

    If the head is NULL, return false.
    If the head’s key is the same as X, return true;
    Else recursively search in the next node.
