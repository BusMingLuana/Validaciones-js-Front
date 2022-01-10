const formulario = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const descripcion = document.getElementById('descripcion')

formulario.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const usuarioValue = usuario.value.trim();  //El método trim elimina los espacios en blanco en ambos extremos del string
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const descripcionValue = descripcion.value.trim();

    if (usuarioValue === '') {
        setErrorFor(usuario, 'Debe contener más de 2 caracteres');
    }else{
        setSuccessFor(usuario)
    }


    if (emailValue =='') {
         setErrorFor(email, 'Ingresa un email')
    }else if(!isEmail(emailValue)){
         setErrorFor(email, 'Ingresa un email valido')
    } else{
        setSuccessFor(email)
    }

    if (passwordValue === '' && passwordValue.length < 8) {
        setErrorFor(password, 'La contraseña debe contener al menos 8 caracteres');
    }else{
        setSuccessFor(password)
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Repite la contraseña');
    }else if(passwordValue !== password2Value){
         setErrorFor(password2, 'Las contraseñas deben coincidir')
    
    }else{
        setSuccessFor(password2)
    }



    if (descripcionValue === '') {
        setErrorFor(descripcion, 'Debe contener más de 20 caracteres');
    }else{
        setSuccessFor(descripcion)
    }
}




function setErrorFor(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;  
}

function setSuccessFor(input) {
    const fomrControl = input.parentElement;
    fomrControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

