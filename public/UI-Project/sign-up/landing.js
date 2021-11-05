$(document).ready(function(){
    let userarr = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[];
    let userscope = JSON.parse(localStorage.getItem("scope"));
    let table = document.querySelector("tbody");

    let thisuserlist = [];
    function getlocalstorage(){
        if(localStorage.getItem(userscope["email"]) != null){
            thisuserlist = JSON.parse(localStorage.getItem(userscope["email"]))
        }
    }
    function display(arr){
        let tablecontent = "";
        arr.forEach(item => {
            tablecontent = tablecontent + `<tr><td>${item["name"]} - ${item["desc"]}</td><td><a href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td><td><a href=""><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>`;
            table.innerHTML = tablecontent;
        })
    }

    getlocalstorage();
    console.log(thisuserlist)
    display(thisuserlist);

    console.log(userarr);
    console.log(userscope);
    let nametag = document.querySelector("span");
    userarr.forEach(user => {
        console.log(user["name"]);
        if(user["email"] === userscope.email){  
            nametag.innerHTML = "Hi " + user["name"];
        }
    })

    let userobj = {
        name : "",
        desc : ""
    }

    let addbtn = document.getElementById("add")
    let content = "";
    addbtn.addEventListener('click', function(event){
        let name = document.getElementById("item").value;
        let desc = document.getElementById("desc").value;
        let item = name + "-" + desc;
        userobj["name"] = name;
        userobj["desc"] = desc;
        thisuserlist.push(userobj);
        localStorage.setItem(userscope["email"], JSON.stringify(thisuserlist));
        content = content + `<tr><td>${item}</td><td><a href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td><td><a href=""><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>`;
        table.innerHTML = table.innerHTML +  content;
    })
})