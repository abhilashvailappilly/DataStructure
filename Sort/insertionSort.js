
// function insertionSort(arr){
//     for ( let  i = 1 ; i < arr.length ; i++){
//         let element = arr[i];
//         j = i-1
//         while(  j >= 0 && arr[j] > element ){
//             arr[j+1]= arr[j];
//             j--
//         } 
//         arr[j+1] = element
//     }
//     return arr 
// }

function insertionSort(arr){
    for (let i =1 ; i < arr.length ; i++){
        let element = arr[i]
        let j =i-1
        while(j >= 0 && arr[j] > element){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = element
        console.log(arr)
    }
    return arr
}

const arr = [10,293,321,12,0,58]
let result = insertionSort(arr)
// console.log(result)