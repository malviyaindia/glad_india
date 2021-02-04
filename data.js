function fun(){
	let P = document.getElementsByClassName("si")[0].value;

let R = document.getElementsByClassName("si")[1].value;

let T = document.getElementsByClassName("si")[2].value;
let M = document.getElementById("all").options[0].value;

let X = T;
let Y = P*R*X
let Z = 1200;
let SI = Y/Z;

document.getElementById('result').innerHTML = "Simple Interest = "+SI;
}
document.getElementById('say').addEventListener('click', fun);
// SideNav Script
function openNav() {
  document.getElementById("mySidenav").style.width = "100%"}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px"}