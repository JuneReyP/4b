

function alertMe() {
    alert('sample')
    let a = 1

}
// console.log(a);

/*sdfsd
sdfdsfsdsf
sdfsdfdsf
*/
document.getElementById('sample').innerHTML = 'Juan Dela Cruz';

/**
 * var
 * let
 * const
 */
var sample = "My Name is . . . ";
const myName = "Juan";

/**
 * There are different types of JavaScript operators:

    Arithmetic Operators
    Assignment Operators
    Comparison Operators
    Logical Operators
    Conditional Operators
    Type Operators

 */

//Arithmetic Operators
/**
 +
 -
 /
 %
 ++
 --
 *
 */
/**
 * Assignment Operators
= 	    x = y 	   x = y
+= 	    x += y 	   x = x + y
-= 	    x -= y 	    x = x - y
*= 	    x *= y 	    x = x * y
/= 	     x /= y 	x = x / y
%= 	     x %= y 	x = x % y
**= 	  x **= y 	 x = x ** y
 */

/**
 * JavaScript Comparison Operators
== 	equal to
=== 	equal value and equal type
!= 	not equal
!== 	not equal value or not equal type
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to
? 	ternary operator
 */


//console.log(num1 === num2);

/**
 * condition ? ifTrue : ifFalse;
 */


/*
if num1 is 
    equal value and equal type to
    num2
        AND
    num3
    not equal value and not equal type to
    num4
then 
    the statment is "Num1 and Num2 is equal type and value"
else
    the statment is "Num1 and Num2 is not equal type or  not equal value"
*/
// let num1 = 10; num2 = 10; num3 = "10"; num4 = 10; output; istrue = true; isfalse = false;
// (num1 === num2 || istrue) && (num3 !== num4) ? output = 'Num1 and Num2 is equal type and value And num3 and num4 not equal value and not equal type' : output = 'Num1 and Num2 is not equal type or  not equal value'

// document.getElementById('output').innerHTML = output;

/**
 * JavaScript Logical Operators
&& 	logical and
|| 	logical or
! 	logical not
 */

var a = true;

// alert(!a);


/*
AND
T T = T
F T = F
F F = F

OR
T T = T
F T = T
F F = f
* */

/*Conditional statement
if(condition){
    //code execution if true
}

if(condition){
    //code execution if true
}else{
    //code execution if false
}
*/

function tryIt() {
    let insert = document.getElementById('outData');
    let getData;

    // console.log(confirm("Sample Confirm functon"));
    // if(confirm("Are you sure to delete the data?")){
    //     getData = "Data deleted!";
    // }

    if (confirm("Are you sure to delete the data?")) {
        getData = "Data deleted!";
    } else {
        getData = "Deletion cancelled!";
    }


    insert.innerHTML = getData;
}

/*Switch statement
expression == keyword
    Switch(expression){
        case keyword:
            //code to be executed
            break;
        case keyword:
            //code to be executed
            break;
        case keyword:
            //code to be executed
            break;
        default:
            //code to be executed
            break;
        
    }

    function Name(param1, param2, param3){
        
    }
*/
function calcu(equation) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let answer; 
    let out = document.getElementById('outputAnswer');
    switch (equation) {
        case '+':
            answer = parseInt(num1) + parseInt(num2);
            //console.log('you clicked add');
            out.innerHTML = answer;
            break;
        case '-':
            answer = parseInt(num1) - parseInt(num2);
            //console.log('you clicked subtract');
            out.innerHTML = answer;
            break;
        case '*':
            answer = parseInt(num1) * parseInt(num2);
            out.innerHTML = answer;
            //console.log('you clicked multiply');
            break;
        case '/':
            answer = parseInt(num1) / parseInt(num2);
            out.innerHTML = answer;
            //console.log('you clicked divide');
            break;
        default:
            console.log('Data not found');
            break;

    }
}