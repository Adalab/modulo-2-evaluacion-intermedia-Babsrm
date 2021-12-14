'use strict';

//Variables globales

const playButton = document.querySelector('.js_playbutton');
const optionSelect = document.querySelector('.js_selectoption');


//funciones

function getRandom(max) {
    return Math.ceil(Math.random() * max);
}
function playMachina() {
    const randomNum = getRandom(9);
    let machinaValue;
    if (randomNum < 3) {
        machinaValue = "rock";
    }
    else if (randomNum <= 6) {
        machinaValue = "paper";
    }
    else if (randomNum <= 9) {
        machinaValue = "scissors";
    }
    return machinaValue;
}

function letsPlay(userValue) {
    //cogemos el valor
    const machinaValue = playMachina();
    console.log(machinaValue);
    //comparamos valores de value
    if (userValue === machinaValue) {
        document.getElementById('js-resultMessage').innerHTML = '¡Empate!';
    }
    else if (userValue === 'rock') {
        if (machinaValue === 'paper') {
            document.getElementById('js-resultMessage').innerHTML = '¡Ganaste!';
        }
        else { document.getElementById('js-resultMessage').innerHTML = '¡Perdiste!'; }}

    else if (userValue === 'paper') {
            if (machinaValue === 'rock') {
                document.getElementById('js-resultMessage').innerHTML = '¡Ganaste!';
            }
            else { document.getElementById('js-resultMessage').innerHTML = '¡Perdiste!'; }}
            else if (userValue === 'scissors') {
                if (machinaValue === 'paper') {
                    document.getElementById('js-resultMessage').innerHTML = '¡Ganaste!';
                }
                else { document.getElementById('js-resultMessage').innerHTML = '¡Perdiste!'; }

            }}

            function handleClickUpdate(event) {
                event.preventDefault();
                const userValue = optionSelect.value;
                console.log(userValue);
                letsPlay(userValue);
            }
            playButton.addEventListener('click', handleClickUpdate)

/* ESTO CREO QUE NO ES ASI 
function playMachina() {
    //generamos numero aleatorio
    const randomNum = getRandom(3);
    if (randomNum === 1){maquinaValue = 'rock';
}
else if (randomNum === 2){maquinaValue= 'paper';}
else if (randomNum===3) {
    maquinaValue='scissors'};
}*/