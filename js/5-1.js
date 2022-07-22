function findSumBetter(arr, weight) {
    var hashtable = {};

    for(var i=0, arrLength=arr.length; i<arrLength; i++) {
        var currentElement = arr[i],
            difference = weight - currentElement;
        
        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[currentElement]];
        } else {
            hashtable[difference] = i;
        }
    }
    return -1;
}