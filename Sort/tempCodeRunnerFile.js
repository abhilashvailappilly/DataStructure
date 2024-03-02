
for (let i = 0 ; i <arr.length-1  ; i++){
    let smallest = i
    for (let j = i+1 ; j<arr.length -1 ; j++){
        if(arr[smallest] > arr[j]){
            smallest = j
        }
    }
    let temp = arr[i]
    arr[i] = arr[smallest]
    arr[smallest] = temp 
}
console.log( arr)
