function data(){
 let fname=  document.getElementById("fname").value;
 
 let lname=  document.getElementById("lname").value;
 
 let date=  document.getElementById("date").value;
 let edu=  document.getElementById("edu").value;
 
 let pro=  document.getElementById("pro").value;
 let gen=  document.getElementById("gen").value;
 let mob=  document.getElementById("mob").value;
 
 let mail=  document.getElementById("mail").value;
 let address=  document.getElementById("height").value;
 let marital=  document.getElementById("weight").value;
  let nationality=  document.getElementById("weight2").value;
let extra1 = document.getElementsByClassName('in')[0].value;
let extra2 = document.getElementsByClassName('in')[1].value;
let extra3 = document.getElementsByClassName('in')[2].value;
let extra4 = document.getElementsByClassName('in')[3].value;

let x = '<b>Frist Name :</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+fname+'<i>'+'<br>'+'<b>Father Name :</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp'+'<i>'+lname+'<i>'+'<br>'+'<b>Date Of Birth :</b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+date+'<i>'+'<br>'+'<b>Education :</b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp'+'<i>'+edu+'<i>'+'<br>'+'<b> Profession :</b> &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp'+'<i>'+pro+'<i>'+'<br>' + '<b>Gender :</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+gen+'<i>'+'<br>'+'<b>Mobile Number :</b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+mob+'<i>'+'<br>'+' <b>Email :</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+mail+'<i>'+'<br>'+'<b>Address :</b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+address+'<i>'+'<br>'+'<b>Marital Status :</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+marital+'<i>'+'<br>'+'<b>Nationality :</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp &nbsp'+'<i>'+nationality+'<br>'+'<b>'+extra1+'</b>'+'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+extra2+'<i>'+'<br>'+'<b>'+extra3+'</b>'+'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+extra4+'<i>';
 
 document.getElementById("demo").innerHTML= x;

document.getElementsByClassName("fa-print")[0].style.display= "block";
};
let loadFile = function(event) {
	let image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

  function fun(){
let x = document.getElementById("myDIV");
let a= document.getElementsByClassName('in')[4];

  if (a.innerHTML === "remove", x.style.display === "block")
  {
     a.innerHTML = "Add More +";     
    x.style.display = "none";
  } 
  else {
          a.innerHTML = "Remove This ×";
    x.style.display = "block";
  }
} 
// SideNav Script
function openNav() {
  document.getElementById("mySidenav").style.width = "100%"}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px"}
  