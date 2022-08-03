/*function hello(name){
    let phrase=`hello, ${name}!`;
    debugger;
    say(phrase);
}
function say(phrase){
alert(`** ${phrase}**`)
}
hello('Sanjar')*/
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
}