let string = "aaabbccceefffffijj"

let result = ''
for(let i = 0 ; i< string.length ; i++){
    let count = 1;
    if(string[i]== string[i+1]){
        count++
        let j = i+2
        while(string[i]==string[j]){
            count++
            j++
        }
    }
    result += count+string[i]+" "
    i=i+count-1
}
console.log(result)