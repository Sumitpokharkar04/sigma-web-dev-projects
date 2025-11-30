/* create a faulty calculator using javascript that does following
1. it takes two nnumbers as input from the user 
2. it performs wring operations as follows 

+--->-
*--->-
(-)--->/
/---->** */

z=Math.random()*100;
console.log(z);
function faultyCalculator(a,b)
{
    if(z<10)
    {
        console.log("sum is " + (a+b));
        console.log("difference is " + (a-b));
        console.log("product is " + (a*b));
        console.log("division is " + (a/b));
    }
    else{
        console.log("sum is " + (a-b));
        console.log("difference is " + (a/b));
        console.log("product is " + (a-b));
        console.log("division is " + (a**b));
    }
}
faultyCalculator(10,5);
