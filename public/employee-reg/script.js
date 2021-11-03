
/*
Steps to Program
main->
1]onsubmit
    1.1]display
    1.2]put in LS
2]display from LS
3]delete
    3.1]delete from array
    3.2]replace in LS
sub->
    1.1.1]create empty arr
    1.1.2]create object
    1.1.3]put in arr
    1.1.4]iterate arr and display(function)

*/

//1.1.1]if 'employees' exist in LS, get 'employees' else create empty arr 
var empArr = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')):[];

//grab table using id
const nameTable = document.getelementById('nameTable');
//grab the form
const form = document.querySelector("form");
//grab the delete btn
const delBtn = document.querySelector(".delBt");
//2]display from LS
displayLS(empArr);

//selected rows set to null
var selectedRow = null;

form.addeventListener('submit', function onSubmit(e){
    //debugger;
    e.preventDefault();
    var employee = getObject();
    if(selectedRow == null){
        console.log(employee);
        //1.1.3]put in arr
        empArr.push(employee);
        console.log(empArr);
        display();
        //1.2]put in LS
        localStorage.setItem('employees', JSON.stringify(empArr));
        
    }
    else{
        selectedRow.cells[0].innerHTML = employee["name"];
        selectedRow.cells[1].innerHTML = employee["email"];
        selectedRow.cells[2].innerHTML = employee["salary"];
        //update empArr
        for(var i=0; i<empArr.length; i++){
            if(selectedRow.cells[0].innerHTML === empArr[i]["name"]){
                console.log(empArr[i]);
                empArr.splice(i, 1, employee);
            }
        }
        console.log(empArr);
        //put back empArr in LS
        localStorage.setItem('employees', JSON.stringify(emp));
    }
    reset();
});

//1.1.2]function to create object
function getObject(){
    var employee = {};
    employee["name"] = document.getelementById('personName').value;
    employee["email"] = document.getelementById('personemail').value;
    employee["salary"] = document.getelementById('personSalary').value;
    return  employee;
}

function display(){
        var employee = getObject();
        let content = nameTable.innerHTML;
        content = content + '<tr><td>'+ employee["name"]+'</td><td>'+ employee["email"]+'</td><td>'+ employee["salary"]+'</td><td>' + '<button class="upBt">update</button><button class="delBt">delete</button></tr>';
        nameTable.innerHTML = content;
        personName.value ='';
        personemail.value ='';
        personSalary.value = '';    
}

function displayLS(arr){
    let content = nameTable.innerHTML;
    for(var i=0; i<arr.length; i++){
        content = content + '<tr><td>'+ arr[i]["name"]+'</td><td>'+ arr[i]["email"]+'</td><td>'+ arr[i]["salary"]+'</td><td>' + '<button class="upBt">update</button><button class="delBt">delete</button></tr>';
        nameTable.innerHTML = content;
    }
}

function reset(){
    document.getelementById("personName").value = "";
    document.getelementById("personemail").value = "";
    document.getelementById("personSalary").value = "";
}

var seteventListener = function(){
    nameTable.addeventListener('click', function(e){
        var elementClicked = e.target;
        if(elementClicked.className === 'delBt'){
        var row = elementClicked.parentNode.parentNode;
        nameTable.deleteRow(row.rowIndex);
        var empName = row.firstChild.innerHTML;
        for(var i=0; i<empArr.length; i++){
        if(empArr[i]["name"] === empName){
            empArr.splice(i, 1);
            }
        }
        localStorage.setItem('employees', JSON.stringify(empArr));
        console.log(empArr);
        }
        if(elementClicked.className === 'upBt'){
            elementClicked.addeventListener('click', function(event){
                selectedRow = elementClicked.parentNode.parentNode;
                document.getelementById('personName').value = selectedRow.cells[0].innerHTML;
                document.getelementById('personEmail').value = selectedRow.cells[1].innerHTML;
                document.getelementById('personSalary').value = selectedRow.cells[2].innerHTML;

            });
             var employee = getObject();
        }
    });
}
seteventListener();


