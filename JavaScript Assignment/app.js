// Chapter 1 Alerts

// 1
alert("Welcome to my website.");
// 2
alert("Error!PLease enter a valid password.");
// 3
alert("Welcome to JS Land \n Happy Coding!");
// 4
alert("Welcome to JS Land");
alert("Happy Coding!");

// Chapter 2 Variables

// 1
var username;
// 2
var myname="Waseem Munir";
// 3
var message;
message="Hello World"
alert(message)
// 4
var myname="Waseem Munir"
var age=22;
var course="Certified Mobile Aplication Development"
// 5
alert("PIZZA \n PIZZ \n PIZ \n PI \n P")
// 6
var email="waseem6409@gmail.com";
alert("My email address is "+email);
// 7
var book="A smarter way to learn JavaScript"
alert( "I am trying to learn form book "+book)
// 8
document.write("Yah!!i can write HTML contect through JS")
// 9
var pattern="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(pattern);

// Chapter 3 Variables for numbers

// 1
var age=22;
alert("My age is "+ age);
// 2
alert("You visted the page 10 times");
// 3
var birthYear=1998;
document.write("my birth year is "+birthYear);
document.write("Data type of my declared variable is number")
// 4
var   vistitor_name= "John Doe";
var Product_title=" T-shirt(s) " ;
var Quantity= 5; 
document.write(vistitor_name+" ordered " +Quantity + Product_title +" from XYZ store");

// Chapter 4 Variables Name Legal and Illegal

// 1
var a,b,c=5;
// 2
var name;     var 123name;
var _name;    var -name;
var Name;     var @name;
var name123;  var %name;
var $name;    var *name;
// 3
document.write("<h1>Rules for naming JS variables</h1>")
document.write("\n\n\n\n\n Variable names can only contain numbers,$ and _.For Example:$my_1stVariable")
document.write("Variables must begin with a letter $ or _.For Example:$name,_name or name")
document.write("Variable names are case sensitive")
document.write("Variable name should not be JS keywords")

// Chapter 5 Math Expressions

// 1
var a=2;b=3;
var c=a+b;
document.write("the sum of "+a+" and "+b+ " is " +  c );
// 2
var  d=(a-b);
document.write("<br> the sub of "+a+" and "+b + "is" +  d);
var e=(a/b);
document.write(" <br> the division of "+a+" and "+b + "is" +  e);
var f=(a%b);
document.write(" <br>the modulus of "+a+" and "+b + "is" +  f);
// 3
document.write("<br>************************** new task*************");
var  intial_value=5;
document.write("<br>intial value is "+intial_value);
intial_value++;
document.write("<br>intial value after ++ "+intial_value);
intial_value=intial_value+7;
document.write("<br>intial value after add 7 is:"+intial_value);
intial_value--;
document.write("<br>intial value after decreament"+intial_value);
intial_value=intial_value/3;
document.write("<br>intial value after divide by 3:"+intial_value);
document.write("The remainder is: "+intial_value)
// 4
var ticketPrice=600;
document.write("The cost to buy 5 ticket a movie is "+(ticketPrice*5)+"PKR")
// 5
var a=prompt("enter a number"+a);
document.write("<br>let print the table of number you enter:"+a);
document.write("<br>"+a+ "*" +"1" +"="+(a*1));
document.write("<br>"+a+ "*" +"2" +"="+(a*2));
document.write("<br>"+a+ "*" +"3" +"="+(a*3));
document.write("<br>"+a+ "*" +"4" +"="+(a*4));
document.write("<br>"+a+ "*" +"5" +"="+(a*5));
document.write("<br>"+a+ "*" +"6" +"="+(a*6));
document.write("<br>"+a+ "*" +"7" +"="+(a*7));
document.write("<br>"+a+ "*" +"8" +"="+(a*8));
document.write("<br>"+a+ "*" +"9" +"="+(a*9));
document.write("<br>"+a+ "*" +"10" +"="+(a*10));
// 6
var c_temp=32;
f=(c_temp*(9/5)+32)
document.write(c_temp+"C is "+f+"F")
var f_temp=96;
c=(f_temp-32*(9/5))
document.write(f_temp+"F is "+c+"C")
// 7
var a=500
var b=110
var c=3
var d=5
var e=30
document.write("<h1>Shopping Cart</h1>")
document.write("<br/><br/><br/><br/><br/>")
document.write("Price of item 1 is"+a)
document.write("Quantity of item 1 is"+c)
document.write("Price of item 2 is"+b)
document.write("Quantity of item 1 is"+d)
document.write("The shipping charges is"+e)
document.write("Total cost of your order is"+((a*c)+(b*d)+e))
// 8
var totalMarks=980;
var obatinedMarks=804;
document.write("<h1>Marksheet</h1>")
document.write("<br/><br/><br/><br/><br/>")
document.write("Total marks: "+totalMarks)
document.write("Marks obatined: "+obatinedMarks)
document.write("Percentage "+((obatinedMarks/totalMarks)*100))
// 9
var dollars=10;
var riyals=25;
document.write("<h1>Currency in PKR</h1>")
document.write("Total Currency in PKR:"+((104.80*dollars)+(riyals*28)))
// 10
var number=60
number=((number+5)*(10)/(2))
// 11
document.write("<h1>Age Calculator</h1>")
document.write("<br/><br/><br/><br/><br/>")
document.write("Current Year: 2020")
document.write("Birth Year: 1998")
document.write("Your age is: "+(2020-1998))
// 12
let radius = 20;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;
document.write("<br><br><h1>The Geometrizer</h1>");
document.write("<br>Radius of circle : ", radius);
document.write("<br>The circumference is : ", circumference);
document.write("<br>The area is : ", area);
// 13
let favSnack = "chocolate Chip";
let currentAge = 15;
let maxAge = 65;
let amountDay = 3;
document.write("<br><br><br><h1>The Lifetime Supply Calculator</h1>")
document.write("<br><br>Favourite Snack :", favSnack);
document.write("<br>Current Age : ", currentAge);
document.write("<br>Estimated Maximum Age : ", maxAge);
document.write("<br>Amount of snacks per day : ", amountDay);
document.write("<br><br>You will need ", (maxAge - currentAge) * amountDay, " to last you until the ripe old age of ", maxAge);

