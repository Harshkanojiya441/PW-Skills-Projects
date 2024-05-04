function verifyPassword() {
    var passValidation1 = document.getElementById("pass1").value;
    var passValidation = document.getElementById("pass2").value;
    
    //Check pass is empty
    if(passValidation1 == ""){
        alert("Please Enter Password");
        return false;
    }
    //Check confirm pass is empty
    else if(passValidation == ""){
        alert("Please Enter Confirm Password");
        return false;
    }
    //Check both password is different
    else if(passValidation1 != passValidation){
        alert("\nPassword did not match: Please try again...");
        return false;
    }
    //minimum password length validation
    else if(passValidation1.length < 8){
        alert("Pass legth must be atleast 8 characters");
        return false;
    }
    //maximum password length validation
    else if(passValidation1.length > 15){
        alert("Pass legth must not exceed 15 characters");
        return false;
    }
    else{
        alert("Password Match: Welcome to WebDevelopment Course");
        return true;
    }
}