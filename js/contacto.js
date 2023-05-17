function validarFormulario(){
  const form = document.getElementById("formulario");
  const nombreInput = document.getElementsByName("Nombre")[0].value;
  const apellidoInput = document.getElementsByName("Apellido")[0].value;
  const correoInput = document.getElementsByName("Correo")[0].value;
  const telInput = document.getElementsByName("telefono")[0].value;
  const mensajeError = document.getElementById("mensajeError");
  const mensajeExito = document.getElementById("mensajeExito");
  

  mensajeError.innerHTML = "";
  mensajeExito.innerHTML = "";

  //validar nombre
    const expresionRegularLetras = /^[A-Za-z]+$/;
    if (!expresionRegularLetras.test(nombreInput)) {
      mensajeError.innerHTML = "Por favor, ingresa un nombre válido que contenga solo letras.";
      return;}
    if (nombreInput.length < 2){
      mensajeError.innerHTML = "Por favor, ingresa un nombre valido con al menos dos caracteres.";
      return
    }
    //validar apellido
    if (!expresionRegularLetras.test(apellidoInput)) {
      mensajeError.innerHTML = "Por favor, ingresa un apellido válido que contenga solo letras.";
      return;}
    if (apellidoInput.length < 2){
      mensajeError.innerHTML = "Por favor, ingresa un apellido valido con al menos dos caracteres.";
      return
    }
    //validar correo
    const expresionRegularCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!expresionRegularCorreo.test(correoInput)) {
      mensajeError.innerHTML = "Por favor, ingresa un correo electrónico válido.";
      return;
    }
    
    //validar telefono
    const expresionRegularTelefono = /^\d{10}$/;
    console.log(expresionRegularTelefono.test(telInput))
    if (!expresionRegularTelefono.test(telInput)) {
      mensajeError.textContent = "Por favor, ingresa un número de teléfono válido de 10 dígitos. Sin el 0 adelante";
      return;
    }
    mensajeExito.innerHTML = "El formulario se envio correctamente.";
    //document.getElementById("formulario").submit();
    form.reset();

  }

