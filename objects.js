const person ={
name:'Sanjar',
age:27,
isProgrammer: true,
'complex key': 'Complex Value',
['key'+(1+4)]: 'Computed Key',
lang:['ru','en','de'],
greet(){
    console.log('greet from person')
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
console.log(person)
delete person['key_4']
