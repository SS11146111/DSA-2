var maxChunksToSorted = function(arr) {
    
    let chunks=0;
    let max=-1;

    for(i=0;i<arr.length;i++)
    {
        if(max<arr[i])
            max=arr[i]
        if(max==i)
            chunks++
    }

    return chunks
};

console.log(maxChunksToSorted([4,3,2,1,0]))