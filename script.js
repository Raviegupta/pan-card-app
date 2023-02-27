// variable for inputs
const personName = document.querySelector("#name");
const personAge = document.querySelector("#age");
const personQualification = document.querySelector("#qualification");
const personPanNo = document.querySelector("#pan");

const add = document.querySelector("#add_btn");


// varaible for table
const tableBody = document.querySelector("#table_body")


add.addEventListener('click', (e) => {
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
        <button class="btn edit">edit</button>
        <button class="btn delete">delete</button>
    </td>
    </tr>`

    personName.value = '';
    personAge.value = '';
    personQualification.value = '';
    personPanNo.value = '';

    
})



tableBody.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        console.log('click on delete')
        e.target.parentNode.parentNode.remove();

    }

    if(e.target.classList.contains('edit')) {
        console.log('click on edit')

        let personNameEdit = e.target.parentNode.parentNode.firstElementChild;
        let personAgeEdit = personNameEdit.nextElementSibling;
        let personQualificationEdit = personAgeEdit.nextElementSibling;
        let personPanNoEdit = personQualificationEdit.nextElementSibling;
        
        console.log(personNameEdit)
        console.log(personAgeEdit)
        console.log(personQualificationEdit)
        console.log(personPanNoEdit)

        personName.value = personNameEdit.innerText;
        personAge.value = personAgeEdit.innerText;
        personQualification.value = personQualificationEdit.innerText;
        personPanNo.value = personPanNoEdit.innerText;



    }

})

