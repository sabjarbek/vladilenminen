//task 1
//alert("hello world")
//task 2
/*
let admin;
let name;
name = "John";
admin=name;
console.log(admin)
*/
//task3
/*
let name = "Elon";
alert(`hello ${1}`);
alert(`hello ${"name"}`);
alert(`hello ${name}`);
*/
//task 3
/*
let question = prompt('what is your name',"maybe John")
alert(`Your name is ${question}`)
*/
//task4
/*
let value = true;
value=String(value);
console.log(typeof value);
let str="123";
str=Number(str)
console.log(typeof str)
alert(Boolean(1));
alert(Boolean(0));
*/
//task5
/*
let a=2,b=1;
let c= ++a;
console.log(c);
let d=b++;
let a=2;
let x=1+(a*=2);
console.log(x)
console.log(a)
let a= Number(prompt("first number"),1);
let b= Number(prompt("Second number"),1);
alert(a+b);
*/
//task 6
/*
if("0"){
    alert('Привет')
}
let name=prompt("what is the official Javascript?")
if(name=="ECMAScript"){
    alert("Верно")
}
else{
    alert("Не знаете? “ECMAScript”!")
}
let a=prompt("enter any number")
if(a>0){
    alert(1)
}
else if(a<0){
    alert(-1)
}
else{
    alert(0)
}
let a=41,b=2;
let result = (a+b<4)? "more":"less";
console.log(result)

let login=prompt("Who is who");
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

 if(1||0){
    console.log("truthly")
 }
let hour =11;
if (hour<10||hour>18){
    console.log("office is closed")
}
else{
    console.log("office is open")
}  
let result = (null||2||undefined);
console.log(result);

alert(alert(1)||2||alert(3))
alert(alert(1)&&alert(2))
alert(null || 2 && 3||4)
let age=1;
if(age>=14 && age<=90){
    console.log("Resut: "+age)
}
else{
    console.log("fuck up")
}*/
/*let age=5
if(age<14||age>90){
    console.log("Code is working")
}
else{
    console.log("fuck up")
}
if(!(age>14&&age<90)){
    console.log("Code is working")
}
else{
    console.log("fuck up")
}
let admin, password;
admin=prompt("enter username")
password=prompt("enter password")
if(admin=="Админ"){
alert("enter password")
}
else if(admin!="Админ"){
alert("name is wrong ")
}
else{
    alert("cancel")
}
if(admin=="Админ"&&password=="Я главный"){
alert("Здравствуйте")
}
else if(password!="Я главный"){
alert("password is wrong")
}
else{
alert("cancel")
}*/
/*#######################*/
/*#######################*/
/*###### Important Code ########*/
/*#######################*/
/*#######################*/
/*
let Username = prompt("Who it is", "");
if(Username==='Admin'){
    let pass = prompt('Enter pass','');
    if (pass==="Я главный"){
        alert("hello")
    }
    else if(pass===''||pass===null){
        alert("cancel")
    }
    else(
        alert("pass is wrong")
    )
}
else if (Username===''||Username===null){
alert("cancel")
}
else{
    alert("i don't know")
}
############################
############################
############################
let i=3;
while(i){
    alert(i--);
}

let i=0;
while(++i<5) alert(i);
let m=0;
while(m++<5)alert(m)

for (let i =0; i<5; ++i) alert(i);
for (let m =0; m<5; m++) alert(m);

for(let a=1; a<6; ++a){
    alert(a*2)
}
/*####*/
/*for(let i=2;i<=10;i++){
    if(i%2==0){
        alert(i)
    }
}
let i=0;
while(i<3){
    
    alert(`number ${i}!`);
    i++
}
let num;
do{
    num=prompt("enter number more then 100",0)
}
while(num<=100&&num)

let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}
let browser="Chrome";
if(browser=="Edge"){
alert("You've got the Edge")
}
else if(browser=="Chrome"||browser=="Firefox"||browser=="Safari"||browser=="Opera"){
alert("Okay we support these browsers too")
}
else{
    alert("We hope that this page looks ok!")
}
let number=prompt("enter any number",'0')
switch(number){
    case '0':
        alert("Вы ввели число 0");
        break;
    case '1':
        alert("Вы ввели число 1");
        break;
    case '2':
    case '3':
        alert("Вы ввели число 2, а может и 3");
        break;    

}
let age=prompt("enter your age");
function checkAge(age){
return (age>18)? true: confirm('are parents allow');
}
function checkAges(age){
return (age>18)|| confirm('are parents allow');
}
function min(a,b){
if(a<b){
    return alert(a)
}
else{
    return alert(b)
}
}
min(1,1)
function mini(c,d){
return c<d?alert(c):alert(d)
}
mini(1,-3) 
function pow(p,n){
return alert(Math.pow(p,n))
}
pow(5,3)
function pow(x,n){
    let result=x
    for(let i=1;i<n;i++){
        result*=x
    }
    return result
} 
let x = prompt("x?",'')
let n = prompt("n?",'')
if(n<1){
    alert(`Степень ${n} не поддерживается, исрользуйте натуральное число`)
}
else{
    alert(pow(x,n))
}
############################
############################
Функции-«колбэки»
############################
############################

function ask(question,yes,no){
    if(confirm(question)) yes()
    else no()
}
function showOk(){
    alert("you agree");
}
function  showCancel(){
    alert("you cancel")
}
ask("are you agree", showOk,s)

//with function experssion
function ask(question, yes, no){
 if(confirm(question)) yes()
 else no();
}
ask(
    "are you agree?",
    function(){alert("you agree.");},
    function(){alert("you cancel")}
);

// function declaration
sayhi("John");
function sayhi(name){
    alert(`hi, ${name}`)
}

sayHi("John");
let sayHi = function(name){
    alert(`hi ${name}`);// магии больше нет
}
// правильный тип работы  ф-ции экспрессцион

let age =prompt("how old are you?", 18)
let welcome = (age<18)?
function(){alert('Hi!');}:
function(){alert('Good morning')}
welcome(); 

let sum=(a,b)=> a+b;
alert(sum(5,6));
///////// if you have one argument so arrow function looks like this
let double=n=>n*2;
alert(double(26));
///////// if you have not argument so arrow function looks like this
let sayHi=()=>("Hello");
alert(sayHi());
 let age =prompt("How old are you?",18);
 let welcome=(age<18)?
 ()=>alert("hi"):
 ()=>alert("good morning")
 welcome();
 
let sum=(a,b)=>{
let result=a+b;
return result;
}
alert(sum(9,6));
*/
function ask (question,yes,no){
    if(confirm(question))yes()
    else no();
}
ask(
    "are you agree?",
    ()=>alert("you agreed"),
    ()=>alert("you cancel")
);