
function fact(number){
    if(number == 0 ||number == 1){
        return 1
    }

    while(number > 0){
        return number * fact(number-1)
    }
}

console.log(fact(4))