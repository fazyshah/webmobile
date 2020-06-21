//                                             // Chapters 21 to 25

// // task 1                                            
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "!");

// // task 2
// var userInput = prompt("Enter Your Favorite mobile Phone Model");
// document.write("My favorite phone is: " + userInput + "<br>");
// var length = userInput.length;
// document.write("Length of string is: " + length);

// // task 3
// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>")
// nationality = nationality.indexOf("n");
// document.write("Index of 'n' is: " + nationality);

// // task 4
// var greet = "Hello World";
// document.write("String: " + greet + "<br>");
// greet = greet.lastIndexOf("l");
// document.write("Last index of 'l' is: " + greet);

// // tsak 5
// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>");
// nationality = nationality.charAt(3);
// document.write("Character at index 3 is: " + nationality);

// // task 6
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " + lastName);
// document.write("Welcome " + fullName + "!");

// // task 7
// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// city = city.replace("Hyder", "Islam");
// document.write("After replacement " + city);

// // task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + message + "<br>");
// message = message.replace(/and/g, "&");
// document.write("Message after replacement: " + message);

// // task 9
// var num = 472;
// document.write("Value: " + num.toString() + "<br>" + "Type: String" + "<br><br>");
// num = Number(num);
// document.write("Value: " + num + "<br>" + "Type: Number" + "<br><br>");

// // task 10
// var userInput = prompt("Enter your word");
// document.write("User Input is: " + userInput + "<br>");
// userInput = userInput.toUpperCase();
// document.write("Upper Case: " + userInput);

// // task 11
// var userInput = prompt("Enter your word");
// document.write("User Input is: " + userInput + "<br>")
// var firstLetter = userInput.slice(0, 1);
// firstLetter = firstLetter.toUpperCase();
// var otherLetters = userInput.slice(1);
// otherLetters = otherLetters.toLocaleLowerCase();
// document.write("Title Case: " + firstLetter + otherLetters);

// // task 12
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var newNum = num.toString();
// document.write("Result: " + newNum.replace(".", ""));

// // task 13
// var userName = prompt("Please Enter Your Username");
// userName = userName.split("");
// for (i = 0; i < userName.length; i++) {
//     if (userName[i] === String.fromCharCode(33) || userName[i] === String.fromCharCode(44) || userName[i] === String.fromCharCode(46) || userName[i] === String.fromCharCode(64)) {
//         alert("Please Enter Valid Username");
//     }else {
//         document.write("Correct");
//     }
// }

// // task 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
//         break
//     }
// }
// if (userInput !== arr[i]) {
//     document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
// }

// // task 15
// var password = prompt("Enter Your Password");
// if (password >= String.fromCharCode(65) || password <= String.fromCharCode(90) && password >= 0 || password <= 9) {
//     document.write(password);
// }

// // task16
// var university = "University of Karachi";
// document.write(university.split("").join("<br>"));

// // task 17
// var userInput = prompt("Enter Your Word");
// document.write("User input: " + userInput + "<br>");
// userInput = userInput.split("").reverse();
// document.write("Last character of input: " + userInput.slice(0,1));

// // task 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "<br>");
// var text1 = text.toLowerCase();
// document.write("There are " + text1.match(/the/g).length + " occurence(s) of word 'the'");

//                                             // Chapters 26 to 30

// // task 1
// var num = +prompt("Enter positive integer");
// document.write("Number: " + num + "<br>");
// var num1 = Math.round(num);
// document.write("Round off value: " + num1 + "<br>");
// var num2 = Math.floor(num);
// document.write("Floor value: " + num2 + "<br>");
// var num3 = Math.ceil(num);
// document.write("Ceil value: " + num3 + "<br>");

// // task 2
// var num = +prompt("Enter negative number");
// document.write("Number: " + num + "<br>");
// var num1 = Math.round(num);
// document.write("Round off value: " + num1 + "<br>");
// var num2 = Math.floor(num);
// document.write("Floor value: " + num2 + "<br>");
// var num3 = Math.ceil(num);
// document.write("Ceil value: " + num3 + "<br>");

// // task 3
// var num = +prompt("Enter a number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

// // task 4
// var dice = Math.random() * 6;
// document.write("Random dice value: " + Math.ceil(dice) + "<br>");
// var dice1 = Math.random(dice) * 6;
// document.write("Random dice value: " + Math.ceil(dice1) + "<br>");
// var dice2 = Math.random(dice1) * 6;
// document.write("Random dice value: " + Math.ceil(dice2));

// // task 5
// var toss = Math.random() * 2;
// toss = Math.ceil(toss);
// if (toss === 1) {
//     document.write(toss + "<br>" + "random coin value: Tails")
// }else {
//     document.write(toss + "<br>" + "random coin value: Heads")
// }

// // task 6
// var num = Math.random() * 100;
// num = Math.ceil(num);
// document.write("random num between 1 and 100: " + num);

