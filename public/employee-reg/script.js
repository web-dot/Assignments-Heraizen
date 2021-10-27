
/*
Steps to Program
main->
1]onsubmit
    1.1]display
    1.2]put in LS
2]display from LS
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
//2]display from LS
display(empArr);

form.addEventListener('submit', function onSubmit(e){
    e.preventDefault();
    //getting Employee object
    var Employee = getObject();
    console.log(Employee);
    //1.1.3]put in arr
    empArr.push(Employee);
    console.log(empArr);
    display(empArr);
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

function display(arr){
    let content = nameTable.innerHTML;
    for(var i=0; i<arr.length; i++){
        //let content = nameTable.innerHTML;
        content = content + '<tr><td>'+ arr[i]["name"]+'</td><td>'+ arr[i]["email"]+'</td><td>'+ arr[i]["salary"]+'</td><td>' + '<button class="upBt">update</button><button class="delBt">delete</button></tr>';
        nameTable.innerHTML = content;
        personName.value ='';
        personEmail.value ='';
        personSalary.value = '';    
    
    }
}






