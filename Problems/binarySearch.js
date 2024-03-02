let a = [1,2,3,4,5,6,7,8,9]

function search(arr,key){
    let low = 0
    let high = arr.length-1
    
    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] == key){
            return `${key} found at ${mid} position`
        } else if( arr[mid] <= key ){
          low = mid+1;   
        }else{
            high = mid-1
        }
    }
    return " not found"
}

// let result = search(a,6)
// console.log(result)

function searchRecursion(a,key,low,high){
  let mid = Math.floor((low+high)/2)
    if(low > high){
        return "not found"
    } else if(a[mid] == key ){
        return `${key} found at ${mid} position`
    } else if(a[mid] >= key ){
        return searchRecursion(a,key,low,mid-1)
    } else{
        return searchRecursion(a,key,mid+1,high)
    }
}

let result = searchRecursion(a,6,0,a.length-1)
console.log(result)