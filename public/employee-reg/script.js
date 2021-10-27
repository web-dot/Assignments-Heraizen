
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
const nameTable = document.getElementById('nameTable');
//grab the form
const form = document.querySelector("form");
//grab the delete btn
const delBtn = document.querySelector(".delBt");
//2]display from LS
displayLS(empArr);

form.addEventListener('submit', function onSubmit(e){
    e.preventDefault();
    //getting Employee object
    var Employee = getObject();
    console.log(Employee);
    //1.1.3]put in arr
    empArr.push(Employee);
    console.log(empArr);
    display();
    //1.2]put in LS
    localStorage.setItem('employees', JSON.stringify(empArr));
});

//1.1.2]function to create object
function getObject(){
    var Employee = {};
    Employee["name"] = document.getElementById('personName').value;
    Employee["email"] = document.getElementById('personEmail').value;
    Employee["salary"] = document.getElementById('personSalary').value;
    return  Employee;
}

function display(){
        var Employee = getObject();
        let content = nameTable.innerHTML;
        content = content + '<tr><td>'+ Employee["name"]+'</td><td>'+ Employee["email"]+'</td><td>'+ Employee["salary"]+'</td><td>' + '<button class="upBt">update</button><button class="delBt">delete</button></tr>';
        nameTable.innerHTML = content;
        personName.value ='';
        personEmail.value ='';
        personSalary.value = '';    
}

function displayLS(arr){
    let content = nameTable.innerHTML;
    for(var i=0; i<arr.length; i++){
        content = content + '<tr><td>'+ arr[i]["name"]+'</td><td>'+ arr[i]["email"]+'</td><td>'+ arr[i]["salary"]+'</td><td>' + '<button class="upBt">update</button><button class="delBt">delete</button></tr>';
        nameTable.innerHTML = content;
    }
}


var setEventListener = function(){
    nameTable.addEventListener('click', function(e){
        var elementClicked = e.target;
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
    });
}
setEventListener();


