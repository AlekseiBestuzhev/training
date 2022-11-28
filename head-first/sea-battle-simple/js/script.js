//Написать упрощенную игру "Морской бой" в одну строку от 0 до 6.
document.querySelector('.button').onclick = () => {
	const randomLoc = Math.floor(Math.random() * 5);
	const location1 = randomLoc;
	const location2 = location1 + 1;
	const location3 = location2 + 1;
	let guess;
	let guesses = 0;
	let hits = 0;
	let isSink = false;
	while (isSink == false) {
		guess = prompt('Ready, aim, fire! (enter a number 0-6)');
		if (guess < 0 || guess > 6) {
			alert('Enter a valid number');
		}
		else {
			guesses = guesses + 1;
			if (guess == location1 || guess == location2 || guess == location3) {
				alert('HIT!');
				hits = hits + 1;
				if (hits == 3) {
					isSink = true;
					alert('You sank my battleship');
				}
			}
			else {
				alert('MISS');
			}
		}
	}
	const stat = 'You took ' + guesses + ' guesses to sink the battleship, which means your shooting accuransy was ' + (3 / guesses);
	alert(stat);
}