const Name = document.getElementById('name')
const date = document.getElementById('date')
const body = document.getElementById('body')
const email = document.getElementById('email')
const checkbox = document.getElementById('check-me')
const form = document.getElementById('form')
const results = document.getElementById('results')
const select = document.getElementById('select-option')
// const radioBtnValue = document.querySelector('input[type=radio]:checked')
let isFeedback = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();  
  const radioBtnValue = document.myForm.language.value
    validateForm()
    if (isFeedback === true) {
        return;
    } else {
        results.innerHTML = `<ul>
                        <li>Name: ${Name.value}</li>
                        <li>Email: ${email.value}</li>
                        <li>Date: ${date.value}</li>
                        <li>Body: ${body.value}</li>
                         <li>Select: ${select.value}</li>    
                        <li>Language: ${radioBtnValue}</li>
                         </ul>`

        return true;

    }

});

function validateForm() {


    if (email.value == "") {
        email.style.border = "2px solid red"
        isFeedback = true
    } else {
        isFeedback = false
    }

    if (body.value == "") {
        body.style.border = "2px solid red"
        isFeedback = true
    } else {
        isFeedback = false
    }

    if (checkbox.checked == false) {
        checkbox.style.outline = "2px solid red"
        isFeedback = true
    } else {
        isFeedback = false
    }


}
