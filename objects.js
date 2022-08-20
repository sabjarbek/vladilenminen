/*const person ={
name:'Sanjar',
age:undefined,
isProgrammer: true,
'complex key': 'Complex Value',
['key'+(1+4)]: 'Computed Key',
lang:['ru','en','de'],
greet(){
    console.log('greet from person')
},
info(){
    console.log('My name is', person.name)
}
info(){
    console.log('My name is', this.name)
}
}
*/
//console.log(person.name)
//console.log(person['age'])
//const ageKey='age'
//console.log(person[ageKey])
//console.log(person['complex key'])
//person.greet()
//person.age++
//person.lang.push['by']
//console.log(person['age'])
//console.log(person)
//delete person['key_4'] // удаленин элементы объекта
//const name=person.name
//const age=person.age
//const lang=person.lang[1]
//console.log(name,age, lang)
//const {name,age,lang} = person
//console.log(name,age,lang)
//const {name, age:personAge = 10, lang}=person
//console.log(name, personAge, lang)
//for(key in person){
//    if(person.hasOwnProperty(key))
//    console.log(key,':', person[key])
 //   
//}
/*const keys = Object.keys(person)
keys.forEach((key)=>{
console.log('key:',key)
console.log('value:',person[key])
})*/
/*
Object.keys(person).forEach((key)=>{
    console.log('key:', key)
    console.log('value:',person[key])
}
*/
//Context
//person.info()
/*const logger={

    keys(){
        console.log('Object Keys: ', Object.keys(this))
    },
 /*   keyAndValue(){
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    }*/
 /*   keyAndValue(){
        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },
    withParams(top=false,middle=false,bottom=false){
        if(top){
            console.log('-----------start---------')
        }
        Object.keys(this).forEach((key, index, array)=> {
            console.log(`"${key}": ${this[key]}`)
            if(middle&&index!==array.length-1){
                console.log('-------------')
            }
        })
        if(bottom){
            console.log('----------end----------')
        }
    }
}*/
//logger.key(person)
//const bound =logger.key.bind(person)
//bound()
//logger.key.call(person)
//logger.keyAndValue.call(person)
//logger.withParams.call(person,true,true,true)
//logger.withParams.apply(person,[true,true,true])
 /*var cat ={name:"Athena"};
 function swap(feline){
feline.name="Wild";
feline={name:"Tabby"};
 }
 swap(cat)
 console.log(cat.name)*/
 /*let animals =["jaguar","eagle"]
 animals.reverse()
 console.log(animals.pop())*/
 /*class RainForest{
    static minimumRainFall = 60;
 }
 let congo = new RainForest();
 RainForest.minimumRainFall=80;
console.log(congo.minimumRainFall)*/
/*let RainForest =10
let animals =0
while(RainForest<13||animals<=3){
    RainForest++
    animals+=2;

}
console.log(animals)*/
/*let RainForest =["amazon","Barneo","Cerrado","Congo"]
RainForest.splice(0,2)
console.log(RainForest)*/
/*const foo ={
    bar(){
        console.log("hello,World")
    },
    name:"Albert",
    age:26,
}
bar()*/
/*
document.querySelectorAll("div").forEach(e=>{
    e.onclick=e=>console.log(e.currentTarget.id)
})*/
/*const a={x:1};
const b={x:1};
console.log(a.x===b.x)
console.log(a===b)
console.log(a[x]===b[x])
console.log(a!=b)*/
/*let animals=["eagle","osprey","salmon"]
let key = animal=>animal==="salomon"
if(animals.some(key).length===1){
    console.log(swim)
}
//litera and his characters
let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    "likes birds": true
};
alert(user.age);
alert(user.name);
// in object constanta may to change

const user = {
  name: "John",
};
user.name = "Pete"; //
alert(user.name)

// Square brackets
let user = {};

// assigning a value to a property
user["likes birds"] = true;

// get property value
alert(user["likes birds"]);

// delete property
delete user["likes birds"];

let user = {
    name: "John",
    age: 30
};

let key = prompt("what is your name", "name");

alert( user[key] );

let fruit = prompt("which fruit are you buying", "apple");

let bag = {
    [fruit]: 5,
};
 alert( bag.apple );

let fruit = 'apple';
let bag = {
    [fruit + 'computers']: 5
};

alert( bag.applecomputers);

function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
}
let user = makeUser( "John", 30);
alert(user.name);

//Property Existence Check, "in" Operator
 let user = {name: "John", age: 30}

 alert( "age" in user );

 let user = { age: 30 };
 let key =  "age";
 alert( key in user ); // // true, имя свойства было взято из переменной key

  let obj = {
    test: undefined
  };
  alert( obj.test ); //  выведет undefined, значит свойство не существует?
  alert( "test" in obj ); // true, свойство существует!
   
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user){
    alert( key)
    alert( user[key])
}
/// как число
 let codes = {
    "49": "Germany",
    "41": "Swiss",
    "44": "Uk",
    "1": "USA"
 };
 for(let code in codes){
    alert(code);
 }
//как строка
 let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
  };
  
  for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
  }

 //task1 
 let user = {
    name: "John",
    surname: "Smith",    
 };
 alert(user.name);   
 user.name = "Pete";
 alert(user.name);
 delete user.name;
 alert(user.name);

let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"]= "get up";
alert( isEmpty(schedule) );
function isEmpty(obj){
    for(let key in obj){
        return false
    }
 return false
}    
const user = {
    name: "John"
};
user.name="Pete"; 
 
 // task 2
 let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
 };
 let sum = 0;
 for( let key in salaries){
    sum = sum + salaries[key]; 
    
    };
alert(sum)
   
 // task 3
 let menu = {
width: 200,
height: 300,
title: "my menu"

 }
 function multiplyNumeric(obj){
    for( let key in obj){
        if(typeof obj[key]== 'number'){
            obj[key]*=2  
            alert(obj[key])           
        }      
    }
 }
 multiplyNumeric(menu)
 
 // Копирование объектов 
 let user = { name:'john'};
 let admin = user;
 admin.name = 'tom'

 alert( user.name );
 let user = {
    name: "Ivan",
    age: 30
 };

 let clone = {}; //new empty object

 // we copy property from object  user

 for ( let key in user ){
    clone[key] = user[key]
 }
 clone.name = "Paul";

 alert( user.name )
 alert( clone.name )
 
 alert( user.age )
 alert( clone.age )

let user = { name: "Ivan" };

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

Object.assign(user, permissions1, permissions2);

let user = { name: "Ivan" };

Object.assign( user, { name:"Paul" });

alert(user.name);

let user = {
    name: "ivan",
    age: 30
};

let clone = Object.assign({}, user);
 alert(clone.name)

let user = {
    name: "Ivan",
    sizes: {
        height: 182,
        width: 50
    }
}
alert( user.sizes.height ) 

let user = {
    name: "Ivan",
    sizes: {
        height: 182,
        width: 50
    }
};
let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes);

user.sizes.width++;
alert(clone.sizes.width)*/
/*
let user = {
    name: "John",
    age: 30
};*/
//user.sayHi = function(){
//    alert("hi!")
//};

