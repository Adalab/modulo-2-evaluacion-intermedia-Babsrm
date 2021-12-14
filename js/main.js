"use strict";

//Variables globales

const playButton = document.querySelector(".js_playbutton");
const optionSelect = document.querySelector(".js_selectoption");
let userCounter = document.getElementById(".js-playerCounter");
let machinaCounter = document.getElementById(".js-playerCounter");
const resultMsg = document.querySelector(".js-resultMessage");
const resetButton = document.querySelector(".js-resetButton");
let counterGame = 1;

//funciones

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}
function playMachina() {
  const randomNum = getRandom(9);
  let machinaValue;
  if (randomNum < 3) {
    machinaValue = "rock";
    console.log ("piedra ordenador")
  } else if (randomNum <= 6) {
    machinaValue = "paper";
    console.log ("papel ordenador")
  } else if (randomNum <= 9) {
    machinaValue = "scissors";
    console.log ("tijeras ordenador")
  }
  return machinaValue;
}

function letsPlay(userValue) {
  //cogemos el valor
  const machinaValue = playMachina();
  //comparamos valores de value
  if (userValue === machinaValue) {
    resultMsg.innerHTML = "¡Empate!";
    userCounter ++;
    machinaCounter ++;
  } else if (userValue === "rock") {
    if (machinaValue === "paper") {
     resultMsg.innerHTML = "¡Ganaste!";
     userCounter ++;
    } else {
      resultMsg.innerHTML = "¡Perdiste!";
      machinaCounter ++;
    }
  } else if (userValue === "paper") {
    if (machinaValue === "rock") {
      resultMsg.innerHTML = "¡Ganaste!";
      userCounter ++;
    } else {
      resultMsg.innerHTML = "¡Perdiste!";
      machinaCounter ++;
    }
  } else if (userValue === "scissors") {
    if (machinaValue === "paper") {
      resultMsg.innerHTML = "¡Ganaste!";
      userCounter ++;
    } else {
      resultMsg.innerHTML = "¡Perdiste!";
      machinaCounter ++;
    }
  }
}
function handleClickUpdate(event) {
  event.preventDefault();
  const userValue = optionSelect.value;
  console.log(userValue);
  letsPlay(userValue);
  counter();
}
playButton.addEventListener("click", handleClickUpdate);

function counter() {
    console.log(counterGame);
    if (counterGame === 10) {
        playButton.classList.add("hidden");
        resetButton.classList.remove("hidden");
      }
    else{
     counterGame ++;   
    }
}