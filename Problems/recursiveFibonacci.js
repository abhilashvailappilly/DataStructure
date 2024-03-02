

function sum(a,b,n) {
   if(n === 0){
    return ;
   }
   let c = a+b;
   console.log(c)
   sum(b,c,n-1)
}

console.log(0)
console.log(1)
sum(0,1,6)

function f(n){
    if(n <= 1){
        return 1
    }
    f(n-1)
    console.log(n)
    f(n-1)

}
// f(5)