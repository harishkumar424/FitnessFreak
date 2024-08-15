//NAME VALIDATION
if (username === ""){
    document.getElementById('note').innerHTML="Enter Name"
    userStatus = false
}
else{
    if (username.match(alphaExp)){
        document.getElementById('note').innerHTML=""
        userStatus = true
    }
    else{
        document.getElementById('note').innerHTML="Characters Only"
        userStatus = false
    }
}

//NUM VALIDATION
if (number === ""){
    document.getElementById("numNote").innerHTML = "Enter Mobile Number"
    numStatus = false
}
else{
    if(number.match(numExp)){
        if ( number.length === 10){
            document.getElementById("numNote").innerHTML = ""
             numStatus = true
        }
        else{
            document.getElementById("numNote").innerHTML = "10 Digits Only"
            numStatus = false
        }
    }
    else{
        document.getElementById("numNote").innerHTML = "Numbers Only"
        numStatus = false
    }
}

//MAIL VALIDATION
if (email === ""){
    document.getElementById("mailNote").innerHTML = "Enter your Mail"
    mailStatus = false
}
else{
    if (email.match(mailExp)){
        document.getElementById("mailNote").innerHTML = ""
         mailStatus = true
    }
    else{
        document.getElementById("mailNote").innerHTML = "Invalid Mail"
         mailStatus = false
    }
}


//RETURN VALIDATION
if (userStatus === true && numStatus === true && mailStatus === true ){
    return ture
}
else {
    return false
}
