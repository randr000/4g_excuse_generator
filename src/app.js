/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.onload = function() {
  //write your code here
  const excuse = `${getRandomWord(who)} ${getRandomWord(
    action
  )} ${getRandomWord(what)} ${getRandomWord(when)}`;
  document.getElementById("excuse").innerText = excuse;
};
