document.querySelector('button').onclick = func;
function func (){
let k = document.querySelector('.k').value;
let t = document.querySelector('.t').value;
let w = (t*t + 3 * k * Math.cos(t-2))/(2+Math.sqrt(1+k * t))-(Math.abs(k-t));
let out = document.querySelector('.out');
out.innerHTML = `Відповідь: ${w}`;
}
