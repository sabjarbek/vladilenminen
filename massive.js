const car =['opel', 'bmw', 'skoda', 'mazda'] // объявление массива
const fib=[1,2,3,4,5,6,7]
const people = [
    {name:'sanjar', budget:2000},
    {name:'sardor', budget:1000},
    {name:'umar', budget:500}
]
//const fib = [1, 1, 2, 3, 5, 8, 13]// add number in array
 
//car.push('peugeot')//add new member to finish of massive
//car.unshift('vaz')//add new member to start of massive
//const firstItem = car.shift()//delete  member to start of massive
//const lastCar = car.pop()//delete  member to finish of massive
//console.log(firstItem)
//console.log(lastCar)
//console.log(car.reverse())// reversr the massive
//const text ='Hello world'
//const revereText = text.split(' ').reverse().join()
//console.log(revereText)

// find in the massive
//const index=car.indexOf('skoda')
//console.log(index)
//const index =people.findIndex(function (person){
//return person.budget===500
//})
//console.log(people[index])
//let personFind
//for (const person of people){    
//    if(person.budget===500){
//        personFind=person
//    }
//}
//console.log(personFind)
//const person = people.find(person=>person.budget===500)
//console.log(person)
//console.log(car.includes('mazda'))
//const upperCaseCars=car.map(cars=>{
//    return cars.toUpperCase()
//})
//const powMember=fib.map(fibs=>fibs ** 2)
//console.log(upperCaseCars)
//console.log(powMember)
//const pow2=fib=>fib ** 2
//const pow2Fib=fib.map(pow2)
//const filterfib=pow2Fib.filter(fib=>fib>20)
//console.log(filterfib)
//const allBudget=people.reduce((acc,person)=>{    
//    if(person.budget>999){
//    acc+=person.budget}
//    return acc
//},0)
//console.log(allBudget)
const allBudget =people.filter(person=>person.budget>499).reduce((acc,person)=>{
    acc+=person.budget
    return acc
}, 0)
console.log(allBudget)