// varibales for inputs data
const personName = document.querySelector("#name");
const personAge = document.querySelector("#age");
const personQualification = document.querySelector("#qualification");
const personPanNo = document.querySelector("#pan");

const add = document.querySelector("#add_btn");

// variable for table body
const tableBody = document.querySelector("#table_body");


// addEventListener for taking inputs.
add.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(personName.value);
  console.log(personAge.value);
  console.log(personQualification.value);
  console.log(personPanNo.value);

  tableBody.innerHTML += `<tr>
    <td>${personName.value}</td>
    <td>${personAge.value}</td>
    <td>${personQualification.value}</td>
    <td>${personPanNo.value}</td>
    <td>
        <button class="btn">edit</button>
        <button class="btn">delete</button>
    </td>
    </tr>`;
    personName.value = '';
    personAge.value = '';
    personQualification.value = '';
    personPanNo.value = '';
});
