var selectedRow = null

let empArray = localStorage.getItem('emps') ? JSON.parse(localStorage.getItem('emps')):[];

function onFormSubmit() {
    if (validate()) {
        var Employee = readFormData();
        console.log(Employee);
        if (selectedRow == null){
            insertNewRecord(Employee);
            empArray.push(Employee);
            localStorage.setItem('emps', JSON.stringify(empArray));
            console.log(empArray);
        }
        else
            updateRecord(Employee);
        resetForm();
    }
}



function readFormData() {
    var Employee = {};  //creating empty Employee object literal
    //setting Employee values using bracket notation 
    Employee["fullName"] = document.getElementById("fullName").value;
    Employee["email"] = document.getElementById("email").value;
    Employee["salary"] = document.getElementById("salary").value;
    return Employee;
}

function insertNewRecord(data) {

    //getting hold of table body
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];

    //inserting a new row in table
    var newRow = table.insertRow(table.length);

    //inserting new cell in row
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    //inserting new cell row
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;

    //inserting new cell row
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    //inserting new cell row
    cell4 = newRow.insertCell(3);
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(Employee) {
    selectedRow.cells[0].innerHTML = Employee.fullName;
    selectedRow.cells[1].innerHTML = Employee.email;
    selectedRow.cells[2].innerHTML = Employee.salary;
}


  



function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        console.log(row.firstChild.innerHTML);
        var empName = row.firstChild.innerHTML;
        for(var i=0; i<empArray.length; i++){
            if(empArray[i]["fullName"] === empName){
                empArray.splice(i, 1);
            }
        }
        localStorage.setItem('emps', JSON.stringify(empArray));
        console.log(empArray);  
        resetForm();
    }
}



function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}