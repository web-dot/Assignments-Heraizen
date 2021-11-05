const inputs = document.querySelectorAll("input");

const patterns = {
    name : /^[a-z\d]{4,25}$/i,
    //dateofbirth:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]((19[0-9][0-9]|20[01][0-9]|2020))$/,
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

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})

console.log(inputs.length);
function checkClass(){
    let retval = false;
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].className === 'form-control valid'){
            retval = true;
        }
        else{
            retval = false;
            break;
        }
    }
    return retval;
}




let user = {
    name:"",
    email:"",
    pass:""
};
// let userarr = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[];
$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let userarr = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[];
        let cansubmit = checkClass();
        console.log(cansubmit);
        let button = document.querySelector("button")
        if(cansubmit){
            let attrarr = $(this).serializeArray();
            console.log(attrarr);
            user["name"] = attrarr[0]["value"];
            user["email"] = attrarr[1]["value"];
            user["pass"] = attrarr[2]["value"]
            console.log(user);
            userarr.push(user)
            console.log(userarr);
            localStorage.setItem("users", JSON.stringify(userarr))
            alert("you have successfully registered");
            window.location.href = "welcome.html";
        }
        else{
            alert("kindly correct the wrong field");
        }
    })
    
})




// document.querySelector("form").addEventListener('submit', function(event){
//     event.preventDefault();
//     let name = document.getElementById("name").value;

//     console.log(name);
// })
