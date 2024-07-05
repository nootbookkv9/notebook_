# ---------------------------------------------------------
# Algorithm
	Steps to solve the problem
# Data Structure
	A way to store data in memory in specific structure
		Simple Structure --> Array

# ---------------------------------------------------------
# Intro to algorithm analysis
	- All reads leads to ROME
	- We want to know the best read to take

	- Time & Space || CPU & RAM

## Analysis for all cases
	- Worst    Case
	- Best     Case
	- Average  Case
## How to represent the Quality
	- Mathematical Equation
		- A relation between input size and time

## Time Complexity
	- Relation between input size and taken time to solve the problem
## Space Complexity
	- Relation between input size and used space to solve the problem

## Analysis in simple way
### Operation
	- Doesn't depend on input number
	- Take a constant time at any number of n
		- O(1)		// O of 1 // Const time
### Loop
	- for i = 0 to n step 1
		- O(n)		// O of N
	- for i = n to 0 step (/||*) 2
		- O(lg(n))	// O of log n
### Condition
	- if (){} else (){}
	- Time of the greatest condition
	- Example
		// ------------------------------
		fun(n)
			for i = 0 to n
				for j = 0 to 10
					print (i, j)

		print "end for"

		if (n > 5)
			print "greater then 5"
		else
			for i = n to 1 step / 2
				print n

		// ------------------------------
		fun(n)
			for i = 0 to n --------------> n
				for j = 0 to 10 ---------> 1
					print (i, j) --------> 1
		print "end for" -----------------> 1
		if (n > 5)
			print "greater then 5"
		else ----------------------------> log n
			for i = n to 1 step / 2
				print n
		
		// ------------------------------
		T(n) // Time of n
		T(n) = n*(1*(1)) + 1 + lg(n) 
		T(n) = n + 1 + lg(n)
		T(n) = O(n)

# ---------------------------------------------------------
# Steps to study any Algorithm
		- What problem it solves
		- How it works
		- Analysis			// Worst & Best Case
		- Implementation	// Write Code
		- Code improvement

# Searching Algorithms
## Linear Search
	// Pseudo Code
	for i = 0 to n
		if current element == target
			return index
	return -1
	
	// Analysis
	- Worst Case
		- Search for last element
		- O(n)
	- Best Case
		- Search for first element
		- O(1)
	
	// Implementation in C++
		#include <iostream>
		int Linear_Search_(int arr[], int target, int length) {
			for (int i = 0; i < length; i++)
				if (arr[i] == target) return i;
			return -1;
		}
		int main() {
			int arr[] = {20,3,4,14,5,6,7,21,34};
			int target = 14;
			int result = Linear_Search_(arr, target, sizeof(arr)/sizeof(int));
			std::cout << result << std::endl;
		}

## Binary Search
	// Psuedo Code
		got to middle
			if middle == target
				return index
			if middle > target
				search in left
			if middle < target
				search in right
	// Analysis
		Worst Case
			- Search for first or last element
				- O(lg(n))
		Best Case
			- Search for the middle element 
				- O(1)
	// Implementation in C++






# Sorting Algorithms
## Bubble Sort
## Selection Sort




