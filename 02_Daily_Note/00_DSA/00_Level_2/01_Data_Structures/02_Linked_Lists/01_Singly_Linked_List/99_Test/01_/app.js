// ======================================================
// My Library ===========================================
let print = str => console.log(str)


// Node Object ==========================================
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// Add Node At The Begin ================================
function Add_Begin(head, value) {
	let newNode			= new Node(value)
		newNode.next	= head
		head			= newNode
	return head
}

// Add Node At The End ==================================
function Add_End(head, value) {
	let newNode = new Node(value)
	if (head === null) return newNode
	let current = head
	while (current.next !== null) { current = current.next }
	current.next = newNode
	return head
}

// Print All Nodes ======================================
function Print_Nodes(head) {
	let current = head
	while (current !== null) {
		print(`${current.data} `)
		current = current.next
	}
}

// Add Node At Custom ===================================
function Add_Custom(head, pos, value) {
	if (pos === 1) {
		let newNode = new Node(value)
		newNode.next = head
		return newNode
	}

	let prev = head
	let count = 1
	while (count < pos - 1 && prev !== null) {
		prev = prev.next
		count++
	}
	
	let newNode = new Node(value)
	newNode.next = prev.next
	prev.next = newNode
	return head
}

// Work =================================================
let head = new Node(4)
head	 = Add_Begin(head, 3)
head	 = Add_Begin(head, 2)
head	 = Add_Begin(head, 1)
head     = Add_End(head, 5)
head	 = Add_Custom(head, 1, 6)

Print_Nodes(head)


















// Comments =============================================

// Create Long Linked List whith for loop ===============
let head2 = null
for (let i = 0; i < 10; i++) {
	head2 = Add_End(head2, i)
}
//>_ Print_Nodes(head2)

// Fazda ================================================
/* 

	if (pos < 1) {
		print("Invalid position! 'Smaller then one'")
		return head
	}

	if (prev === null) {
		print("Invalid position! 'Greater then length'")
		return head
	}
*/



