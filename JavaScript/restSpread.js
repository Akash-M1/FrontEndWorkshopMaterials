function sum(...ele){
    var sum1=0;
    ele.forEach(function(element){
        sum1 += element;
    })

    return sum1;
}


console.log(sum(2,3,4,5,6,7,8,8,9));



function volumeOfCube(l,b,h){
    return l*b*h;
}
var arr=[3,4,5];

console.log(volumeOfCube(arr[0],arr[1],arr[2]));
console.log(volumeOfCube(...arr));