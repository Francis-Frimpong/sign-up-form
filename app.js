//check if all input fields are empty
//if user clicks on submit button while a field or all fields are empty
// display error message
//prevent form from submitting
//submit form only if all field are filled correctly

const inputs = document.querySelectorAll("input")
const errorMsg = document.querySelectorAll('h6')
const emailInput = document.querySelector('input[type="email"]')

let isEmpty = false;
console.log();

const formValidation = (input, errorMsg, isEmpty, event) => {
    if (input.value.trim() === ""){
        isEmpty = true;
        input.classList.add('validationStyles');
        input.removeAttribute("placeholder");
        emailInput.setAttribute('placeholder', 'email@example/com');
        emailInput.classList.add('inputErr');
        
        errorMsg.forEach(message => {
            message.style.display = 'block';
        })
    }

    if(isEmpty){
        event.preventDefault()
    }
}


document.querySelector("form").addEventListener("submit", (event) => {
    inputs.forEach(input => formValidation(input, errorMsg, isEmpty, event));

})
