const arr = [10,293,321,12,0,958]

// for (let i = 0 ; i < arr.length - 1 ; i++){
//     let smallest = i;
//     for( let j = i+1 ; j < arr.length -1 ; j++){
//         if( arr[smallest] > arr[j] ){
//             smallest = j;
//         }
//     }
//     let temp  = arr[smallest]
//     arr[smallest] = arr[i]
//     arr[i] = temp
// }
// console.log( arr)

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
