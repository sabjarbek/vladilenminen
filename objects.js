const person ={
name:'Sanjar',
age:undefined,
isProgrammer: true,
'complex key': 'Complex Value',
['key'+(1+4)]: 'Computed Key',
lang:['ru','en','de'],
greet(){
    console.log('greet from person')
},
/*info(){
    console.log('My name is', person.name)
}*/
info(){
    console.log('My name is', this.name)
}
}

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
const logger={

    keys(){
        console.log('Object Keys: ', Object.keys(this))
    },
 /*   keyAndValue(){
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    }*/
    keyAndValue(){
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
}
//logger.key(person)
//const bound =logger.key.bind(person)
//bound()
//logger.key.call(person)
//logger.keyAndValue.call(person)
logger.withParams.call(person,true,true,true)
logger.withParams.apply(person,[true,true,true])