
// time complexity for dividing the array  will be O(log n)
// function mergeSort(arr){
//     if( arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0,mid)
//     const rightArr = arr.slice(mid)
//   return merge(mergeSort(leftArr),
//     mergeSort(rightArr) )
// }

// // time complexity for joining the array will be O(n)
// function merge(leftArr , rightArr){
//     const sortedArray = []
//     while(leftArr.length && rightArr.length ){
//         if(leftArr[0] <= rightArr[0] ){
//             sortedArray.push(leftArr.shift())
//         } else {
//             sortedArray.push(rightArr.shift())
//         }
//     }
//     return [...sortedArray,...rightArr,...leftArr]
// }

function mergeSort(arr){
    if(arr.length <=1 ){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    const sortedArray = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArray.push(leftArr.shift())
        } else {
            sortedArray.push(rightArr.shift())
        }
    }
    return [...sortedArray,...leftArr,...rightArr]
}
// Total time complexity for the merge sort will be log n * n = O(n log n)
let arr = [ 10,230,56,89,4,2,3,5,6]
console.log(mergeSort(arr))