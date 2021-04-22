function isValid(username,password){
    if(username.length == 10 && password.length >= 6){
        if(username == "8903117739" && password == "pass1234"){
            return true;
        }
        else{
            alert("Invalid username and password");
            return false;
        }
    }
    return false;//false;
}