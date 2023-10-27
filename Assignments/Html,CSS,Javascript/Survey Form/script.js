function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors)
    {
      item.innerHTML="";
    }
}

function seterror(id,error){
    element= document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validateForm(){
   var returnval=true;

   clearErrors();

   var fname = document.forms['myForm']["cfname"].value;
   if(fname.length<5){
      seterror("fname", "*Length of first name is too short");
      returnval=false;
   }

   var lname = document.forms['myForm']["clname"].value;
   if(lname.length<5){
      seterror("lname", "*Length of last name is too short");
      returnval=false;
   }  

   var email = document.forms['myForm']["cemail"].value;
   if(email.length>20){
      seterror("email", "*Email length is to long.");
      returnval=false;
   }  

   var mobile = document.forms['myForm']["cmobile"].value;
   if(mobile.length!=10){
      seterror("mobile", "*Mobile no. shuold be of ten digits.");
      returnval=false;
   }    

   return returnval;
}


 