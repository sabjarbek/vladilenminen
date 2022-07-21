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
}*/