// Chapter 6-9 Math Expressions

// 1
let x = +prompt("Enter number");
document.write("Result :")
document.write("<br>The value of x is : ", x);
document.write("--------------------------------------------");
document.write("<br>The value of ++x is : ", ++x);
document.write("Now, The value of x is : ", x);
document.write("<br><br>The value of x++ is : ", x++);
document.write("Now, The value of x is : ", x);
document.write("<br><br>The value of --x is : ", --x);
document.write("Now, The value of x is : ", x);
document.write("<br><br>The value of x-- is : ", x--);
document.write("Now, The value of x is : ", x);
// 2
var a = 2, b = 1;
var result = --a;
document.write("<br>a is ", a);
document.write("<br>b is ", b);
result = --a - --b;
document.write("<br>a is ", a);
document.write("<br>b is ", b);
result = --a - --b + ++b;
document.write("<br>a is ", a);
document.write("<br>b is ", b);
result = --a - --b + ++b + b--;
document.write("<br>Result is ", result);
// 3
var num=this.prompt("Enter you name")
document.write("Welcome "+name)
// 4
var a=prompt("enter a number"+a);
if (a==="int"){
document.write("<br>let print the table of number you enter:"+a);
document.write("<br>"+a+ "*" +"1" +"="+(a*1));
document.write("<br>"+a+ "*" +"2" +"="+(a*2));
document.write("<br>"+a+ "*" +"3" +"="+(a*3));
document.write("<br>"+a+ "*" +"4" +"="+(a*4));
document.write("<br>"+a+ "*" +"5" +"="+(a*5));
document.write("<br>"+a+ "*" +"6" +"="+(a*6));
document.write("<br>"+a+ "*" +"7" +"="+(a*7));
document.write("<br>"+a+ "*" +"8" +"="+(a*8));
document.write("<br>"+a+ "*" +"9" +"="+(a*9));
document.write("<br>"+a+ "*" +"10" +"="+(a*10));
}
else{    
document.write("<br>" +"5"+ "*" +"1" +"="+(5*1));
document.write("<br>"+"5"+ "*" +"2" +"="+(5*2));
document.write("<br>"+"5"+ "*" +"3" +"="+(5*3));
document.write("<br>"+"5"+ "*" +"4" +"="+(5*4));
document.write("<br>"+"5"+ "*" +"5" +"="+(5*5));
document.write("<br>"+"5"+ "*" +"6" +"="+(5*6));
document.write("<br>"+"5"+ "*" +"7" +"="+(5*7));
document.write("<br>"+"5"+ "*" +"8" +"="+(5*8));
document.write("<br>"+"5"+ "*" +"9" +"="+(5*9));
document.write("<br>"+"5"+ "*" +"10" +"="+(5*10));
}
// 5
var sub1 = prompt("Enter subject");
var sub2 = prompt("Enter subject");
var sub3 = prompt("Enter subject");
let totalMark = 100;
let mark1 = +prompt("Enter marks");
let mark2 = +prompt("Enter marks");
let mark3 = +prompt("Enter marks");
document.write(
    " <table>\
    <tr>\
        <th>Subject</th>\
        <th>Total Marks</th>\
        <th>Obtained Marks</th>\
        <th>Percentage</th>\
    </tr>\
    <tr>\
        <td>,", sub1, ",</td>\
        <td>", totalMark, "</td>\
        <td>", mark1, "</td>\
        <td>", (mark1 * 100) / totalMark, "%</td>\
    </tr>\
    <tr>\
    <td>,", sub2, ",</td>\
    <td>", totalMark, "</td>\
    <td>", mark2, "</td>\
    <td>", (mark2 * 100) / totalMark, "%</td>\
    </tr>\
    <tr>\
    <td>,", sub3, ",</td>\
    <td>", totalMark, "</td>\
    <td>", mark3, "</td>\
    <td>", (mark3 * 100) / totalMark, "%</td>\
    </tr>\
    <tr>\
    <td></td>\
    <td>", totalMark * 3, "</td>\
    <td>", mark1 + mark2 + mark3, "</td>\
    <td>", (mark1 + mark2 + mark3) * 100 / (totalMark * 3), "%</td>\
    </tr>\
</table>"
);

