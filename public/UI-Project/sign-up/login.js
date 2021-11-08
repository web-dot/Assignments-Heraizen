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
        let mailflag = false;
        //let passflag = false;
        for(let i=0; i<userarr.length; i++){
            //debugger;
            if(userarr[i]["email"] === email && userarr[i]["pass"] === pass){
                alert("login successfull");
                userscope["email"] = email;
                userscope["pass"] = pass;
                console.log(userscope); 
                localStorage.setItem('scope', JSON.stringify(userscope));
                window.location.href = "landingpage.html"
            }
            if(userarr[i]["email"] === email){
                mailflag = true;
                document.getElementById("emailHelp").style.opacity= 0;
                if(userarr[i]["pass"] != pass){
                    //alert("check pass");
                    document.getElementById("passHelp").style.opacity= 1;
                }
            }
        }
        if(mailflag == false){
            //alert("check email");
            document.getElementById("emailHelp").style.opacity= 1;
            document.getElementById("passHelp").style.opacity= 0;
        }
        
    })
})