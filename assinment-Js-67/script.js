              
                //Chapter1
                
//Task1.
 alert("Welcome Viewers");

//Task2.
 alert("Enter! Please enter a valid password");

//Task3.

 alert("Welcome to JS land...\nHappy Coding!");

//Task4.
 alert("Welcome to Js land... ");
 alert("Happy Coding!");

//Task5.
alert("Hello...I can run Js through my web browser's console");

                    //Chapter2

//Task1.
var username;

//Task2.
var myName="Mahnoor Shoukat";

//Task3.
 var message="Hello World";
alert(message);

//Task4.
 var name="John Doe";
 alert(name);
 var age="15 years old";
 alert(age);
var qualification="Certified Mobile Application Development";
 alert(qualification);

//Task5.
/var a=" PIZZA \n PIZZ \n PIZ \n PI \n P";
 alert(a);

 //Task6
 var email= "My email is : ";
 var address="manoa0741@gmail.com";
 var all= email+address;
 alert(all);

//Task7.
 var a="I am trying to learn from the Book ";
var book="A Smarter Way To Learn JavaScript";
 var c=a+book;
 alert(c);

//Task8.
 document.write("Yah! I can write HTML content through JavaScript");

//Task9.
 var border = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
 alert(border);

                   //Chapter3

//Task1.
 var age;
 age = "21";
 alert("i am" + " " + age + " " + "years old.");

//Task2.
 function clickCounter() {
     if (typeof (Storage) !== "undefined") {
       if (localStorage.clickcount) {
         localStorage.clickcount = Number(localStorage.clickcount) + 1;
       } else {
         localStorage.clickcount = 1;
       }
       alert("You have visited the website " + localStorage.clickcount + " time(s).");
     } else {
       alert("Sorry, your browser does not support web storage...");
     }
   }

//Task3.
 var birthYear;
 birthYear = "1998";
 document.write(" My birth year is" + " " + birthYear + "<br/>");
 document.write("Data type of my declared variable is number" + "<br/>" + "<br/>" + "<br/>");

//Task4.
 var name = "John Doe ";
 var Product = "T-shirt";

 function order() {
   if (typeof (Storage) !== "undefined") {
     if (localStorage.clickcount) {
       localStorage.clickcount = Number(localStorage.clickcount);
     } else {
       localStorage.clickcount = 1;
     }
     document.write("John Doe ordered " + localStorage.clickcount + " T-shirts on XYZ Clothing store");
   } else {
     document.write("Sorry, your browser does not support web storage...");
   }
 }

 document.write("" + " <br/>" + "");

                     //Chapter4

//Task1.
var a,b,c;

//Task2.
Legal Variable Name:-  
 var a="hello world";
 var b=hello;
 var c=myName;
 var d=5;
 var e=2+2;

Illegal variable name:- 
var a=?heloo;
var b=)menu;

//Task3.
//a.
 document.write("Rules for naming JS variables");
//b.
document.write(" Variable names can only contain "+ "$" + "_" + "For example $my_1stVariable");
//c.
 document.write(" Variables must begin with a"+ "$ and _"+ "small and capital letter" +"or" +"any alphabetic character"+" For example $name, _name or name ");
//d.
document.write(" Variable names are case"+"Sensetive");
//e.
document.write("Variable names should not be JS"+"Keyword");

                    //Chapter5

