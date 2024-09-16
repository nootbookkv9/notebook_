// Javascript Function to remove the first node
// of the linked list /
function removeFirstNode(head) {
  if (head == null) return null;

  // Move the head pointer to the next node
  temp = head;
  head = head.next;

  return head;
}
