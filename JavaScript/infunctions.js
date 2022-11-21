var a="Global"

function outer(){
    //var a="Outer"
    function inner(b){
        //var a="inner"
        console.log(a);
    }
    inner(10);
    console.log(a);
}

function parafunc(b){
   return b*b; 
}

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    return n * factorial(n-1);
}


function ncr(n,r,factorial){
    var ans=factorial(n)/(factorial(n-r)*factorial(r));
    return ans;
}


console.log("NCR Value",ncr(5,2,factorial));

var sq=parafunc(10);
console.log(sq);

outer();
console.log(a);



console.log(factorial);