// // task 7
// var weight = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + weight);

// // task 8
// var num = 5;
// var userInput = +prompt("Enter secret number between 1 to 10");
// if (userInput === num) {
//     document.write("Congratulation you guess the number!");
// }else {
//     document.write("Try again!");
// }

// var num = Math.random() * 10;
// num = Math.ceil(num);
// var userInput = +prompt("Enter secret number between 1 to 10");
// if (userInput === num) {
//     document.write("Congratulation you guess the number!");
// }else {
//     document.write("Try again!");
// }

//                                             // Chapters 31 to 34

// // task 1
// var date = new Date();
// document.write(date);

// // task 2
// var date = new Date();
// date = date.toString();
// var month = date.slice(4, 8);
// alert("Current Month: " + month);

// // task 3
// var date = new Date();
// date = date.toString();
// var day = date.slice(0, 4);
// alert("Today is " + day);

// // task 4
// var day = prompt("Enter Day");
// day = day.toLowerCase();
// if (day === "saturday" || day === "sunday") {
//     alert("It's Fun day");
// }else {
//     alert("It's not a Fun day");
// }

// // task 5
// var day = new Date();
// day = day.getDate();
// if (day < 16) {
//     document.write("First fifteen days of the month");
// }else {
//     document.write("Last days of the month");
// }

// // task 6
// var date = new Date();
// document.write("Current Date: " + date + "<br>");
// var milliSeconds = date.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br>");
// var minutes = milliSeconds / (1000 * 60 * 60);
// document.write("Elapsed minutes since January 1, 1970: " + minutes);

// // task 7
// var time = new Date();
// time = time.getHours();
// if (time < 12) {
//     alert("It's AM");
// }else {
//     alert("It's PM")
// }

// // task 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);

// // task 9
// var ramadan = new Date("June 18, 2015");
// var ramadanMili = ramadan.getTime();
// var date = new Date();
// var dateMili = date.getTime();
// var dif = dateMili - ramadanMili;
// dif = dif / (1000*60*60*24);
// document.write(Math.floor(dif) + " days have passed since 1st Ramadan, 2015");

// // task 10
// var begDate = new Date("Jan 01, 2015");
// var begDateMili = begDate.getTime();
// var refDate = new Date("Sat Dec 05, 2015 22:50:16");
// document.write("On reference date " + refDate + ", <br>")
// var refDateMili = refDate.getTime();
// var dif = refDateMili - begDateMili;
// dif = dif / (1000*60);
// document.write(Math.ceil(dif) + " seconds has passed since beginning of 2015");

// // task 11
// var date = new Date("Jun 18, 2020 12:30:00");
// document.write("current date: " + date + "<br>");
// var hour = new Date("Jun 18, 2020 11:30:00");
// document.write("1 hour ago, it was " + hour);

// // task 12
// var date = new Date("Jun 18, 2020 12:30:00");
// document.write("current date: " + date + "<br>");
// var year = new Date("Jun 18, 1920 11:30:00");
// document.write("100 years back , it was " + year);

// // task 13
// var userInput = new Date(prompt("Enter Your Birth Year"));
// var userInputMili = userInput.getTime();
// userInput = userInput.getFullYear();
// var todayDate = new Date();
// var todayDateMili = todayDate.getTime();
// var dif = todayDateMili - userInputMili;
// dif = dif / (1000*60*60*24*30*12);
// document.write("Your age is " + Math.floor(dif) + "<br>");
// document.write("Your birth year is " + userInput);

// // task 14
// document.write("<h1>K-Electric Bill</h1> <br>");
// var name = prompt("Enter your name");
// document.write("Costumer Name: " + "<strong>" + name + "</strong>" + "<br>")
// var month = "June";
// document.write("Month: " + "<strong>" + month + "</strong>" + "<br>");
// var numOfUnits = +prompt("Enter consumed units");
// document.write("Number of units: " + "<strong>" + numOfUnits + "</strong>" + "<br>");
// var charges = 16;
// document.write("Charges per unit: " + "<strong>" + charges + "</strong>" + "<br><br>");
// var netAmount = numOfUnits * charges;
// document.write("Net Amount Payable (within Due Date): " + "<strong>" + netAmount + "</strong>" + "<br>");
// var latePay = 350;
// document.write("Late Payment Surcharge: " + "<strong>" + latePay + "</strong>" + "<br>");
// var grossAmount = netAmount + latePay;
// document.write("Gross Amount Payable (after Due Date): " + "<strong>" + grossAmount + "</strong>");

//                                             // Chapters 35 to 38

// // task 1
// function date() {
//     document.write(new Date());
// }

// date();

// // task 2
// function greet(firstName, lastName) {
//     firstName = firstName.toUpperCase()
//     lastName = lastName.toUpperCase()
//     document.write("Hello " + firstName + " " + lastName + "!");
// }
// greet(prompt("Enter your first name"), prompt("Enter your last name"));

