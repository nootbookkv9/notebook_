## HEAD
Array is a [Linear Data Structure] where all elements are arranged sequentially. 
It is a collection of elements of same data type 
stored at contiguous memory locations. 
img_1

## Example
For simplicity, we can think of an array as a flight of stairs where on each step is placed a value (let’s say one of your friends). Here, you can identify the location of any of your friends by simply knowing the count of the step they are on.
This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). The base value is index 0 and the difference between the two indexes is the offset.

Remember: “Location of next index depends on the data type we use”.
img_2

## Is the array always of a fixed size?
In C language, the array has a fixed size meaning once the size is given to it, it cannot be changed i.e. you can’t shrink it nor can you expand it. The reason was that for expanding if we change the size we can’t be sure ( it’s not possible every time) that we get the next memory location to us for free. The shrinking will not work because the array, when declared, gets memory statically allocated, and thus compiler is the only one that can destroy it.