// Chapter 9-10 User Input & Conditional Statement

// 1
var city = prompt("Enter city name :");
if (city=='Karachi'){
    document.write("Welcome to city of lights")
}
// 2
var gender = prompt("Male/Female ? ");
if (gender=='Male'){
    document.write(" Good Morning Sir");
}
else{
document.write("Good Morning Ma'am")
}
// 3
var signal_color = prompt("Enter signal color : ");
if (signal_color == 'Red'){
    document.write("Must Stop");
} 
else if (signal_color == 'Yellow'){
    document.write("Ready to move");
}
else{
    document.write("Move now");
}
// 4
var fuel = prompt("Enter remaining fuel in liters : ");
if (fuel == 0.25){
    document.write("Please refill the fuel in your car");
}

// 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
OUTPUT:  displayed

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
OUTPUT:  Not displayed

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
OUTPUT: Condition 2 and 4 displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
OUTPUT:  displayed

if (true){
    alert("True");
}
if (false){
    alert("False");
}
OUTPUT:  True displayed

if("car" < "cat"){
    alert("car is smaller than cat");
}
OUTPUT: displayed
// 6 
var grade , remarks ;
var sub1 = Number(prompt("Enter obtained marks of subject 1: "));
var sub2 = Number(prompt("Enter obtained marks of subject 2: "));
var sub3 = Number(prompt("Enter obtained marks of subject 3: "));
var total = Number(prompt("Enter total marks: "));
var per = (sub1 + sub2 + sub3) * 100 / total;

if (per >= 80){
    grade = 'A-one';
    remarks = 'Excellent';
}
else if (per >= 70){
    grade = 'A';
    remarks = 'Good';
}
else if (per >= 60){
    grade = 'B';
    remarks = "You need to improve";
}
else{
    grade = "Fail";
    remarks = 'Sorry';
}
document.write("<h1> Marks Sheet </h1><br>");
document.write("Total marks :",total);
document.write("<br>Marks Obtained : ", sub1+sub2+sub3);
document.write("<br>Percentage : ",per,"%");
document.write("<br>Grade : ",grade);
document.write("<br>Remarks : ",remarks);
// 7
var secret_num = 7;
var guessed_num = Number(prompt("Guess the number : "));
document.write("<h1> GUESSING GAME </h1>")
if (guessed_num == secret_num){
    document.write("<h3> Bingo! Correct answer</h3>");
} 
else if ((guessed_num+1) == secret_num){
    document.write("<h3> Close enough to the correct answer </h3>");
} 
// 8
var num = Number(prompt("Enter the number to check whether the given number is divisible by 3 or not : "));
if (num % 3 == 0){
    document.write(num ," is divisible by 3");
}
else{
    document.write(num ," is not divisible by 3");
}
// 9
var num = Number(prompt("Enter the number : "));
if (num % 2 == 0){
    document.write(num ," is <b>Even</b> ");
}
else{
    document.write(num ," is <b>Odd</b> ");
}
// 10
var T = Number(prompt("Enter temperature : "));
if (T > 40){
    document.write("It is too hot outside.");
}
else if (T > 30){
    document.write("The Weather today is Normal.");
}
else if (T > 20){
    document.write("Today’s Weather is cool.");
}
else if (T > 10){
    document.write("OMG! Today’s Weather is cool.");
}
// 11
var num1 = Number(prompt("Enter first number : "));
var num2 = Number(prompt("Enter Second number : "));
var op = prompt("Enter operator (+, -, *, /, %) : ");
if (op == '+'){
     document.write("The answer after Addition is : ",num1+num2);
}
else if (op == '-'){
    document.write("The answer after Subtraction is : ",num1-num2);
}
else if (op == '*'){
    document.write("The answer after Multiplication is : ",num1*num2); 
}
else if (op == '/'){
    document.write("The answer after Division is : ",num2/num1);
}
else if (op == '%'){
    document.write("The answer after Modulo is : ",num2%num1);
}
else{
document.write("Invalid operator");
}

