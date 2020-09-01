const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const radioInput = document.getElementById('genderRadio');
const text = document.getElementById('textBox');
const form = document.getElementById('myForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkForBlank();
})


function checkForBlank(){
    const fNameValue = fName.value.trim();
    const lNameValue = lName.value.trim();

    if(fNameValue === '') {
        setErrorFor(fName);
    } else {
        setSuccessFor(fName);
    }

    if(lNameValue === '') {
        setErrorFor(lName);
    } else {
        setSuccessFor(lName);
    }
}

function setErrorFor(input){
    const textInput = input.parentElement;
    textInput.className = 'textInput error';
}

function setSuccessFor(input) {
    const textInput = input.parentElement;
    textInput.className = 'textInput success';
}


