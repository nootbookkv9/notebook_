// Function to implement search operation 
function findElement( arr, n, key)
{
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
 
    return -1;
}

