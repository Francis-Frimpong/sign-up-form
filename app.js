//check if all input fields are empty
//if user clicks on submit button while a field or all fields are empty
// display error message
//prevent form from submitting
//submit form only if all field are filled correctly

const inputs = document.querySelectorAll("input")
const errorMsg = document.querySelectorAll('h6')
let isEmpty = false;

const formValidation = (input, errorMsg, isEmpty, event) => {
    if (input.value.trim() === ""){
        isEmpty = true;
        input.classList.add('validationStyles')
        errorMsg.forEach(message => {
            message.style.display = 'block';
        })
    }

    return event.preventDefault()

    // if(isEmpty){
    //     event.preventDefault()
    // }
}


document.querySelector("form").addEventListener("submit", (event) => {
    inputs.forEach(input => formValidation(input, errorMsg, isEmpty, event));

})
