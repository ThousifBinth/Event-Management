function message_form_validation(){
    
    email1 = document.getElementById('email').value
    
    name1 = document.getElementById('name').value
    
    
    if ((email1=="")||(name1=="")){
        document.getElementById('error').innerHTML="pls enter above field"
        return false
    }
    else{
        return true
    }

}