'use strict';

//Variables globales

const playButton = document.querySelector('.js_playbutton');
const optionSelect = document.querySelector('.js_selectoption');
let userCounter = document.querySelector('.js-playerCounter');
let machinaCounter = document.querySelector('.js-machinaCounter');
const resultMsg = document.querySelector('.js-resultMessage');
const resetButton = document.querySelector('.js-resetButton');
let counterGame = 1;
let counterPlayer = 0;
let counterMachina = 0;
//funciones

function getRandom(max) {
	return Math.ceil(Math.random() * max);
}
function playMachina() {
	const randomNum = getRandom(9);
	let machinaValue;
	if (randomNum < 3) {
		machinaValue = 'rock';
		console.log('piedra ordenador');
	} else if (randomNum <= 6) {
		machinaValue = 'paper';
		console.log('papel ordenador');
	} else if (randomNum <= 9) {
		machinaValue = 'scissors';
		console.log('tijeras ordenador');
	}
	return machinaValue;
}

function letsPlay(userValue) {
	//cogemos el valor
	const machinaValue = playMachina();
	//comparamos valores de value
	if (userValue === machinaValue) {
		innerResult = '¡Empate!';
		counterPlayer++;
		counterMachina++;
	} else if (userValue === 'rock') {
		if (machinaValue === 'paper') {
			innerResult = '¡Ganaste!';
			counterPlayer++;
		} else {
			innerResult = '¡Perdiste!';
			counterMachina++;
		}
	} else if (userValue === 'paper') {
		if (machinaValue === 'rock') {
			innerResult = '¡Ganaste!';
			counterPlayer++;
		} else {
			innerResult = '¡Perdiste!';
			counterMachina++;
		}
	} else if (userValue === 'scissors') {
		if (machinaValue === 'paper') {
			innerResult = '¡Ganaste!';
			counterPlayer++;
		} else {
			innerResult = '¡Perdiste!';
			counterMachina++;
		}
	}
	userCounter.innerHTML = counterPlayer;
	machinaCounter.innerHTML = counterMachina;
}
function handleClickUpdate(event) {
	event.preventDefault();
	const userValue = optionSelect.value;
	console.log(userValue);
	letsPlay(userValue);
	counter();
}
playButton.addEventListener('click', handleClickUpdate);

function counter() {
	console.log(counterGame);
	if (counterGame === 10) {
		playButton.classList.add('hidden');
		resetButton.classList.remove('hidden');
	} else {
		counterGame++;
	}
}

function innerResult() {
	resultMsg.innerHTML;
}

function handleResetBtn() {
	counterGame = 0;
	counterPlayer = 0;
	counterMachina = 0;
	userCounter.innerHTML = counterPlayer;
	machinaCounter.innerHTML = counterMachina;
}

resetButton.addEventListener('click', handleResetBtn);
