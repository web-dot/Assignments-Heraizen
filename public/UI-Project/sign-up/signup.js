let userarr = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[];
const inputs = document.querySelectorAll("input");
let dob = document.getElementById("dateofbirth").value;

const patterns = {
    name : /^[a-z\d\s]{4,25}$/i,
    dateofbirth:/^((19[0-9][0-9]|20[01][0-9]|2020))[- \/.](0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,6})$/,
    pass:/^[\w@-]{6,20}$/,
    repass:/^[\w@-]{6,20}$/
}

//validation function
function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'form-control valid';
    }else{
        field.className = 'form-control invalid';
    }
}

let passarr = [];
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
        console.log(e.target.value);
        let password = "";
        let rpassword = "";
        if(e.target.name == "pass"){
            password = e.target.value;
            passarr.push(password);
        }
        if(e.target.name == "repass"){
            rpassword = e.target.value;
            console.log(rpassword);
            if(passarr[passarr.length-1] === rpassword){
                document.getElementById("rpass").className = "form-control valid";
                console.log("repeat password match");
                document.getElementById("rpasshelp").innerHTML= "repeat password match";
                document.getElementById("rpasshelp").style.color= "green";
                document.getElementById("rpasshelp").style.opacity= 1;
            }
            else{
                console.log("repeat password not matching");
                document.getElementById("rpasshelp").innerHTML= "repeat password not matching";
                document.getElementById("rpasshelp").style.color= "rgb(121, 32, 0)";
                document.getElementById("rpasshelp").style.opacity= 1;
            }
        }
        let email = "";
        if(e.target.name == "email"){
            email = e.target.value; 
        }
        console.log(email);
        userarr.forEach(user => {
            if(user["email"] == email){
                document.getElementById("emailHelp").innerHTML = "this email is already registered, kindly login";
                document.getElementById("emailHelp").style.color = "#36cc36";
                document.getElementById("emailHelp").className = "form-text";
                document.getElementById("email").className = "form-control invalid";
            }
        })
        inputs.forEach(input => {
            if(input.className === 'form-control valid' && passarr[passarr.length-1] === rpassword){
                document.querySelector("button").disabled = false;
            }
            else{
                document.querySelector("button").disabled = true;
            }
        })
    })
})




function checkClass(){
    let retvalue = {
        value:false,
        name:""
    }
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].className === 'form-control valid'){
            retvalue.value = true;
        }
        else{
            retvalue.value = false;
            let badinput = inputs[i].attributes.name.value;
            console.log(badinput);
            retvalue.name = badinput;
            break;
        }
    }
    return retvalue;
}

let user = {
    name:"",
    dob:"",
    email:"",
    pass:""
};


$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        console.log(dob);
        let userarr = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[];
            let attrarr = $(this).serializeArray();
            console.log(attrarr);
            user["name"] = attrarr[0]["value"];
            user["dob"] = attrarr[1]["value"];
            user["email"] = attrarr[2]["value"];
            user["pass"] = attrarr[3]["value"]
            console.log(user);
            userarr.push(user)
            console.log(userarr);
            localStorage.setItem("users", JSON.stringify(userarr))
            alert("You have successfully registered. Please sign-in to access the system");
            window.location.href = "welcome.html";
    })
    
})
