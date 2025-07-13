const arrFromTo = (arr, start = 0, end = start + 1) => {
    var n = arr.length;
    if(start < 0 || end <= start || start >=n || end > n) return undefined;
    var result = [];
    for(let i = start; i < end; i++){
        result.push(arr[i]);
    }
    return result;
}

export {arrFromTo};