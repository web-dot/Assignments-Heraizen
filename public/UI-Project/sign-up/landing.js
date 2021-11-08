$(document).ready(function(){

    let userarr = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')):[];
    let userscope = JSON.parse(localStorage.getItem("scope"));

    let table = document.querySelector("tbody");
    let resetbtn = document.querySelector("#reset");

    let selectedrow = null;

    let thisuserlist = [];

    function getlocalstorage(){
        if(localStorage.getItem(userscope["email"]) != null){
            thisuserlist = JSON.parse(localStorage.getItem(userscope["email"]))
        }
    }

    function displayLS(arr){
        let tablecontent = table.innerHTML;
        arr.forEach(item => {
            tablecontent = tablecontent + `<tr><td>${item["name"]} - ${item["desc"]}</td><td><a href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td><td><a href=""><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>`;
            table.innerHTML = tablecontent;
        })
    }

    //creating thisuserlist
    getlocalstorage();

    //displaying items present in thisuserlist
    displayLS(thisuserlist);

    //apending users name on navbar welcome
    let nametag = document.querySelector("span");
    userarr.forEach(user => {
        if(user["email"] === userscope.email){  
            nametag.innerHTML = " Hi " + user["name"];
        }
    })

    //adding element to table
    let form = document.querySelector("form")

    form.addEventListener('submit', function(event){
        event.preventDefault();
        let listitem = getItem();
        console.log(listitem);
        if(listitem["name"] === ""){
            alert("Oops you need to enter an item to add");
        }
        else{
        if(selectedrow == null){
            thisuserlist.push(listitem);
            display();
            localStorage.setItem(userscope["email"], JSON.stringify(thisuserlist));
        }
        else{
            selectedrow.cells[0].innerHTML = listitem["name"] + "-" + listitem["desc"]; 
            for(let i=0; i<thisuserlist.length; i++){
                if(selectedrow.cells[0].innerHTML.includes(thisuserlist[i]["name"])){
                    thisuserlist.splice(i,1,listitem);
                    console.log(thisuserlist);
                }
            }
            localStorage.setItem(userscope["email"], JSON.stringify(thisuserlist))
        }
    }
        //location.reload()
    })

    //display function
    function display(){
        let listitem = getItem();
        let content = table.innerHTML;
        content = content + `<tr><td>${listitem["name"]}-${listitem["desc"]}</td><td><a><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td><td><a class="trash"><i class="fa fa-trash" aria-hidden="true"></i></a></td></tr>`;
        table.innerHTML = content;
        item.value = "";
        desc.value = "";
        location.reload();
    }

    //getitem from input
    function getItem(){
        let userobj = {};
        userobj["name"] = document.getElementById("item").value,
        userobj["desc"] = document.getElementById("desc").value
        return userobj
    }

    resetbtn.addEventListener("click", function(event){
        item.value = "";
        desc.value = "";
    });


    let wishtable = document.querySelector("table");
    
    let eventlistener = function(){ 
        wishtable.addEventListener("click", function(event){
            event.preventDefault();
            let elemnetclicked = event.target;

            if(elemnetclicked.className === "fa fa-trash"){
                let row = elemnetclicked.parentNode.parentNode.parentNode;
                wishtable.deleteRow(row.rowIndex);

                let item = row.firstChild.innerHTML;
                for(var i=0; i<thisuserlist.length; i++){
                    if(item.includes(thisuserlist[i]["name"])){
                        thisuserlist.splice(i, 1);
                    }    
                }
                localStorage.setItem(userscope["email"], JSON.stringify(thisuserlist));
                location.reload()
            }
            if(elemnetclicked.className === "fa fa-pencil-square-o"){
                elemnetclicked.addEventListener("click", function(event){
                    selectedrow = elemnetclicked.parentNode.parentNode.parentNode;
                    let splititems = selectedrow.cells[0].innerHTML.split("-");

                    document.getElementById("item").value = splititems[0];
                    document.getElementById("desc").value = splititems[1];
                })
            } 
        })
    }
    eventlistener();
})