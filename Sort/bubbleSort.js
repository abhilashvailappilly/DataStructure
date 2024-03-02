
const arr = [10,293,321,12,0,958]

for(let i =0 ; i < arr.length-1 ; i++){
    for( let j = 0 ; j < arr.length-1-i ; j++){
        if(arr[j] > arr[j+1]){
            arr[j] = arr[j+1] + arr[j]
            arr[j+1] = arr[j] - arr[j+1]
            arr[j] = arr[j]-arr[j+1]
        }
    }
}
console.log("Ascending :",arr)

for( let i = 0 ; i < arr.length - 1; i++){
    for( let j = 0 ; j < arr.length -1 -i ; j++){
        if(arr[j] < arr[j+1]){
            arr[j] = arr[j+1] + arr[j]
            arr[j+1] = arr[j] - arr[j+1]
            arr[j] = arr[j]-arr[j+1]
        }
    }
}
console.log("Descending :",arr)

// console.log(10 ^ 2)