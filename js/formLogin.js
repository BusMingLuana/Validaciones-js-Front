let formulario = document.getElementById('formulario');
let inputs = document.querySelectorAll('#formulario .formulario__grupo');


function validar(){
    if(document.formulario.nombreSelect.
    value == 0||
    document.formulario.nombreSelect.
    value== "")
      {
       alert("Selecciona Una opción");
       document.formulario.nombreSelect.
         focus();
      }
    }


//expresiones regulares en js 
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos y de 2 a 40 caracteres.
	apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
	password: /^.{8,20}$/, // 8 a 20 digitos. //faltaria que lleve una mayuscula, una minuscula, un número y un caracter especial
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{8,14}$/ ,// 7 a 14 numeros.
}

const campos = {
    nombre: false,
    apellido: false,
    password: false,
    correo: false,   
   telefono:false,
}

const validarFormulario = (e) =>{

   switch (e.target.name) {
       case 'name':   
            validarCampo(expresiones.nombre,e.target, 'nombre')
           break;

        case 'apellido':  
        validarCampo(expresiones.apellido,e.target, 'apellido') 
           break;

           
        case 'password':  
        validarCampo(expresiones.password,e.target, 'password') 
           break;

      
        case 'email':   
        validarCampo(expresiones.correo,e.target, 'correo') 
           break;

           
           case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;


       default:
           break;
   }
   
}


const validarCampo = (expresion, input, campo) => {
    
    if (expresion.test(input.value)) { 
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo]= true;

     }else{
         document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
         document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
         document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
         document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
         document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
         campos[campo]= false;
     }
}
 
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario) 
})

formulario.addEventListener('submit', function (e) {
    e.preventDefault()
  if (campos.nombre && campos.apellido && campos.correo && campos.password && campos.telefono) {
      formulario.reset();

      document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
      setTimeout(() => {
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 3000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
    });
    
  }
  else{
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
  }
}) 