// // task 3
// var sum;
// function greet(firstNum, secondNum) {
//     document.write("First Number is : " + firstNum + "<br>")
//     document.write("Second Number is : " + secondNum + "<br>")
//     sum = firstNum + secondNum
//     document.write("Sum: " + sum);
// }
// greet(+prompt("Enter first number"), +prompt("Enter second number"));

// // task 4
// function calculator(num1, operator, num2) {
//     switch (operator) {
//         case "+":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 + num2);

//         case "-":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 - num2);

//         case "*":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 * num2);

//         case "/":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 / num2);

//         case "5":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 % num2);

//         default:
//             return document.write("Grr an error accurred")
//         }
// }

// calculator(+prompt("Enter 1st Number"), prompt("Enter Operator: + - * / %"), +prompt("Enter 2nd Number"));

// // task 5
// function square(argu) {
//     document.write("Input is: " + argu + "<br>")
//     document.write("Square is: " + argu * argu);
// }
// square(+prompt("Enter number for square"));

// // task 6
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }else {
//         return num * factorial(num-1);
//     }
// }
// var num = +prompt("Enter Number for factorial");
// var answer = factorial(num);
// document.write("The factorial of " + num + " is " + answer);

// // task 7
// function counting(num1, num2) {
// document.write("Starting number is: " + num1 + "<br>")
// document.write("Ending number is: " + num2 + "<br>")
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting(+prompt("Enter starting number"), +prompt("Enter ending number"));

// // task 8
// function hypotenuse(base, perpendicular) {
//     function square(v1, v2) {
//         document.write("First value is: " + v1 + "<br>");
//         var v1Square = v1*v1;
//         document.write("Sqaure root of " + v1 + " is: " + v1Square + "<br><br>");
//         document.write("Second value is: " + v2 + "<br>");
//         var v2Square = v2*v2;
//         document.write("Sqaure root of " + v2 + " is: " + v2Square + "<br><br>");
//         var sqrt = v1*v1 + v2*v2;
//         document.write("Sum of " + v1Square + " and " + v2Square + " is " + sqrt + "<br><hr>");
//     }
//     square(base, perpendicular)
//     document.write("Hypotenuse: " + Math.hypot(base, perpendicular))
// }
// hypotenuse(+prompt("Enter Base"), +prompt("Enter Perpendicular"));

// // task 9
// var height = 5;
// function area(width, height) {
//     document.write("Area of a rectangle is: " + width * height);
// }
// area(10, height);

// // task 10
// function palindrome(word) {
//     var reverse = word.split("").reverse().join("");
//     switch (word) {
//         case reverse:
//             return document.write(word + " and " + reverse + " is same so this is a Palindrome word");

//         default:
//             return document.write(word + " and " + reverse + " is not same so this is not a Palindrome word");

//     }
// }
// palindrome(prompt("Enter word"));

// // task 11
// function titleCase(string) {
//     string = string.split(" ");
//     for (var i = 0; i < string.length; i++) {
//         var firstLetter = string[i].slice(0, 1);
//         firstLetter = firstLetter.toUpperCase();
//         var otherLetters = string[i].slice(1);
//         otherLetters = otherLetters.toLowerCase();
//         var result = firstLetter + otherLetters;
//         document.write(result + " ");
//     }
//     // var capitalized = string.replace("the", "The").replace("quick", "Quick").replace("brown", "Brown").replace("fox", "Fox").replace("jumps", "Jumps").replace("over", "Over").replace("the", "The").replace("lazy", "Lazy").replace("dog", "Dog");
//     // document.write(capitalized);
// }
// titleCase("the quick brown fox jumps over the lazy dog" + "<br>");
// // titleCase(prompt("Enter some text"));

// // task 12
// function longestWord(word) {
//   word = word.split(" ");
//   var result = word[0];
//   for(var i = 1 ; i < word.length ; i++) {
//     if(result.length < word[i].length) {
//     result = word[i];
//     } 
//   }
//   return document.write(result);
// }
// longestWord('Web Development Tutorial');

// // task 13
// function check(string, letter) {
//     var lett = letter;
//     string = string.toLowerCase();
//     letter = string.match(/s/g).length;
//     document.write("There are " + letter + " occurence(s) of word " + '"' + lett + '"');
// }
// check("JSResourceS.com", "s")

// // task 14
// document.write("<h1>The Geometrizer</h1> <br>")
// function calcCircumference(radius) {
//     var circumference = 2 * 3.142 * radius
//     document.write("The circumference is " + circumference.toFixed(3) + "<br>");
//     function calcArea(radius) {
//         radius = radius * radius
//         var area = 3.142 * radius;
//         document.write("The area is " + area);
//     }
//     calcArea(20);
// }
// calcCircumference(20);