function validation(){
    if(document.Formfill.Username.value == ""){
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length < 3){
        document.getElementById("result").innerHTML = "At least three letters*";
        return false;
    }
    else if(document.Formfill.email.value == ""){
        document.getElementById("result").innerHTML = "Enter Your Email*";
        return false;
    }
    else if(document.Formfill.password.value == ""){
        document.getElementById("result").innerHTML = "Enter Your Password*";
        return false;
    }
    else if(document.Formfill.password.value.length < 6){
        document.getElementById("result").innerHTML = "Password must be 6 characters*";
        return false;
    }
    else if(document.Formfill.Cpassword.value == ""){
        document.getElementById("result").innerHTML = "Enter a Confirm Password*";
        return false;
    }
    else if(document.Formfill.Cpassword.value !== document.Formfill.password.value){
        document.getElementById("result").innerHTML = "Passwords don't match*";
        return false;
    }
    else {
        document.getElementById('popup').classList.add("open-slide");
        return false; // Prevent form submission for demonstration
    }
} 

var popup = document.getElementById('popup');
function closeSlide(){
    popup.classList.remove("open-slide");
}
