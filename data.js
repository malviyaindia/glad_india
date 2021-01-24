function data(){
 let fname=  document.getElementById("fname").value;
 
 let lname=  document.getElementById("lname").value;
 
 let date=  document.getElementById("date").value;
 let edu=  document.getElementById("edu").value;
 
 let pro=  document.getElementById("pro").value;
 let gen=  document.getElementById("gen").value;
 let mob=  document.getElementById("mob").value;
 
 let mail=  document.getElementById("mail").value;
 let height=  document.getElementById("height").value;
 let weight=  document.getElementById("weight").value;
 
 let x = '<b>Frist Name</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+fname+'<i>'+'<br>'+'<b>Last Name</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+lname+'<i>'+'<br>'+'<b>Date Of Birth </b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+date+'<i>'+'<br>'+'<b>Education </b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+edu+'<i>'+'<br>'+'<b> Profession </b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+pro+'<i>'+'<br>' + '<b>Gender </b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+gen+'<i>'+'<br>'+'<b>Mobile Number </b>&nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+mob+'<i>'+'<br>'+' <b>Email</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+mail+'<i>'+'<br>'+'<b>Height </b>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+height+'<i>'+'<br>'+'<b>Weight</b> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+'<i>'+weight+'<i>';
 document.getElementById("demo").innerHTML= x;

};
let loadFile = function(event) {
	let image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};