//Chapter 12-13 If…Else & Else If Statement, Testing Set Of Conditions

// 2
var num_1 = +prompt("enter 1st num")
var num_2 = +prompt("enter 2nd num")
if (num_2 > num_1){
    document.write(num_2 + " is greater")
}
else {
    document.write(num_1 + " is greater")
}
// 3
var num_1 = +prompt("enter 1st num")
if (num_1 > 0){
    document.write(num_1 + " is positive")
}
else if (num_1 < 0){
    document.write(num_1 + " is negative")
}
else if (num_1 == 0){
    document.write(num_1 + " is zero")
}
//4
var chara =  prompt("enter a character")
if (chara === "a" || chara === "e" || chara === "i"|| chara === "o"|| chara === "u"){
    document.write(" Vowel")
}
else {
    document.write(" Not vowel")
}
//5
var password = "abcd1234"
var userPass = prompt("Enter password")
if (userPass === ""){
    document.write("please enter password")
}
else if(userPass === password) {
    document.write("correct")
}
else{
    document.write("invalid")
}
//6
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}
 else {
     greeting = "Good evening";
     }
//7
var time = +prompt("enter time")
if (time === 0000){
    document.write("12am")
}
else if (time === 0100){
    document.write("1am")
}
else if (time === 0200){
    document.write("2am")
}
else if (time === 0300){
    document.write("3am")
}
else if (time === 0400){
    document.write("4am")
}
else if (time === 0500){
    document.write("5am")
}
else if (time === 0600){
    document.write("6am")
}
else if (time === 0700){
    document.write("7am")
}
else if (time === 0800){
    document.write("8am")
}
else if (time === 0900){
    document.write("9am")
}
else if (time === 1000){
    document.write("10am")
}
else if (time === 1100){
    document.write("11am")
}
else if (time === 1200){
    document.write("12pm")
}
else if (time === 1300){
    document.write("1pm")
}
else if (time === 1400){
    document.write("2pm")
}
else if (time === 1500){
    document.write("3pm")
}
else if (time === 1600){
    document.write("4pm")
}
else if (time === 1700){
    document.write("5pm")
}
else if (time === 1800){
    document.write("6pm")
}
else if (time === 1900){
    document.write("7pm")
}
else if (time === 2000){
    document.write("8pm")
}
else if (time === 2100){
    document.write("9pm")
}
else if (time === 2200){
    document.write("10pm")
}
else if (time === 2300){
    document.write("11pm")
}
else if (time === 2400){
    document.write("12am")
}

// ASSIGNMENT 14-16 Arrays

// 1
var std_names = []
// 2
var std_names = new Array();
// 3
var str_arr = ["a","b","c"];
// 4
var num_arr = [1,2,3,4];
// 5
var bool_arr = [true,false,false,true];
// 6
var mix_arr = ["a" , 1 , true];
// 7
var qual = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PHD"];
var series = 1
document.write("<h2> Qualifications </h2>");
for(i = 0 ; i<qual.length ; i++){
    document.write(series,") ",qual[i],"<br>");
    series++;
}
// 8
var names = ["Mahnoor" , "Subhan" , "Rafay"];
var scores = [320 , 230 , 480] , per;
for(i = 0 ; i<scores.length ; i++){
    per = scores[i]/500*100;
    document.write("Score of ",names[i]," is ",scores[i],".Percentage: ",per,"%<br>");
}
// 9
var colors = ["Yellow" , "Black" , "Red" , "Blue"] , series = 1;
for(i = 0 ; i<colors.length ; i++){
    document.write(series ,".  " , colors[i],"<br>");
    series++
}
var inp = prompt("Enter the color you want to add in the beginning : ");
colors.unshift(inp);
document.write("The updated array of colors : ",colors);
var inp = prompt("Enter the color you want to add in the end : ");
colors.push(inp);
document.write("<br>The updated array of colors : ",colors);
colors.unshift("White" , "Orange");
document.write("<br>The updated array of colors : ",colors);
colors.shift();
document.write("<br>The updated array of colors : ",colors);
colors.pop();
document.write("<br>The updated array of colors : ",colors);
var ind = Number(prompt("At which index you want to add color : "));
var name = prompt("Color Name : ");
colors.splice(ind , 0 , name);
document.write("<br>The updated array of colors : ",colors);
var del_ind = Number(prompt("At which index you want to delete color(s) : "));
var count = Number(prompt("How many colors you want to delete ? "));
colors.splice(del_ind , count);
document.write("<br>The updated array of colors : ",colors);
// 10
var score = [320,230,480,120];
var sorted = score.sort();
document.write("Scores of Students : ",score);
document.write("<br>");
document.write("Ordered Scores of Students : ",sorted);
// 11
var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
var selected_cities = [];
selected_cities.splice(0,0,cities[2],cities[3]);
document.write("<h4> Cities List: </h4>");
document.write(cities);
document.write(" <h4> Selected Cities List: </h4>");
document.write(selected_cities);
// 12
var arr = ["This", "is", "my", "cat"];
document.write("Array :<br>",arr);
document.write("<br><br> String : <br>",arr.join(" ")); 
// 13
var arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
document.write("Devices: <br>",arr);
for(i=0 ; i<arr.length ; i++){
    document.write("<br><br> Out: <br>",arr[i]);
}

