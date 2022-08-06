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
  */