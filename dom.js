const heading=document.getElementById('hello')
//const heading2=document.getElementsByTagName('h2')[0]
//const heading2=document.getElementsByClassName('h2-class')[0]
//const heading2 =document.querySelector('.h2-class')
const heading2 =document.querySelector('#subhello')
console.dir(heading.textContent)
console.log(heading2)
//const heading3=heading2.nextElementSibling.textContent
const h2list=document.querySelectorAll('h2')
console.log(h2list)
const heading3=h2list[h2list.length-1]
console.log(heading3)
setTimeout(()=>{
    addStyleHeading(heading)
}, 1500)
setTimeout(()=>{
    addStyleHeading(heading3)
}, 2500)
function addStyleHeading(node){
    heading.textContent='я тебя люблю'
    heading.style.color ='red'
    heading.style.textAlign='center'
    heading.style.backgroundColor='black'
    heading.style.padding="2rem"
}