console.log('testing')
let totalMonthlySalary= 0
//puts info into the table
function textToTable(event){
    event.preventDefault(); //prevents form from clearing 
    console.log('textToTable')
    let firstName = document.getElementById('firstName').value;
    console.log('adds employees first name',firstName)
    let lastName = document.getElementById('lastName').value;
    console.log('adds employees last name',lastName)
    let id = document.getElementById('id').value;
    console.log('id',id)
    let title = document.getElementById('title').value;
    console.log('title',title)
    let salary = document.getElementById('salary').value;
    console.log('salary',salary)

    //makes string text salary into a namber.
    salary = Number(salary)
    console.log(salary)

    // takes individial salary and adds to total salary pool
    totalMonthlySalary = totalMonthlySalary + salary; 
    console.log(totalMonthlySalary)

    //divide total salary by 12
    let monthlyCost = totalMonthlySalary / 12
    console.log("total devided by 12",monthlyCost)
    //needs to log monthly cost to footerget 
    //gets footer\
    let monthlyBucket = document.getElementById("monthlyCost");
    monthlyBucket.textContent = '$' + monthlyCost.toFixed(2);
    let foot = document.getElementById("footer");
     if (monthlyCost > 20000) {
        foot.classList.toggle("over-budget");
     }
    console.log("footer",monthlyBucket) 

    //css class change color  If the total monthly cost **exceeds $20,000**, apply an `over-budget` CSS class to the footer element.
    //* When applied, this CSS class should provide a clear visual indication that the monthly cost has been exceeded. (This could be as simple as turning the footer text red.) -->
    
//add new employee onto a new table row.. string interpelation 
  let newEmployee=`
    <tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${id}</td>
      <td>${title}</td>
      <td>${salary}</td>
      <td><button onclick="deleteEmployee(event)">❌</button></td>
    </tr>`
    //clears the imput field back to an empty string
    document.getElementById('employeeTable').innerHTML += newEmployee
    console.log(document.getElementById('employeeTable'))
    console.log(newEmployee)
    document.getElementById('firstName').value=""
    document.getElementById('lastName').value=""
    document.getElementById('id').value=""
    document.getElementById('title').value=""
    document.getElementById('salary').value=""
    
}
function deleteEmployee(event){
     let toDelete = event.target.parentElement.parentElement;
     toDelete.remove();
     }
  
   

  