//user.sayHi();
/*user ={
    sayHi: function(){
        alert("Hi!");
    }
};

user.sayHi()
//Сокращённая запись метода
user = {
    sayHi(){
        alert("Hi");
    }
};
sayHi();
let user = {
    name: "John",
    age: 30,

    sayHi(){
        console.log(this.age)
    }
};
user.sayHi()

let user = {
    name: "John",
    age: 30,
    
    sauHi(){
        alert( user.name);
    }
};

let admin = user;

user = null;

admin.sayHi();

let user = { name: "John" };
let admin = { name: "Admin"};

function sayHi(){
    alert( this.name);
}
user.f = sayHi;
admin.f = sayHi;
user.f();

//Внутренняя реализация: Ссылочный тип

let user = {
    name: "John",
    hi() { alert(this.name); },
    bye() { alert("Bye"); }
};

user.bye()
admin.f();

let user = {
    name: "John",
    hi() { alert(this.name); }
};
let hi = user.hi;
hi();

//У стрелочных функций нет «this»
let user = {
    fitrstName: "Ilya",
    sayHi(){
        let arrow = () => alert( this.fitrstName);
        arrow();
    }
};

user.sayHi();

let user = {
    name: "John",
    go: function() { alert(this.name)}
};
user.go()

// вызов метода
function makeUser() {   
    return {
        name: "John",
        ref(){
            return this;
        }

    };
};

 let user = makeUser();
 alert (user.ref().name)

// the task is to create calculator
let calculator ={
   
    sum(){ 
        return this.a+this.b 
    },
    mul(){
        return this.a*this.b
     },
    read() {
        this.a=+prompt("a?",0);
        this.b= +prompt("b?",0)
    },
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Функция- конструктор
function User (name){
    this.name = name;
    this.isAdmin = false;
}
let user = new User("John");

alert(user.name);
alert(user.isAdmin);
//Проверка на вызов в режиме конструктора: new.target

 function User() {
    alert(new.target);
 }
 User(); // undefined
 new User(); // function User{}
  
function User(name){
    if(!new.target){
        return new User(name)
    }
    this.name = name;
}
let john = User("John");

alert(vasya.name)

//Возврат значения из конструктора return

function BigUser(){
    this.name = "Ivan";

    return { name: "Godzilla"}

}
alert( new BigUser().name)
function SmallUser() {
    
    this.name = "Ivan";
    return;
}
alert( new SmallUser().name );

//Создание методов в конструкторе
function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "My name is " + this.name);
    };
    }
let vasya = new User("Vasya");

vasya.sayHi()

 let obj = {};

 function A() { return obj;}
 function B() { return obj;}
 alert( new A() == new B());
 
function Calculator(){
 this.read = function(){
    this.a=+prompt("a?",0)
    this.b=+prompt("b?",0)
};

this.sum = function(){
    return this.a+this.b
};

this.mul= function(){
    return this.a*this.b
}
}
let calculator = new Calculator();
 
calculator.read()

alert( "sum=" + calculator.sum() );
alert( "Mul="+ calculator.mul() )

function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('how much do need add?', 0)
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);

// Опциональная цепочка '?.'

let user = {};

alert(user,adsress ? user.address.street : undefined);

let html  = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null

//Опциональная цепочка 

let user = {};

alert( user?.address?.street )

let html = document.querySelector('.elem')?.innerHTML

let user = null;

alert( user?.address )

alert( user?.address.street )

let userAdmin = {
    admin() {
        alert("i am  john")
    }
};

userAdmin.admin?.();

userGuest.admin?.(); 
*/
let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null

alert( user1?.[key] ); 
alert( user2?.[key] );





