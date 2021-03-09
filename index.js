/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;
var myName = 
/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4.  string  //
var lastName = 
var lastName = "Montgomery"; 
// assign a last Name to var lastName
// 5. number //
var length = 
var length = 2:
// assign the length to var (variable )
// 6. booleans //
var x = 3; 
var y = 3;
var z = 9;
(x == y) // return true 
(y == z) //  returns false
// should return false if statement is indeed false, and should return true if statement is true
// 7. array // 
var dogName = ""
var dogName = "Goldie ";
// assign your  a dogs name to variable dogName
// 8. function  //
function square
function square(the number); }
return number * number
// should return the product
// 9. undefined
function test(); {
  if (_ === undefined )
  return "undefined variable"
}
function test(Z); {
  if (z=== undefined )
  return "undefined variable"
}

// 9. NaN //
isNaN() // true or false 
isNan ("Hello people"); // true 
Number. isNaN ("hello people"); // false 

// 10. Negative infinity //
var smallNumber=
varr smallNumber = (-number.mAX_VALUE) * 2;

if (smallNumber === number.negative_INFINITY) {
  smallNumber = returnFinite();

  // 11. positive infinity//
  var bigNumber = number  max_value * 3;

if (bigNumber == number.positiveifinity{
  bigNumber = returnFinite();
}

// 12. the difference betwen primative and complex datatypes
complex dataypes  are nested  within primative datatypes. While primitive datatypes locate the size and value  of a variable 

// 13. Assignment operators//
var z = 
var z = 6 ;  
// assign 3 to Z
var z =6 
z += 3 ;  
// adds
var z = 6 
z-= 3; 
//subtracts 
var z = 6;
z *= 3;
// multiplys 
var z = 6;
z /= 3;
// divides 
var z = 6;
z %= 3
// gives quotient 

//14.  arithmetic operators // 
var x = number + number ;
var x = 50 + 50;
//number 
var x = variable  +  variable 
var x = z + h;
// variable
var x = (number + number) * variable;
var x = (70 + 20) * a;
// expression 

// 15. Comparasion operators // 
==	equal to	x ==  number 
==	equal to	x == 3  
===	equal value and equal type	x ===  number 
===	equal value and equal type	x === 2
!=	not equal	x !=  number 
!=	not equal	x != 3
!==	not equal value or not equal type	x !== number 
!==	not equal value or not equal type	x !== 4
>	greater than	x > number 
>	greater than	x > 2
<	less than	x < number 
<	less than	x < 10
>=	greater than or equal to	x >= number 
>=	greater than or equal to	x >= 6
<=	less than or equal to	x <= number 
<=	less than or equal to	x <= 3 
// values 

// (+) //
const str = '' + ' ' + '';
str; // '' 
const str = "Hello" +  '' + "people";
str; // "Hello people "

// split operator //
var word = "body";

var splitWord = word.split("");
var splitWord = word.split('b ,'o ', 'd', "y')

// reverse operator //
var reverseWord = splitWord.reverse();
var reverseWord = splitWord. reverse('y', 'd', o, 'b") 

 // join operator//
 joinedWords = reverseWord.join("")
 joinedWords = reverse. join ("y" "d''' 'o' ''b')

 // if statements//
 if (hour < ) {
  greeting = ""; 
  if (hour < 16) {
  greeting = "Good afternoon";

  // else statemets //
  if (hour < ) {
  greeting = "";
} else {
  greeting = "";
}
if (hour < 16) {
  greeting = "Good aftenoonr";
} else {
  greeting = "Good evening";
}
if (time < ) {
  greeting = "";
} else if (time < ) {
  greeting = "";
} else {
  greeting = "";
}
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// while loops// 
// while loops are control staements which allow code to be excecuted repeatdly based on it's boolean status 
while (i < ) {
  text += "The numberis " + i;
  i++;
  while (i < 5) {
  text += "The number is " + i;
  i++;

  // Functions // 
  1. What’s the syntax for a NAMED function?
  function expression 

  How do we assign a function to a variable?
  by using var myfunc = function 

  Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?

define the inputs parameter 

What’s the difference between a function’s parameters and arguments PASSED to a function?
 function parameters are the names listed while the arguments are the values passed 