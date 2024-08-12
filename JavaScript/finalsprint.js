fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    // Do something with the JSON data
    // Loop through each record and log key-value pairs to the console.
    data.forEach((record) => {
      console.log(`First Name: ${record.firstName}`);
      console.log(`Name: ${record.name}`);
      console.log(`Age: ${getAllAges(record.birthDate)}`);
      console.log(`Job: ${showJob(record)}`);
      console.log(`Salary: ${formatSalary(record.salary)}`);
      
   
      const dataDiv = document.createElement('div');
      dataDiv.className = 'record';
      dataDiv.innerHTML = `
        <hr/>
        <ul>
        <li> First Name: ${record.firstName}</li>
        <li> Full Name: ${record.name}</li>
        <li> Age: ${getAllAges(record.birthDate)}</li>
        <li> Job: ${showJob(record)}</li>
        <li> Salary: ${formatSalary(record.salary)}</li>
        </ul>
        <hr/>
        `;
        document.body.appendChild(dataDiv);
})

});

// Functions to return the characters salary, age and job titles. 

function formatSalary(amount) {
  const number = parseFloat(amount)
  if (isNaN(number)) {
    return 'Invalid Salary';
  }
  return `$${number.toLocaleString()}`;
}

function showJob(data){
  switch(data.firstName){
    case "Chuck": 
      return`${data.firstName} is a Technician at the Buy More.`;
    case "Sarah":
      return `${data.firstName} is a Secret Agent for the CIA.`;
    case "John": 
      return`${data.firstName} is a Secret Agent for the NSA.`;
    case "Ellie":
      return `${data.firstName} is a Doctor.`;
    case "Morgan": 
      return`${data.firstName} is a Sales Associate at the Buy More.`;
    default:
      return `${data.firstName}'s information is not available.`;
  }
}

function getAllAges(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
   
}












