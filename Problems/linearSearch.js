let a = [ 10,2,3,45,656,42,23]

function search(arr,key){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]== key){
        return `${key} found at ${i} th position`
            
        }

    }
    return 'not found'
}
console.log(search(a,656))