
// function quickSort(arr){
//     if(arr.length <=1){
//         return arr 
//     }
//     let leftArr = []
//     let rightArr = []
//     let pivot = arr[arr.length-1]
//     for (let i =0 ; i < arr.length-1 ; i++){
//         if(arr[i] <= pivot){
//             leftArr.push(arr[i])
//         }else {
//             rightArr.push(arr[i])
//         }
//     }
//     // console.log(leftArr,rightArr)
//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }


function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[arr.length-1]
    let lefftArr = []
    let rightArr = []
    for (let i =0 ; i < arr.length - 1 ;i++){
        if(arr[i] < pivot){
            lefftArr.push(arr[i])
        } else{
            rightArr.push(arr[i])
        }
    }
    return [ ...quickSort(lefftArr),pivot,...quickSort(rightArr)] 
}

let arr = [10,30,7,-2,0,893,76,29]
let res = quickSort(arr)
console.log(res)