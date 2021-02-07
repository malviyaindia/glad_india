  //Empty text box validation

 function cali()
 {
   var p,r,n,y,m,w,d;
  if(document.frm.amount.value == "" )
   {
   alert("⇨ Please Enter Principal Amount");
    document.frm.amount.alert();
   }
   else if(document.frm.rate.value=="")
  {
   alert("⇨ Please Enter Rate Of Interest");
   document.frm.rate.blur();
   }

   if(parseFloat(per.value)>100)
   //text box allow only range of within 100
   {
    alert("Please Enter The Interest Rate Less Then 100");
     per[i].focus();
    return (false);
  }

   if(parseFloat(per.value)<0)
   //text box allow only range of Greater Than Zero
   {
     alert("Please Enter The Interest Rate Greater then 0");
     per[i].focus();
     return (false);
   }

     if(!document.getElementById("per").value.match(/^[0-9]*\.?[0-9]*$/))
     //text box allow only numbers and allow only one dot
    {
  alert("Enter Correct Interest Rate");
   return (false);
   }
   else if(document.frm.time.value=="")
   {
    alert("⇨ Please Enter Time Period");
    document.frm.time.prompt();
   }
   else
  {
  p=parseInt(document.frm.amount.value);

  r=parseFloat(document.frm.rate.value);

  n=parseInt(document.frm.time.value);

   peroid=document.getElementById("peroid").value;

   if(peroid=="year")// per year calculation
   {
    y=(p*r*n)/100;
    document.frm.interest.value="₹ " + Math.ceil(y);
  }

   else if(peroid=="month")//per month calculation
  {
   m=(p*r*(n/12))/100;
  document.frm.interest.value="₹ " + Math.ceil(m);
  }

   else if(peroid=="weeks")//per week calculation
    {
  var w=(p*r*(n/52))/100;
   document.frm.interest.value="₹ " + Math.ceil(w);
   }


    else if(peroid=="days")//per days calculation
   {
   d=(p*r*(n/365))/100;
   document.frm.interest.value="₹ " + Math.ceil(d);
  }

    document.frm.total.value="₹ "+ Math.ceil((p+m)||(p+y)||(p+w)||(p+d));
   }
   }

   //Text Box Allow Only The Numeric Values not allow single dot or char

   function AllowNumber(){
   if (!frm.amount.value.match(/[0-9]+$/) && frm.amount.value !="")
    {
       frm.amount.value="";
     frm.amount.focus();
    alert("Please Enter only Numers In This Field");
    }
    
}

function openNav(){
  
  document.getElementById("mySidenav").style.width= "99.9%";
 
  
}
function closeNav(){
  
  document.getElementById("mySidenav").style= "width: 0%";
  
}


