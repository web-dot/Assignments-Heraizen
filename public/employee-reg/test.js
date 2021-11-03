var urlarr = ['https://lwl-ems.herokuapp.com/api/ems/all', 'https://lwl-ems.herokuapp.com/api/ems/ - POST, PUT', 'https://lwl-ems.herokuapp.com/api/ems/(empId) - Fetch, Delete'];

        var baseUrl = 'https://lwl-ems.herokuapp.com/api/ems';

        const nameTable = document.getElementById('nameTable');

        getEmpData();
        let data = [];
        let id = -1;
        let flag = false;        

        async function getEmpData(){
            const response = await fetch(`${baseUrl}/all`);
            list = await response.json();
            console.log(list);
            display(list);
        }

        let content = nameTable.innerHTML;
        async function display(arr){
            arr.forEach(obj => {
                content = content + '<tr><td>'+ obj["id"]+'</td><td>'+ obj["name"]+'</td><td>'+ obj["email"]+'</td><td>'+ obj["salary"]+'</td><td>' + '<button class="upBt">update</button><button class="delBt">delete</button></tr>';
            })
            nameTable.innerHTML = content;
        }


        function input(){
            return {
                "name" : document.getElementById('personName').value,
                "email" : document.getElementById('personEmail').value,
                "salary" : document.getElementById('personSalary').value,
            }
        }


        //CREATE
        async function setEmpData(){
            const jsonData = input();
            const options = {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(jsonData)
            }
            const response = await fetch(`${baseUrl}/`, options);
            console.log(response);
            content = content + '<tr><td>'+ input["id"]+'</td><td>'+ input["name"]+'</td><td>'+ input["email"]+'</td><td>'+ input["salary"]+'</td><td>' + '<button class="upBt">update</button><button class="delBt">delete</button></tr>';
            nameTable.lastChild = content;
        }

        //DELETE
        async function delEmp(empID){
            let result = confirm("are you sure you want to delete this employee?");
            if(result){
                const options = {
                    method: "DELETE"
                }
                const result = await fetch(`${baseUrl}/${empID}`,options);
            }
        }

        //UPDATE
        async function updateEmp(id){
            let result = confirm("are you sure you want to update this employee?");
            if(confirm){
            const jsonData = input();
            const data = {
                "id" : id,
                "name":jsonData.name,
                "email":jsonData.email,
                "salary":jsonData.salary
            }
            console.log("id in update",data.id);

            const options = {
                method:"PUT",
                headers :{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            }

            const response = await fetch(`${baseUrl}/`, options);
        }
    }

        var setEventListener = () => {
            nameTable.addEventListener('click', e => {
                var elementClicked = e.target;
                if(elementClicked.className === "delBt"){
                    var row = elementClicked.parentNode.parentNode;
                    nameTable.deleteRow(row.rowIndex);
                    var id = row.firstChild.innerHTML;
                    delEmp(id);
                }
                if(elementClicked.className === 'upBt'){
                    elementClicked.addEventListener('click', function(event){
                        selectedRow = elementClicked.parentNode.parentNode;
                        document.getElementById('personName').value = selectedRow.cells[1].innerHTML;
                        document.getElementById('personEmail').value = selectedRow.cells[2].innerHTML;
                        document.getElementById('personSalary').value = selectedRow.cells[3].innerHTML;
                        console.log("list", list);
                        list.forEach(obj => {
                            if(obj["email"] === selectedRow.cells[2].innerHTML){
                                console.log("id in event", obj["id"]);
                                id = obj["id"];
                                flag = true;
                            }
                        })      
                    })
                }
            })
        }


        let form = document.querySelector("form");

        form.addEventListener("submit", function(event){
            event.preventDefault();
            if(flag === true){
                list.forEach(obj => {
                    if(obj["email"] === input().email){
                        id = obj["id"];
                        updateEmp(id);
                    }
                })
            }
            else{
                setEmpData();
            }
            location.reload();
        })

        setEventListener();




