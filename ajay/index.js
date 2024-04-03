// loginclear
// let modalbody=document.querySelector('.modal1');
// let closesignup=document.getElementById("loginclose");
// closesignup.addEventListener('click',()=>{
//     modalbody.innerHTML="";
// })

function validateform() {
    var name = document.forms["Registerform"]["name"];
    var email = document.forms["Registerform"]["email"];
    var password = document.forms["Registerform"]["password"];
    var confirmpassword = document.forms["Registerform"]["Confirampassword"];

    //    console.log(name.value,email,password,confirmpassword);
    if (name.value == "") {
        alert("Enter your name")
        return false;
    }
    else if (email.value == "") {
        alert("Enter your mail id;")
        return false;
    }
    else if (password.value == "") {
        alert("Enter your password")
        return false;

    }
    else if (confirmpassword.value == "") {
        alert("Enter your Confirmpassword")
        return false;

    }
    if (password.value === confirmpassword.value) {
        if (registerinlocalStorage()) {
            alert("registration done successfully")
            // return true
        }
        else {
            return false;
        }
    }
    else {
        alert("you password and confirm password are not matching");
        return false;

    }
    return true;

}
let users = JSON.parse(localStorage.getItem('userlist')) ? JSON.parse(localStorage.getItem('userlist')) : [];
console.log(users);
function registerinlocalStorage() {
    var name = document.forms["Registerform"]["name"].value;
    var email = document.forms["Registerform"]["email"].value;
    var password = document.forms["Registerform"]["password"].value;
    var confirmpassword = document.forms["Registerform"]["Confirampassword"].value;

    let newuserObj = {
        name: name,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
    }
    let userexist = users.some(user => user.email == newuserObj.email);
    if (userexist) {
        alert("you are already there")
        return false;
    }
    else {
        users.push(newuserObj);
    }

    let userstring = JSON.stringify(users);
    localStorage.setItem("userlist", userstring);
    let currentuserstring = JSON.stringify(newuserObj);
    localStorage.setItem("currentuser", currentuserstring);
    return true;
}




//loginafter sign up
let usersl = JSON.parse(localStorage.getItem('userlist'));
console.log(usersl);
function validatelogin() {
    var email = document.forms["loginform"]["email"];
    var password = document.forms["loginform"]["password"];
    // console.log(email.value, password.value);
    // console.log(email.value)
    // console.log(password.value)
    if (email.value == "") {
        alert("enter mail to login")
        return false;
    }
    else if (password.value == "") {
        alert("password is not goign to be empty")
        return false;
    }
    if (usersl.some(man => (man.email === email.value && man.password === password.value))) {
         
        
        
    //    window.location.href = "index3.html"
        window.history.pushState({}, "", "./resume.html");





    }
    else {
        alert("wrong");
        return false;
    }
}


// document.getElementById('signupclose').addEventListener('click', () => {
// document.getElementById('signupopoup').innerText="";
//    console.log("mahadev");
// })