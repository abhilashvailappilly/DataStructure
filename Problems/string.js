let str1 = 'helloz'
let str =''
let n=2
let key = n%26;
for( let i = 0 ;  i< str1.length ; i++){
    console.log( str1[i].charCodeAt()+2)
    let charCode = str1[i].charCodeAt()+key
    if(charCode <= 122){
        str += String.fromCharCode(charCode)
console.log(str[i])

    }else{
        str += String.fromCharCode(96+charCode%122)
console.log(str[i])

    }
    
console.log(str)
   
}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

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

const numAr = [10,20,30,{a:10,b:20,c:30},40]

let sum =0
numAr.forEach((ele)=>{
    if(typeof(ele)=== 'object'){
        sum +=Object.values(ele).reduce((a, b) => a + b, 0)
    } else{
        sum += ele;
    }
})
console.log("Sum " ,sum)

