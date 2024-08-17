// A linked list node
class Node {

    // Constructor to initialize a new node with data
    constructor(new_data)
    {
        this.data = new_data;
        this.next = null;
    }
}

// Function to traverse and print the singly linked list
function traverseList(head)
{

    // A loop that runs till head is nullptr
    while (head != null) {

        // Printing data of current node
        process.stdout.write(head.data + " ");

        // Moving to the next node
        head = head.next;
    }
    console.log();
}

// Driver code
function main()
{

    // Create a hard-coded linked list:
    // 10 -> 20 -> 30 -> 40
    let head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);

    // Example of traversing the node and printing
    traverseList(head);
}

// Calling the main method to execute the code
main();

