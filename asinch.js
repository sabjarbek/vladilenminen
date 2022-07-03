// Event loop
/*const timeout=setTimeout(() => {
    console.log('hi')
}, 2500);
clearTimeout(timeout)
const interval=setInterval(()=>{
console.log('hi, andy')
}, 1000)*/
/*const delay =(callback, wait=1000)=>{
    setTimeout(callback,wait)
}
delay(()=>{
console.log("tobi pisda")

},2000)*/
const delay =(wait=1000)=>{
    const promise = new Promise((resolve)=>{
        setTimeout(() => {
            resolve
        }, wait);
    })
    return promise
}
delay(2500)
.then(()=>{
    console.log('after 2 seconds')
})
.catch(err=>console.error(err))
.finally(()=>console.log('finally'))