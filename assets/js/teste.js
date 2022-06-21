let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
    document.addEventListener("click",count++,CURRENT_NUMBER.innerHTML=count);
	/*count++;
	CURRENT_NUMBER.innerHTML = count;*/
}

function decrement() {
    document.addEventListener("click",count--,CURRENT_NUMBER.innerHTML=count);
	/*count--;
	CURRENT_NUMBER.innerHTML = count;*/
}

if (count < 0) {
    document.getElementById('currentNumber').style.backgroundColor = 'red';
}
function test() {
	kdowkdpo;
}
