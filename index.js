function map(sourceArray, fn){
    const arr = []
    for (let i = 0; i < sourceArray.length; i++){
        arr.push(fn(sourceArray[i]))
    }
    return arr
}

function reduce(sourceArray, fn, start){
    let reduced;
    let i = 0;
    
    if (start){
        reduced = start 
    } else {
        reduced = sourceArray[0]
        i ++;
    }
    for (i; i < sourceArray.length; i++){
        reduced = fn(sourceArray[i], reduced)
    }
    return reduced 
};

