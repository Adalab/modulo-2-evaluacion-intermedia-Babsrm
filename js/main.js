'use strict';

//Variables globales

const playButton = document.querySelector('.js_playbutton');
const optionSelect = document.querySelector('.js_selectoption');


//funciones

function getRandom (max){
    return Math.ceil (Math.random () * max);
}

function letsPlay (userValue) {
    //cogemos el valor
    userValue = optionSelect.value;
    machinaValue = playMachina.value;
    //comparamos valores de value
    if (userValue === 1){
        if (randomNum [playMaquina] === 1){
            document.getElementById('js-resultMessage').innerHTML= '¡Empate!';
        }
        else if (randomNum [playMaquina] === 2){
            document.getElementById('js-resultMessage').innerHTML= '¡Perdiste!';}
        else if (randomNum [playMaquina] === 3){
            document.getElementById('js-resultMessage').innerHTML= '¡Ganaste!';}
    }
    if (userValue === 2){
        if (randomNum [playMaquina] === 1){
            document.getElementById('js-resultMessage').innerHTML= '¡Ganaste!';
        }
        else if (randomNum [playMaquina] === 2){
            document.getElementById('js-resultMessage').innerHTML= '¡Empate!';}
        else if (randomNum [playMaquina] === 3){
            document.getElementById('js-resultMessage').innerHTML= '¡Perdiste!';}
    }
    if (userValue === 3){
        if (randomNum  === 1){
            document.getElementById('js-resultMessage').innerHTML= '¡Perdiste!';
        }
        else if (randomNum  === 2){
            document.getElementById('js-resultMessage').innerHTML= '¡Ganaste!';}
        else if (randomNum === 3){
            document.getElementById('js-resultMessage').innerHTML= '¡Empate!';}
    }
}

function handleClickUpdate(event){
    event.preventDefault();
    letsPlay();
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