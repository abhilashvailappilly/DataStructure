function sum(n){

    if(n <= 1){
        return 1
    }
    return n+ sum(n-1)
}

result = sum(40)
console.log(result)

