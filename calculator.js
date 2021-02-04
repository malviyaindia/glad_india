function fun(){
    var num = document.getElementById('numberinput').value;
   
   var total = ( num+'<sup>2</sup> &nbsp; ⇨ ' + num*num + '<br>'+ num+'<sup>3</sup> &nbsp; ⇨ ' + num*num*num +'<br>'+num+'<sup>4</sup> &nbsp; ⇨ '+ num*num*num*num + '<br>'+ num+'<sup>5</sup> &nbsp; ⇨ '+ num*num*num*num*num +'<br>'+ num+'<sup>6</sup> &nbsp; ⇨ '+ num*num*num*num*num*num +'<br>'+ num+'<sup>7</sup> &nbsp; ⇨  '+ num*num*num*num*num*num*num +'<br>'+ num+'<sup>8</sup> &nbsp; ⇨ '+ num*num*num*num*num*num*num*num +'<br>'+ num+'<sup>9</sup> &nbsp; ⇨ '+ num*num*num*num*num*num*num*num*num +'<br>'+ num+'<sup>10</sup> &nbsp; ⇨ '+ num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>11</sup> &nbsp; ⇨ '+ num*num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>12</sup> &nbsp; ⇨ '+ num*num*num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>13</sup> &nbsp; ⇨ '+ num*num*num*num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>14</sup> &nbsp; ⇨ '+ num*num*num*num*num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>15</sup> &nbsp; ⇨ '+ num*num*num*num*num*num*num*num*num*num*num*num*num*num*num +'<br>');
   
  
   document.getElementById('result').innerHTML = total;
   
   if(document.getElementById('numberinput').value == "" )
   {
   
  document.getElementById('result').innerHTML = " ⇨  Please Enter Valid Input";
    document.getElementById('numberinput').value.alert();
}
}


document.getElementById('say').addEventListener('click', fun);
// SideNav Script
function openNav() {
  document.getElementById("mySidenav").style.width = "100%"}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px"}