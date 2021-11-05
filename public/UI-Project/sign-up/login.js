$(document).ready(function(){
    let userarr = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[];
    let userscope = localStorage.getItem('scope') ? JSON.parse(localStorage.getItem('scope')):{email: "", pass: ""};
    console.log(userarr);


    let form = document.querySelector("form");
    form.addEventListener('submit', function(event){
        event.preventDefault();
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
        console.log(email, ":", pass);
        userarr.forEach(user => {
            if(user["email"] === email){
                document.getElementById("emailHelp").style.opacity= 0;
                if(pass === user["pass"]){
                    alert("login successful");
                    userscope["email"] = email;
                    userscope["pass"] = pass;
                    console.log(userscope); 
                    localStorage.setItem('scope', JSON.stringify(userscope));
                    window.location.href = "landingpage.html"
                }
                else{
                    alert("please check password")
                    document.getElementById("passHelp").style.opacity= 1;
                }
            }
            else{
                alert("email is not registered");
                document.getElementById("emailHelp").style.opacity= 1;
            }
        })
    })


})