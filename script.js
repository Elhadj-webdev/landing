function validateForm(){
const inputEmail = document.getElementById('email')
const inputError = document.getElementById('email-error')
if( inputEmail.value === ''){
    inputError.textContent = 'Le champ ne doit pas être vide'
    inputError.style.textAlign = 'center'
    inputError.style.color = 'red'
    inputError.style.fontSize = '20px'
}
else if(inputEmail.value.length < 6 ){
    inputError.textContent = 'Le nombre de caractère doit être superieur a 6'
    inputError.style.textAlign = 'center'
    inputError.style.color = 'red'
    inputError.style.fontSize = '20px'
}
else{
    inputError.textContent = ''
    
}

inputEmail.addEventListener('input', () => {
    inputError.style.display = inputEmail.value === '' ? 'block' : 'none';
});

inputEmail.addEventListener('blur', () => {
    inputError.style.display = inputEmail.value === '' ? 'block' : 'none';
});


const textmessage = document.getElementById('message')
const texterror = document.getElementById('message-error')
if( textmessage.value === ''){
    texterror.textContent = 'Le champ message ne doit pas être vide'
    texterror.style.textAlign = 'center'
    texterror.style.color = 'red'
    texterror.style.fontSize = '20px'
    alert('votre message a été envoyer avec succès')
}
else{
    texterror.textContent = ''
}
textmessage.addEventListener('input', () => {
    texterror.style.display = textmessage.value === '' ? 'block' : 'none';
});

textmessage.addEventListener('blur', () => {
    texterror.style.display = textmessage.value === '' ? 'block' : 'none';
});

return false
}