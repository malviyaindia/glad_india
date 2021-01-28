function fun(){
    var num = document.getElementById('numberinput').value;
   
   var total = ( num+'<sup>2</sup> = ' + num*num + '<br>'+ num+'<sup>3</sup> = ' + num*num*num +'<br>'+num+'<sup>4</sup> = '+ num*num*num*num + '<br>'+ num+'<sup>5</sup> = '+ num*num*num*num*num +'<br>'+ num+'<sup>6</sup> = '+ num*num*num*num*num*num +'<br>'+ num+'<sup>7</sup> = '+ num*num*num*num*num*num*num +'<br>'+ num+'<sup>8</sup> = '+ num*num*num*num*num*num*num*num +'<br>'+ num+'<sup>9</sup> = '+ num*num*num*num*num*num*num*num*num +'<br>'+ num+'<sup>10</sup> = '+ num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>11</sup> = '+ num*num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>12</sup> = '+ num*num*num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>13</sup> = '+ num*num*num*num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>14</sup> = '+ num*num*num*num*num*num*num*num*num*num*num*num*num*num +'<br>'+num+'<sup>15</sup> = '+ num*num*num*num*num*num*num*num*num*num*num*num*num*num*num +'<br>');
   
   document.getElementById('result').innerHTML = total;
}

document.getElementById('say').addEventListener('click', fun);
// SideNav Script
function openNav() {
  document.getElementById("mySidenav").style.width = "100%"}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px"}