// 14
var arr = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
document.write("Devices: <br>",arr);
for(i=arr.length-1 ; i>=0 ; i--){
    document.write("<br><br> Out: <br>",arr[i]);
}
// 15
var manufacturers = ["Apple", "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
document.write("<select name='devices' size='1'> <option value='apple'>", manufacturers[0] ,"</option>")
document.write("<option value='samsung'>", manufacturers[1] ,"</option>");
document.write("<option value='moto' selected>", manufacturers[2] ,"</option>");
document.write("<option value='nokia'>", manufacturers[3] ," </option>");
document.write("<option value='sony'>", manufacturers[4] ," </option>");
document.write("<option value='haier'>", manufacturers[5] ," </option> </select>");

// Chapter 17-20 Array and Lopps

// 1
var mul_arr = [[]];
// 2
var mul_arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// 3
for (i=1;i<=10;i++){
    document.write(i,"<br>");
}
// 4
var num = Number(prompt("Enter a number : "));
var len = Number(prompt("Enter length of a table : "));
document.write("Multiplication of table of ",num);
document.write("<br>Length ",len,"<br><br>");
for (i=1 ; i<=len ; i++){
    var ans = num*i;
    document.write(num," * ",i," = ",ans);
    document.write("<br>");
}
// 5
var fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"];
for (i=0 ; i<fruits.length ; i++){
    document.write(fruits[i],"<br>");
}
document.write("<br>");

for (i=0 ; i<fruits.length ; i++){
    document.write("Element at index ",i," is ",fruits[i],"<br>");
}
// 6
document.write("<b> Counting: </b><br><br>")
for (i=1 ; i<=15 ; i++){
    document.write(i,",");
}
document.write("<br><br><b> Reverse Counting: </b><br><br>")
for (i=10 ; i>0 ; i--){
    document.write(i,",");
}
document.write("<br><br><b> Even: </b><br><br>")
for (i=0 ; i<21 ; i++){
    if (i % 2 == 0)
    document.write(i,",");
}

document.write("<br><br><b> Odd: </b><br><br>")
for (i=0 ; i<21 ; i++){
    if (i % 2 != 0)
    document.write(i,",");
}

document.write("<br><br><b> Series: </b><br><br>")
for (i=2 ; i<21 ; i++){
    if (i % 2 == 0)
    document.write(i,"k,");
}
// 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am ?");
var bool = A.includes(order);
var ind = A.indexOf(order); 
if (bool == true){
    document.write(order," is <b>available</b> at index ", ind ," in our bakery");
}
else{
    document.write("We are sorry.",order," is <b>not available</b> in our bakery");
}
// 8
var A = [24, 53, 78, 91, 12];
var max = A[0] ;
for (i=0 ; i<A.length ; i++){
    if (max < A[i]){
        max = A[i];
    }
}
document.write("Arrays Items : ",A);
document.write("<br>The Largest Number is ",max);
// 9
var A = [24, 53, 78 , 91, 12];
var min = A[0];
for (i=1 ; i<A.length ; i++){
   if (min > A[i]){
      min = A[i];
   }
}
document.write("Arrays Items : ",A);
document.write("<br>The Smallest Number is ",min);

// 10
let num = 5;
for (i=1 ; i<=20 ; i++){
    document.write(num*i,",");
}