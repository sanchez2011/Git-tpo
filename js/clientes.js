function buscarCliente(){

    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data =>{
        const cliente = data.results[0];
        console.log(cliente);
        displayCliente(cliente);
    })
    .catch(err => console.log(err))

    function displayCliente(cliente){
        const nombre = document.getElementById("nombre");
        const genero = document.getElementById("genero");
        const email = document.getElementById("email");
        const telefono = document.getElementById("telefono");
        const pais = document.getElementById("pais");
        const imagen = document.getElementById("imagen");

        imagen.setAttribute("src", `${cliente.picture.large}`);
        nombre.innerHTML = `${cliente.name.title} ${cliente.name.first} ${cliente.name.last}`;
        if(cliente.gender == "male"){
            genero.innerHTML = `Masculino`;
        }else {
            genero.innerHTML = `Femenino`;
        }
        email.innerHTML = `${cliente.email}`;
        telefono.innerHTML = `${cliente.phone}`;
        pais.innerHTML = `${cliente.location.city} " - " ${cliente.location.country}`;
    }
    
}