//Написать упрощенную игру "Морской бой".
const randomLoc = Math.floor(Math.random() * 5);
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;
let guess;
let guesses = 0;
let hits = 0;
document.querySelector('.button').onclick = myFunc;
function myFunc() {
	guess = prompt('Ready, aim, fire! (enter a number 0-6)');
	if (guess < 0 || guess > 6) {
		alert('Enter a valid number');
	}
	else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert('HIT!');
			hits = hits + 1;
		}
		else {
			alert('MISS');
		}
	}
	document.querySelector('.score').innerHTML = guesses;
	if (hits == 1) {
		document.querySelector('#one').style.color = 'red';
	}
	else if (hits == 2) {
		document.querySelector('#two').style.color = 'red';
	}
	else if (hits == 3) {
		document.querySelector('#three').style.color = 'red';
		alert('You sank my battleship');
		const stat = 'You took ' + guesses + ' guesses to sink the battleship, which means your shooting accuransy was ' + (3 / guesses);
		document.querySelector('.status').innerHTML = stat;
		setTimeout(function () {
			location.reload();
		}, 5000);
	}
}