//Task1.
 var a = 5;
 var b = 3;
 var c = a + b;
 document.write("Sum of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task2.
subtraction
var a = 5;
var b = 3;
var c = a - b;
document.write("Subtraction of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");

//multiplication
var a = 5;
var b = 3;
var c = a * b;
document.write("Multiplication of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");

division
 var a = 5;
 var b = 3;
 var c = a / b;
 document.write("Division of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>");

modulus.
 var a = 5;
 var b = 3;
 var c = a % b;
 document.write("Modulus of" + " " + a + "  " + "and" + "  " + b + " " + "is" + " " + c + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task3.

//a. 
 var t;

//b.
 document.write("Value after variable declaration is:" + t + "<br/>");

//c. 
var t = 5;

d.
 document.write("Value after variable declaration is:" + t + "<br/>");

//e.
 var t;
 t++;

//f. 
 document.write("Value after increment is:" + t + "<br/>");

//g. 
 var r;
 r = t + 7;

//h.
 document.write("Value after addition is:" + r + "<br/>");

//i. 
 var s;
s = --r;

//j.
 document.write("Value after decrement is:" + s + "<br/>");

//k. 
 var u;
 u = s % 3;

//l. 
 document.write("The remainder is:" + u + "<br/>" + "<br/>" + "<br/>");

//Task4.

 var ticketprice = 600;
 var cost = ticketprice * 5;
 document.write("Total cost of buying 5 tickets to a movie is:" + cost + "PKR" + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task5.
var n=prompt("Enter any number to print table");
for(i=1; i<=10; i++){
    document.write(n + " x " + i + " = " + n*i + "<br>");
}

//Task6.
var celsius = 30;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 20;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

//Task7.

var item1 = 650;
var item2 = 100;
var quantity = 3;
var quantity2 = 7;
var charges = 100;
 Compute the total cost & show the receipt in your browser.
document.write("total cost of your order is: " + "  " + (+(item1 * quantity) + (+item2 * quantity2) + charges) + "<br/>" + "<br/>" + "<br/>");

//Task8.
var marks = 980;
var obtained = 804;
document.write(" Total Marks :" + marks + "<br/>" + "Marks Obtained :" + obtained + "<br/>" + "Percentage:" + (+obtained / marks * 100) + "%" + "<br/>" + "<br/>" + "<br/>");

//Task9.

var dollars = 10;
var riyals = 25;
document.write("Total Currency in PKR is:" + (+dollars * 104.80 + riyals * 28) + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task10.

var a = 10;
document.write((+a + 5) + (a * 10) + (a / 2) + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task11.
var birthYear = 1998;
var currentYear  = 2020;
var age  = currentYear - birthYear;
console.log('I will be either ' + age + ' or ' + (age - 1));

//Task12.
var radius = 3;
var circumference = Math.PI * 2*radius;
console.log("The circumference is " + circumference);
var area = Math.PI * radius*radius;
console.log("The area is " + area);

//Task13.
var snack="fries";
var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message = 'You will need ' + totalNeeded + '  to last you until the ripe old age of ' + maxAge;
console.log(message);
                    //Chapter6-9

//Task1.
var a = prompt("enter value for a is:")
document.write("The Value of" + a + "is:" + "<br/>");
document.write("......................." + "<br/>");
document.write("The Value of a++ is:" + ++a + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");

document.write("The Value of a++ is:" + a++ + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");
document.write("The Value of a++ is:" + --a + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");
document.write("The Value of a++ is:" + a-- + "<br/>");
document.write("Now the Value of a++ is:" + a + "<br/>" + "<br/>");

//Task2.
var a = 2, b = 1;
document.write("result:" + (+ --a - --b + ++b + b--) + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task3.
var username = prompt("enter your name:")
document.write("Hey" + " " + username + "!" + " " + "Thanks for visiting here" + "<br/>" + "<br/>" + "<br/>" + "<br/>");

//Task5.
var number = +prompt("enter table of your choice:");

if (number > 0) {
  document.write("Table of " + " " + number + "<br/>");

  for (x = 1; x <= 10; x++) {
    document.write(number + "x" + x + "=" + number * x + "<br/>");
  }
}
else if (console !== 'undefined') {
  document.write("Table of 5" + "<br/>");
  for (a = 1; a <= 10; a++) {
    document.write("5" + "x" + a + "=" + 5 * a + "<br/>");
  }
}
document.write("<br/>" + "<br/>" + "<br/>" + "<br/>");


                   //Chapter9-11
//Task1.
var city=prompt("Enter City");
if(city=="Karachi"){
    alert("Welcome to city of lights");
}  

//Task2.

var gender=prompt("Enter your gender");
if(gender=="Male"){
    alert("Good Morning Sir");
}
else if(gender=="Female"){
    alert("Good Morning Ma'am");
}

//Task3.

var color=prompt("Input signal color");
if(color=="Red"){
    alert("Must Stop");
}
else if(color=="Yellow"){
    alert("Ready to move");
}
else if(color=="Green"){
    alert("Move Now");
}

//Task4.

var a=prompt("Input Remaining fuel");
if(a<0.25){
    alert("Please refill the fuel in your car");
}

//Task5.
a.
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }                    //Output:given condition for variable a is true
b.
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }                  //No Output
//c.
var c = 12; if (c++ === 13){ alert("condition 1 is true"); }                                       //Output:condition 2 is true
if (c === 13){                                                                                     //Output:condition 4 is true
    alert("condition 2 is true"); } 
if (++c < 14){ 
    alert("condition 3 is true"); } 
    if(c === 14){
     alert("condition 4 is true"); }  

//d.
var materialCost = 20000;                                                                       //Output: The cost equals
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){
     alert("The cost equals"); } 

//e.
if (true){                                                                                    //Output:True
    alert("True"); } 
    if (false){ alert("False"); } 

//f.
if("car" < "cat"){                                                                           //Output:car is smaller than cat
    alert("car is smaller than cat"); } 

//Task7.

var secNum=4;
var n=prompt("Guess the number");
if(n==4){
    alert("Bingo! Correct answer");
}
else if(n+1){
    alert("Close enough to the correct answer");
}

//Task8.

var a=prompt("Enter num to check divisible of 3's");
if(a%3==0){
    alert("Yes it is divisible by 3");
}
else{
    alert("No it is not divisible by 3")
}

//Task9.

var a=prompt("Enter num to check even or odd");
if(a%2==0){
    alert("Even number");
}
else if(a%2!==0){
    alert("Odd number");
}

//Task10.

var t=prompt("Enter temperature");
if(t>40){
    alert("It is too hot outside");
}
else if(t>30){
 alert("The Weather today is Normal");
}
else if(t>20){
alert("Today’s Weather is cool.");
}
else if(t>10){
alert("OMG! Today’s weather is so Cool");
}

                   Chapter12-13

//Task1.

var ch;
ch=prompt("Enter any word or number");
if (ch>='A' && ch<='Z')
alert("Character is a capital letter");
else if (ch>='a' && ch<='z')
alert("Character is a small letter");
else
alert("It is a digit");

//Task2.

var a,b;
a=prompt("Input first integer");
b=prompt("Input second integer");
if(a>b)
document.write(a + "is greater integer");
else if(b>a)
document.write(b + "is greater integer");
else if(b===a)
document.write(b + "is equal to" +a);

//Task3.

var x=prompt("Enter a number to check positive negative or zero");
if(x>0){
    alert("Number is positive");
}
else if(x<0){
    alert("Number is negative");
}
else if(x==0){
    alert("Number is zero");
}

//Task4.

function isVowel(x){

	var text;
	var x = x.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (x != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
See if "A" is a vowel
var char ;
char=prompt("Enter any alphabet to check vowel or not");

if (isVowel(char)) {
	console.log("True");
} else {
	console.log("False");
}
  
//Task6.

var hour = 13; 
if (hour < 18){ 
    alert("Good day");
} 
    else {
        alert(" Good evening");
    }  

//Task7.

var time=prompt("Enter Prompt");
if(time>=0000 && time<1200){
    alert("Good Morning");
}
    else if(time>=1200 && time<1700){
        alert("Good Afternoon");
    }
    else if(time>=1700 && time<2100){
        alert("Good Evening");
    }
    else if(time>=2100 && time<2359){
        alert("Good night");
    }

                           //Chapter14-16
//Task1.

student_names= []; 

//Task2.

student_names= [];

//Task3.

var fruits =["apple", "orange", "grapes","mango"];

//Task4.

var num =[11,22,33,44,55];

//Task5.

var boolean =[true,false];

//Task6.

var mixArr =[true, 11, "mango", false, 55, "Ali"];

//Task7.

document.write("Qualifications");
var Pakistan=[SSC , HSC ,BCS , BS , BCOM , MS , MPhil , PhD];
for(Pakistan=[0]; ; Pakistan++){
document.write(Pakistan[0]);
}

//Task9.

var color=["red", "pink", "blue"];
document.write(color );
var a=prompt("Add color from start");
color.unshift(a);
document.write(color);
var b=prompt("Add color from end");
color.push(b);
document.write(color);
var c=prompt("Delete color from start");
color.shift(c);
document.write(color);
var d=prompt("Delete color from end");
color.pop(d);
document.write(color);
var e=prompt("Insert to an any index position");
color.splice(2,0,e);
document.write(color);
var f=prompt("Insert to an any index position");
color.slice(2,0,f);
document.write(color);

//Task10.

var std_score=[320,230,480,120];
document.write("Score of Students : " + std_score + "<br>");
std_score.sort(function(a, b){return a-b});
document.write("Ordered Score of Students : " + std_score);

//Task11.

var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("CitiesList:"+ "<br>" + cities + "<br>");
var selectedCitiesArray= cities.slice(1,4);
document.write("Selected Cities List:" + "<br>" + selectedCitiesArray);


//Task12.

var arr = ["This",  "is", "my" , "cat"]; 
document.write("Array <br>" + arr + "<br>");
document.write("String <br>" + arr.join(' '));

//Task13.

var arr=["keyboard", "Mouse", "Printer", "Monitor"];
alert(arr);
arr.shift();
alert(arr);
arr.shift();
alert(arr);
arr.shift();
alert(arr);

//Task14.

var arr=["keyboard", "Mouse", "Printer", "Monitor"];
alert(arr);
arr.pop();
alert(arr);
arr.pop();
alert(arr);
arr.pop();
alert(arr);

//Task15.
function favBrowser() {
    var mylist=document.getElementById('myList');
    document.getElementById('mobile').value=mylist.value;
}

                        //Chapter17-20
//Task1.

var arr=[],[],[];


//Task3.

for(var i=1; i<=10; i++){
    document.write(i + "<br>");
}

//Task4.

var n=prompt("Enter any number to print table");
var a=prompt("Enter length of table");
for(i=1; i<=a; i++){
    document.write(n + " x " + i + " = " + n*i + "<br>");
}

//Task5.

var fruits = new Array("Apple", "Banana", "Mango", "Orange", "Strawberry");

var len = fruits.length;	//no. of elements of the array

//print elements of the array
for (var i = 0; i < len; i++) {
	document.write(fruits[i]);
}

//Task6.

a.
document.write("Counting"+"<br>");
for(var a=1; a<=15; a++){
    document.write(a+",");
}

b.
document.write("Reverse Counting"+ "<br>");
for(var a=10; a>=1; a--){
    document.write(a+",");
}

//c.
document.write("Even"+ "<br>");
for(var a=0; a<=20; a++){
    if(a%2==0){
        document.write(a+",");
    }
    
}

//d.
document.write("Odd"+ "<br>");
for(var a=0; a<=20; a++){
    if(a%2!=0){
        document.write(a+",");
    }
    
}

//e.
document.write("Series"+ "<br>");
for(var a=2; a<=20; a++){
    if(a%2==0){
        document.write(a+"k"+",");
    }
    
}

//Task7.

var arr= ["cake", "apple pie", "cookie", "chips", "patties"];
a=prompt("What do you want to search");
alert(a + " is available at index " + arr.indexOf(a));

//Task8.

var array = [24, 53, 78, 91, 12];
var largest= 0;
document.write("Array is " + array + "<br>");

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
document.write("Largest num in array is : " + largest);

//Task9.

var arr = [24, 53, 78, 91, 12];
document.write("Array is " + arr + "<br>");
var min = Math.min.apply(Math, arr);
document.write("Smallest num in array is "+ min);

//Task10.

for(i=1; i<=100; i++){
    if(i%5==0){
        document.write(i+ " , ");
    }
}

//Task11.
var val1=+prompt("Enter First value");
var op=prompt("Enter Operator");
var val2=+prompt("Enter Second value");
console.log(val1+op+val2);
if(op==='+'){
    console.log((+val1)+(+val2));
}
else if(op==='-'){
    console.log(val1-val2);
}
else if(op==='*'){
    console.log(val1*val2);
}
else if(op==='/'){
    console.log(val1/val2);
}
else if(op==='%'){
    console.log(val1/val2*100+'%');
}

                    //===Chapter21-25===//
//Task1.
var a=prompt('Enter first name');
var b=prompt('Enter last name');
var fullName=a+" "+ b;
alert('Hello ' + fullName);   

//Task2.
var a=prompt('Enter your fav mobile phone')
var len=a.length;
document.write('Length of string : '+ len);

//Task3.
var a="Pakistani";
document.write("Index of n is: "+a.indexOf('n'));

//Task4.
var a="Hello World";
document.write("Last index of 'l' is: "+a.lastIndexOf('l'));

//Task5.
var a="Pakistani";
document.write("Character at index 3 is:  "+a.charAt(3));

//Task6.
var a=prompt('Enter first name');
var b=prompt('Enter last name');
//var c=a.concat(b);
//alert(c);

//Task7.
var a="Hyderabad";
document.write("City: "+ a+ "<br>");
var rep= a.replace("Hyder","Islam");
document.write("After Replacement: "+rep)

//Task8.
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message +"<br>");
for (var i = 0; i < message.length; i++) { 
       if (message.slice(i, i + 3) === "and") { 
         message = message.slice(0, i) + "&" + message.slice(i + 3); 
        } 
}
document.write(message); 

//Task9.
//var a=str="472";
//var b=str.toString();
//document.write("value"+"+string"+"<br>"+"type"+"string"+"<br>")
//var c=parseInt(a);
//document.write("value"+"+string"+"<br>"+"type"+"number")

//Task10.
var a=prompt("Enter any sentence in small letters");
var b= a.toUpperCase();
alert(b);

//Task11.
var str = prompt("Enter to convert in title case");

alert("In Title case:  "+

str.split(' ')
   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')

)

//Task12.
var num =35.36; 
var a= num.toString();
console.log(a);

//Task13.
var name=prompt("Enter username");
var name1=prompt("Enter valid username");
if(name==='!' && name===',' && name===',' && name==='@'){
alert(name1);
}

//Task14.
var sear=prompt("What do you want to order");
sear=sear.toLowerCase();
var A = ["cake", "apple pie", "cookie", "chips", "patties"]; 
for(var i=0;i<A.length;i++){
    if(A[i]===sear){
        alert("This is available");
    }
    else{
        alert("This is not available");
    }
}


//Task15.

//Task16.
var university="University of Karachi";
var b=split(university);
document.write(b);

//Task17.
var str = "Pakistan";
var res = str.charAt(str.length-1);
alert(res);

//Task18.
function gfg() { 
    var a = "The quick brown fox jumps over the lazy dog"; 
    var b = "the"; 
    var r = a.split(b).length - 1; 
    document.write(r); 
}
gfg();

                    //===Chapter26-30===//

//Task1.
var a=prompt("Enter positive integer");
if(a<0){
    var a=prompt("Enter positive integer");  
}  
document.write("number: "+a+"<br>");
document.write("round off value: "+Math.round(a)+"<br>");
document.write("floor value: "+Math.floor(a)+"<br>");
document.write("ceil value: "+Math.ceil(a)+"<br>");  

//Task2.
var a=prompt("Enter negative float num");
if(a>0){
    var a=prompt("Enter negative float num");  
}  
document.write("number: "+a+"<br>");
document.write("round off value: "+Math.round(a)+"<br>");
document.write("floor value: "+Math.floor(a)+"<br>");
document.write("ceil value: "+Math.ceil(a)+"<br>");

//Task3.
var a=prompt("Enter any value");
var b=Math.abs(a);
alert(b);

//Task4.
document.write("Random dice value: "+ Math.floor((Math.random() * 6) + 1));

//Task5.


//Task6.
document.write("Random value b/w 1 to 100: "+ Math.floor((Math.random() * 100) + 1));

//Task8.
var sec=5;
var b=prompt("Enter number b/w 1 to 10");
if(b==5){
    alert("Yayy! Correct")
}
else{
    alert("Try again")
}

                    //===Chapter31-34===//

//Task1.
var a= new Date();
console.log(a)

//Task2.
var month_name = function(dt){
mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
    };
console.log(month_name(new Date()));

//Task3.
var a=new Date();
var b=a.toString();
var c=b.slice(0,3);
alert("Today is: "+ c);

//Task4.
var a=new Date();
var b=a.toString();
var c=b.slice(0,3);
if(c==="Sun" && "Sat"){
    alert("Its Fun day")
}
else{
    alert("Its not sat or sunday today")
}

//Task5.
var a=new Date();
var b=a.toString();
var c=b.slice(7,10);
if(c<16){
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}

//Task6.
var a=new Date();
document.write("Current date: "+ a+"<br>");
var b=a.getTime();
document.write("Ellapsed MilliSeconds since january 1,1970: "+b+"<br>");
var c=a.getMinutes();
document.write("Ellapsed Minutes since january 1,1970: "+c);

//Task7.
function myFunction() { 
var date = new Date(); 
var hours = date.getHours(); 
var minutes = date.getMinutes(); 
if(hours >= 12){
     alert("Its PM")
}
else{
     alert("Its AM")
} 

document.write(  newformat )                   
} 
myFunction();

//Task8.
var d = new Date()
var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
document.write(weekday[d.getDay(4)] + " ")
document.write(d.getDate(31) + ". ")
document.write(monthname[d.getMonth(11)] + " ")
document.write(d.getFullYear(2020))

//Task9.
function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
}
document.write(days_passed(new Date(2020, 5, 25))+" days has passed since 1st Ramdan,2015");

//Task10.
var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  strip the ms
  timeDiff /= 1000;

  get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}
start(2015);
end(2020);





//Task11.
function myFunction() {
    var a = new Date();
    document.write("current date: "+a+"<br>");
    a.setHours(a.getHours() - 1);
    document.write("1 hour ago it was, "+ a);
}
myFunction();

//Task12.
function myFunction() {
    var a = new Date();
    alert("current date: "+a);
    a.setFullYear(a.getFullYear() - 100);
    alert("100 years ago it was, "+ a);
}
myFunction();

//Task13.
var a=prompt("Enter your age");

//Task14.
document.write("K-Electric Bill");
var a=prompt("Enter name");
var b= prompt("Enter month");
var c=prompt("Enter number of units");
var d=prompt("Enter charge per unit");

var netam=c*d;
document.write(netam);
var gross=netam*late
document.write(gross)


                    //===Chapter35-38===//

//Task1.
function date(){
    var a=new Date();
    alert(a)
}
date();

//Task2.
function greet(){
    var a=prompt("Enter first name");
    var b=prompt("enter last name");
    var c=a + b;
    alert("Welcome "+c);
}
greet();


//Task3.
var a=+prompt("Enter first num");
var b=+prompt("Enter second num");
function add(){
  return a+b;
}
document.write("The sum is "+add());


//Task4.
function cal(){

}

//Task5.
function Square(num) {
var i = num*num;
document.write("The square of number "+num + " is " + i ) ;
}
var num = parseInt(prompt("Enter a number:"));
Square(num);

//Task6.
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
n=prompt('Enter number')
  
document.write( "The factorial of "+n+" is " +factorial(n) );


//Task7.
var a=+prompt("Enter first number to start counting from");
var b=+prompt("Enter last number where counting end");
function counting(){
    for(i=a;i<=b;i++){
        if(i===b){
            break;
        }
    document.write(i)    
    }
}
counting();

//Task8.
function findHypotenuse(side1, side2){
    h = (((side1 * side1) + (side2 * side2))**(1/2)); 
    return h; 
} 
  
side1 = 3; 
side2 = 4; 
  
alert(findHypotenuse(side1, side2)); 


//Task9.
var length = +prompt("Enter a number for the length of your rectangle.");
var width = +prompt("Enter a number for the width of your rectangle.");
function area(length, width) {
    return length * width;
}
document.writeln('The area of your rectangle is ' + area(length, width)); 

//Task10.
function check_Palindrome(str_entry){
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    Check whether the string is empty or not
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
    Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    var a=prompt("Enter to check palindrome");
    check_Palindrome(a);


//Task11.
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
var a=prompt("Enter string");
console.log(uppercase(a));

//Task12.
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
var a=prompt("Enter string");
document.write("Longest word is  "+find_longest_word(a));

//Task13.
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o'));

//Task14.
function calcGeometry(radius) {
    var circumference = Math.PI * 2*radius;
    console.log("The circumference is " + circumference);
    var area = Math.PI * radius*radius;
    console.log("The area is " + area);
}


//========Chapter38-42=======

//Task1

var a =+prompt("enter the value of a ");
var b=+prompt("enter the value of b");

var value=power(a,b);
alert("raised value  ="+a+ "^"+b+" is "+value);
function power(a,b)
{
var i,value;
value=a;
for(i=1;i<b;i++)
{
value=value*a;
}
return value;
}

//Task2

var year=+prompt("Enter an year : ");
var leap=find(year);
	if(leap==1)
		alert(year+" is leap year ");
	else
		alert(year+" is not a leap year ");

function find(a)
{
	var i=0;
	if((a % 4 && a % 100 && a % 400)==0)
		i=1;
	else
		i=0;
	return i;
}


//Task3
var a =+prompt("Enter first sideof traingle");  
var b =+prompt("Enter second sideof traingle");  
var c =+prompt("Enter third sideof traingle");  

alert("Area is "+findArea(a, b, c))   

function findArea(a, b, c)  
{  
     
    if (a < 0 || b < 0 || c < 0 ||  
       (a + b <= c) || a + c <= b ||  
                       b + c <= a)  
    {  
        alert("Not a valid trianglen") ;  
        exit(0);  
    }  
    var s = (a + b + c) / 2;  
    return Math.sqrt(s * (s - a) *  
                    (s - b) * (s - c));  
}  
 
//Task4
var a=+prompt("Enter marks of first subject");
var b=+prompt("Enter marks of second subject");
var c=+prompt("Enter marks of third subject");
avg(a,b,c);
perc();
alert("average is"+av+" percentage is "+per);
function avg(){
     av=(a+b+c)/3;
}
function perc(){
    per=(av/(a+b+c))*100;
}

//Task5
var a="Mahnoor"
var b=a.indexOf('h');
alert("Index of h is "+b);

//Task6
var string = "Mahnoor Shoukat";
document.write(string+"<br>")
var vowel = ["a", "e", "i", "o", "u"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                j--;          
                secondLoop--;  
            }

        }
    }
}

string.character();
document.write("without vowels:   "+string);

//Task7
 function findOccurrences() {
     var str = "Pleases read this application and give me gratuity";
     var count = 0;
     let haveSeenVowel = false;
  
     for (const letter of str.toLowerCase()) {
       switch (letter) {
         case 'a':
         case 'e':
         case 'i':
         case 'o':
         case 'u':
           {
             if (haveSeenVowel) {
               count++;
               haveSeenVowel = false;
             } else {
               haveSeenVowel = true;
             }
             break;
           }
         default:
           haveSeenVowel = false
       }
     }
  
     return count
   }
  
 document.write("Number of occurences are "+findOccurrences());


//Task8
 var a =+prompt ("Enter the distance (in km):");
 function meter(){
     b = a * 1000;
     document.write("Distance in meters = "+b+"m"+"<br>");
 }
 function feet(){
     c = a * 3280.84 ;
     document.write("Distance in feet = "+c+"ft"+"<br>");
 }
 function inche(){
     d = a * 39370.08;
     document.write("Distance in inches = "+d+"in"+"<br>");
 }
 function cent(){
     f = a * 1000 * 100;
     document.write("Distance in centimeters = "+f+"cm"+"<br>");
 }
 meter();
 feet();
 inche();
 cent();

//Task9
var i, over_time, overtime_pay = 0;
var n=+prompt("How many employess you want to calculate overtime pay");
	for (i = 1; i <= n; i++)
	{
        var time_worked=+prompt("Enter the time employee worked in hr ");
        
		if (time_worked>40)
		{
			over_time = time_worked - 40;
			overtime_pay = overtime_pay + (12 * over_time);
		}
	}
document.write("Total Overtime Pay Of Employees Is "+ overtime_pay);

//Task10

var amount=+prompt("Please input amount for withdraw : ");
 document.write("you will have "+(amount / 100)+" hundred notes "+ (amount % 100) / 50+" fifty notes "+(((amount % 100) % 50) / 10)+" ten notes");

//========Chapter43-48=======

//Task2
function popup(message) { 
       alert(message); 
}

//Task3
function DeleteRow(o) {
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);
}

//Task4
function newImg(){
    document.getElementById('img1').src="images/s2.jpg";
}
function oldImg(){
    document.getElementById('img1').src="images/s1.jpg";
}

//Task5
 let btnAdd=document.querySelector('#add');
 let btnSub=document.querySelector('#sub');
 let input=document.querySelector('input');
 btnAdd.addEventListener('click', () =>{
     input.value= parseInt(input.value)+1;
 });
 btnSub.addEventListener('click', () =>{
     input.value= parseInt(input.value)-1;
 });

//========Chapter49-52=======

//Task1
 function tosubmit() {
      //Getting the value of your text input
     var mytext = document.getElementById("mytext").value;

      //Storing the value above into localStorage
     localStorage.setItem("mytext", mytext);

     return true;
 }
 function init() {
    Retrieving the text input's value which was stored into localStorage
     var mytext = localStorage.getItem("mytext");

    Writing the value in the document
    document.write("passed value = "+mytext);
}

//Task2
 function para() { 
       var paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut praesentium vel dicta explicabo voluptatum tenetur, maxime saepe, qui magni minus culpa eaque ad rem repellendus facere amet blanditiis porro aperiam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut praesentium vel dicta explicabo voluptatum tenetur, maxime saepe, qui magni minus culpa eaque ad rem repellendus facere amet blanditiis porro aperiam?"
        document.getElementById("para").innerHTML = paragraph; 
 }

//Task3
 function edit_row(no)
 {
  document.getElementById("edit_button"+no).style.display="none";
  document.getElementById("save_button"+no).style.display="block";
	
  var name=document.getElementById("name_row"+no);
  var country=document.getElementById("country_row"+no);
  var age=document.getElementById("age_row"+no);
	
  var name_data=name.innerHTML;
  var country_data=country.innerHTML;
  var age_data=age.innerHTML;
	
  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
 }

 function save_row(no)
 {
  var name_val=document.getElementById("name_text"+no).value;
  var country_val=document.getElementById("country_text"+no).value;
  var age_val=document.getElementById("age_text"+no).value;

  document.getElementById("name_row"+no).innerHTML=name_val;
  document.getElementById("country_row"+no).innerHTML=country_val;
  document.getElementById("age_row"+no).innerHTML=age_val;

  document.getElementById("edit_button"+no).style.display="block";
  document.getElementById("save_button"+no).style.display="none";
 }

 function delete_row(no)
 {
  document.getElementById("row"+no+"").outerHTML="";
 }

        //=========Chapter 53-58========

//Task1
 function img() {
         var images = ["image/1.jpg", "image/2.jpg", "image/3.jpg", "image/4.png"];
    
         for (var i = 0; i < images.length; i++) {
             document.getElementById("modal-img").innerHTML = images[i].src;
         }
         var modal = document.getElementById('modal');

 modal.classList.add('modal-open')
 modal.classList.remove('modal-close');
 }
    
 img();
 function onClosedImagModal(){
         var modal = document.getElementById('modal');
         modal.classList.add('modal-open')
         modal.classList.remove('modal-close');
         setTimeout(()=>{ modal.style.display = "none"; }, 550)
 }

//Task2

 function changeFontSize(target) {
         var para = document.getElementById("para");
         var computedStyle = window.getComputedStyle
               ? getComputedStyle(para) 
               : para.currentStyle;     
         var fontSize;
      
         if (computedStyle) { 
             fontSize = parseFloat(computedStyle && computedStyle.fontSize);
      
             if (target == document.getElementById("button1")) {
               fontSize += 5;
             } else if (target == document.getElementById("button2")) {
               fontSize -= 5;
             }
             para.style.fontSize = fontSize + "px";
         }
 }


        //=========Chapter58-67=======

//Task1

//i.

 var a = document.getElementById("main-content");
 console.log(a.nodeName)

//ii.

var a = document.getElementById("main-content");
 console.log(a.childNodes)

//iii.

 var d = document.getElementsByClassName("render"); 
  var p = d.childNodes; 
 console.log(p.innerHTML);

//iv.
 var a = document.getElementById("first-name");
 var newTxt = document.createTextNode("Mahnoor");
 a.appendChild(newTxt);

//v.

 var a = document.getElementById("last-name")
 var newTxt = document.createTextNode("Shoukat");
 a.appendChild(newTxt);

 var a = document.getElementById("email")
 var newTxt = document.createTextNode("manoa0741@gmail.com");
 a.appendChild(newTxt);

//Task2

//i.

 var a = document.getElementById("form-content");
 console.log(a.nodeType)

//ii.
 var a = document.getElementById("last-name");
 console.log(a.nodeType)
 console.log(a.childNodes)

//iii.
var a = document.getElementById("last-name");
var b = document.createElement("img")
console.log(b)

//iv.
 var a = document.getElementById("main-content");
 console.log(a.firstChild)
 console.log(a.lastChild)

//v.
 var a = document.getElementById("last-name");
 console.log(a.nextSibling)
 console.log(a.previousSibling)

//vi.
 var a = document.getElementById("email");
 console.log(a.nodeType)
 console.log(a.parentNode)
