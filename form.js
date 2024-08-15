function Loan(){
    let Date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let people = document.getElementById('people').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    if(Date === "" || time === "" || people == "" || name === "" || phone === "" || email === ""){
        alert('Fill all Details')
    }
    else {
        alert('Welcome')
    }
 }

 