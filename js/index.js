window.addEventListener('load', function () {
    


    formulario.addEventListener('submit', function (e) {
        e.preventDefault();


        let campoNombre = document.getElementById('name')

         if (campoNombre.value == ""  || campoNombre.value.length <= 1 ) {
       
            document.querySelector(`#grupo__nombre .formulario__input-error`).classList.add('formulario__input-error-activo');
            document.querySelector(`#grupo__nombre i`).classList.add('fa-times-circle');
            document.getElementById(`grupo__nombre`).classList.add('formulario__grupo-incorrecto');
         } else  {
            document.querySelector(`#grupo__nombre .formulario__input-error`).classList.remove('formulario__input-error-activo');
            document.querySelector(`#grupo__nombre i`).classList.remove('fa-times-circle');
           document.getElementById(`grupo__nombre`).classList.add('formulario__grupo-correcto');
           document.querySelector(`#grupo__nombre i`).classList.add('fa-check-circle');
         }



         let campoDescripcion= document.getElementById('descripcion')

         if (campoDescripcion.value == "" ||campoDescripcion.value.length < 2 ) {
            document.querySelector(`#grupo__descripcion .formulario__input-error`).classList.add('formulario__input-error-activo');
            document.querySelector(`#grupo__descripcion i`).classList.add('fa-times-circle');
            document.getElementById(`grupo__descripcion`).classList.add('formulario__grupo-incorrecto');
         } else  {
            document.querySelector(`#grupo__descripcion .formulario__input-error`).classList.remove('formulario__input-error-activo');
            document.querySelector(`#grupo__descripcion i`).classList.remove('fa-times-circle');
           document.getElementById(`grupo__descripcion`).classList.add('formulario__grupo-correcto');
           document.querySelector(`#grupo__descripcion i`).classList.add('fa-check-circle');
         }



         let campoCategoria= document.getElementById('nombreSelect')

         if (campoCategoria.value == "" ||campoCategoria.value == 0 ) {
            document.querySelector(`#grupo__categoria .formulario__input-error`).classList.add('formulario__input-error-activo');
            document.querySelector(`#grupo__categoria i`).classList.add('fa-times-circle');
            document.getElementById(`grupo__categoria`).classList.add('formulario__grupo-incorrecto');
         } else  {
            document.querySelector(`#grupo__categoria .formulario__input-error`).classList.remove('formulario__input-error-activo');
            document.querySelector(`#grupo__categoria i`).classList.remove('fa-times-circle');
           document.getElementById(`grupo__categoria`).classList.add('formulario__grupo-correcto');
           document.querySelector(`#grupo__categoria i`).classList.add('fa-check-circle');
         }



         let campoSabores= document.getElementById('saboresSelect')

         if (campoSabores.value == "" ||campoSabores.value == 0 ) {
            document.querySelector(`#grupo__sabores .formulario__input-error`).classList.add('formulario__input-error-activo');
            document.querySelector(`#grupo__sabores i`).classList.add('fa-times-circle');
            document.getElementById(`grupo__sabores`).classList.add('formulario__grupo-incorrecto');
            
         } else  {
            document.querySelector(`#grupo__sabores .formulario__input-error`).classList.remove('formulario__input-error-activo');
            document.querySelector(`#grupo__sabores i`).classList.remove('fa-times-circle');
           document.getElementById(`grupo__sabores`).classList.add('formulario__grupo-correcto');
           document.querySelector(`#grupo__sabores i`).classList.add('fa-check-circle');
         }


         let campoStock = document.getElementById('stock')

         if (campoStock.value == "" ||campoStock.value <= 0 ) {
            document.querySelector(`#grupo__stock .formulario__input-error`).classList.add('formulario__input-error-activo');
            document.querySelector(`#grupo__stock i`).classList.add('fa-times-circle');
            document.getElementById(`grupo__stock`).classList.add('formulario__grupo-incorrecto');
         } else {
            document.querySelector(`#grupo__stock .formulario__input-error`).classList.remove('formulario__input-error-activo');
            document.querySelector(`#grupo__stock i`).classList.remove('fa-times-circle');
           document.getElementById(`grupo__stock`).classList.add('formulario__grupo-correcto');
           document.querySelector(`#grupo__stock i`).classList.add('fa-check-circle');
         }


         let campoPrecio = document.getElementById('precio')

         if (campoPrecio.value == "" ||campoPrecio.value <= 0 ) {
            document.querySelector(`#grupo__precio .formulario__input-error`).classList.add('formulario__input-error-activo');
            document.querySelector(`#grupo__precio i`).classList.add('fa-times-circle');
            document.getElementById(`grupo__precio`).classList.add('formulario__grupo-incorrecto');
         } else {
            document.querySelector(`#grupo__precio .formulario__input-error`).classList.remove('formulario__input-error-activo');
            document.querySelector(`#grupo__precio i`).classList.remove('fa-times-circle');
           document.getElementById(`grupo__precio`).classList.add('formulario__grupo-correcto');
           document.querySelector(`#grupo__precio i`).classList.add('fa-check-circle');
         }
    })
})


