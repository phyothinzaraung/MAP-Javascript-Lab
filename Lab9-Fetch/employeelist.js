window.onload = function(){
    fetchEmployees();

    document.getElementById("refreshBtn").onclick = fetchEmployees;
}

function employeeView(emp) {
    let html = `
    <tr>
    <td>
    <img src='${emp.picture.medium}'>
    </td>
    <td>
    <b>${emp.name.first} ${emp.name.last}</b><br/>
    <p>phone: ${emp.phone}</p>
    <p>${emp.email}</p>
    </td>
    </tr>
    `
    return html;
}

async function fetchEmployees(){
    const response = await fetch('https://randomuser.me/api/?results=5');
    const employees = await response.json();
    
var html = "";
employees.results.forEach(emp => {
    html += employeeView(emp);
})

document.getElementById("employees").innerHTML = html;


}