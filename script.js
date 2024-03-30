console.log('testing')

function textToTable(event){
    event.preventDefault();
    console.log('textToTable')
    let firstName = document.getElementById('firstName').value;
    console.log(firstName)
    let lastName = document.getElementById('lastName').value;
    console.log(lastName)
    let id = document.getElementById('id').value;
    console.log(id)
    let title = document.getElementById('title').value;
    console.log(title)
    let salary = document.getElementById('salary').value;
    console.log(salary)

  let newEmployee= `
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${id}</td>
      <td>${title}</td>
      <td>${salary}</td>
      <td><button onclick="delete()">❌</button></td>
    </tr>`
    document.getElementById('employeeTable').innerHTML += newEmployee
    console.log(document.getElementById('employeeTable'))
    console.log(newEmployee)
    document.getElementById('fistName').value=""
    document.getElementById('lastName').value=""
    document.getElementById('id').value=""
    document.getElementById('title').value=""
    document.getElementById('salary').value=""

  
  } 
  