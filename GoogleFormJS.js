function firstNameValidation(){
    var namevalidation = /^[A-Za-z]+$/;
    if(document.getElementById("fnametextbox").value=="" || !namevalidation.test(document.getElementById("fnametextbox").value))
        { document.getElementById("fnameerror").style.display = "block";
            document.getElementById("fnametextbox").style.border = "1px solid red";
        }
    else{
        document.getElementById("fnameerror").style.display = "none";
            document.getElementById("fnametextbox").style.border = "none";
        
    }
}

function lastNameValidation(){
    
    var namevalidation = /^[A-Za-z]+$/;
    
     if(document.getElementById("lnametextbox").value=="" || !namevalidation.test(document.getElementById("lnametextbox").value)){
              document.getElementById("fnameerror").style.display = "block";
            document.getElementById("lnametextbox").style.border = "1px solid red";
    }
    else{

            document.getElementById("lnametextbox").style.border = "none";
    }
    
    
}

function emailValidation(){
    
    var emailvalidation =  /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(document.getElementById("etextbox").value=="" ){
     document.getElementById("emailerror").style.display = "block";
        document.getElementById("emailtextbox").style.border = "1px solid red";   
    
}else if(!emailvalidation.test(document.getElementById("etextbox").value))
        {
            alert("Enter Correct Email. Email format @text.com");
        }
    else{
          document.getElementById("emailerror").style.display = "none";
            document.getElementById("emailtextbox").style.border = "none";
    }
    
}

function passwordValidation(){
    if(document.getElementById("pwdtextbox").value==""){
         document.getElementById("passworderror").style.display = "block";
        document.getElementById("pwdtextbox").style.border = "1px solid red";
      
    }
    else{
           document.getElementById("passworderror").style.display = "none";
            document.getElementById("pwdtextbox").style.border = "none";
    }
    
}

function confirmPasswordValidation(){
      var pass1 = document.getElementById("pwdtextbox");
    var pas1 = pass1.value;
    var pass2 = document.getElementById("cpwdtextbox");
    var pas2 = pass2.value;
      if(document.getElementById("cpwdtextbox").value==""){
         document.getElementById("confirmpassworderror").style.display = "block";
        document.getElementById("cpwdtextbox").style.border = "1px solid red";
          
    }
    else if(pas1 != pas2){
        alert("Paswords doesn't match");
         
    }
    else{
        document.getElementById("confirmpassworderror").style.display = "none";
            document.getElementById("cpwdtextbox").style.border = "none";
    }
}


function dobvalidation(){
    var val = documnet.getElementById("monthselect")
    if((val.selectedIndex).value == "0"){
         document.getElementById("montherror").style.display = "block";
        document.getElementById("monthselect").style.border = "1px solid red";
       
    }
    else{
         document.getElementById("montherror").style.display = "none";
            document.getElementById("monthselect").style.border = "none";
    }
}

function dayValidation(){
     var dayvalidation = /^[0-9]+$/;
     if(document.getElementById("daytextbox").value==""){
         document.getElementById("montherror").style.display = "block";
        document.getElementById("daytextbox").style.border = "1px solid red";
       
    }else if(isNaN(document.getElementById("daytextbox").value) || document.getElementById("daytextbox").value >= 31 || document.getElementById("daytextbox").value <= 1)
        {
            alert("Enter exact date. Day Must be 1-31 only.");
        }
    
    else {
        document.getElementById("montherror").style.display = "none";
            document.getElementById("daytextbox").style.border = "none"
    }
     
}

function yearValidation(){
    var yearvalidation = /^[0-9]+$/;
     if(document.getElementById("yeartextbox").value==""){
         document.getElementById("montherror").style.display = "block";
        document.getElementById("yeartextbox").style.border = "1px solid red";
        
    }else if(isNaN(document.getElementById("yeartextbox").value) || document.getElementById("yeartextbox").value < 1900 || document.getElementById("yeartextbox").value > 2016)
        {
            alert("Enter exact year. Year Must be greaterthan 1900 and lessthan 2016.");
        }
    
    else{
       
        document.getElementById("yeartextbox").style.border = "none";
    }
    
}

function phoneNumberValidation(){
    var phonenumbervalidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
     if(document.getElementById("pnumbertextbox").value==""){
        document.getElementById("phonenumbererror").style.display = "block";
        document.getElementById("pnumbertextbox").style.border = "1px solid red"; 
        
    }
    else if(!phonenumbervalidation.test(document.getElementById("pnumbertextbox").value))
        {
            alert("Phone number must be 10 digits and in US Format. ")
        }
    else{
          document.getElementById("phonenumbererror").style.display = "none";
        document.getElementById("pnumbertextbox").style.border = "none"; 
    }
}


function validation(){
    var namevalidation = /^[A-Za-z]+$/;
    var emailvalidation =  /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var dayvalidation = /^[0-9]+$/;
    var phonenumbervalidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    
   if(document.getElementById("fnametextbox").value==""){
       
        document.getElementById("fnameerror").style.display = "block";
            document.getElementById("fnametextbox").style.border = "1px solid red";
       
   } if(document.getElementById("lnametextbox").value==""){
         document.getElementById("fnameerror").style.display = "block";
            document.getElementById("lnametextbox").style.border = "1px solid red";
   } if(document.getElementById("etextbox").value==""){
       
        document.getElementById("emailerror").style.display = "block";
        document.getElementById("emailtextbox").style.border = "1px solid red"; 
    
   }
     var pass1 = document.getElementById("pwdtextbox");
    var pas1 = pass1.value;
    var pass2 = document.getElementById("cpwdtextbox");
    var pas2 = pass2.value;
     if(pas1==""){
         document.getElementById("passworderror").style.display = "block";
        document.getElementById("pwdtextbox").style.border = "1px solid red";
    } 
    if(pas2==""){
         document.getElementById("confirmpassworderror").style.display = "block";
        document.getElementById("cpwdtextbox").style.border = "1px solid red";
    } 
    if(document.getElementById("monthselect").value=="0"){
          document.getElementById("montherror").style.display = "block";
        document.getElementById("monthselect").style.border = "1px solid red";
    } 
    else{
         document.getElementById("montherror").style.display = "none";
        document.getElementById("monthselect").style.border = "none";
    }
    if(document.getElementById("daytextbox").value=="" ){
           document.getElementById("montherror").style.display = "block";
        document.getElementById("daytextbox").style.border = "1px solid red";
    } 
    if(document.getElementById("yeartextbox").value=="" ){
          document.getElementById("montherror").style.display = "block";
        document.getElementById("yeartextbox").style.border = "1px solid red";
    }  
    if(document.getElementById("male").checked || document.getElementById("female").checked || document.getElementById("other").checked){
       
         document.getElementById("gendererror").style.display = "none";  
        
    }  else{
        document.getElementById("gendererror").style.display = "block"; 
    }
    
    if(document.getElementById("pnumbertextbox").value=="" ){
        document.getElementById("phonenumbererror").style.display = "block";
        document.getElementById("pnumbertextbox").style.border = "1px solid red"; 
       
        
    }
    
    
  
}