let cuadros = document.querySelectorAll('.h3');
for (let [i, cv] of cuadros.entries()) {
    cv.addEventListener('click', function h3remove() {
        cv.classList.toggle("h3remove")
    })
}
const contadorbtn = document.querySelector('.coffe-shop');
const contenedorMostrar = document.querySelector('.section-compras');

contadorbtn.addEventListener('click', () => {
    contenedorMostrar.classList.toggle('hiddenMostrar');

});

/*---------------------------------------- */


const prodAgregados = document.querySelector('.productosAgregados');
const infoProducto = document.querySelector('.productosyprecio');

const productoLista = document.querySelector('.anside_01');
let allProducts = []

const valorTotal = document.querySelector('.valorTotal');
const contadorShop = document.querySelector('.contador-shop');

const crossIcon = document.querySelector('.cross-icon');

productoLista.addEventListener('click', e =>{

    if(e.target.classList.contains('comprar')){
        const producto = e.target.parentElement;
        const info = {
            quantity: 1,
            title: producto.querySelector('.h3').textContent,
            price: producto.querySelector('.Price-one').textContent,
        };

        const mas = allProducts.some(producto => producto.title === info.title)
        
            if(mas){
                const productos = allProducts.map(producto => {
                    if(producto.title === info.title){
                        producto.quantity++;
                        return producto;
                    }else{
                        return producto;
                    }
            });
            allProducts = [...productos];
        }else{
            allProducts = [...allProducts, info]
        }

        agregarElemento();
    }
});

// productoLista.addEventListener('click', (e) =>{
//     if(e.target.classList.contains('cross-icon')){
//         const product = e.target.parentElement;
//         const title = product.querySelector('.productosCafeteria').textContent;

//         allProducts = allProducts.filter(
//             info => info.title !== title
//         );
        
//     agregarElemento()
//     }
// });
productoLista.addEventListener('click', (e) =>{
    if(e.target.classList.contains('icon')){
        console.log('is icon')
        const productos = e.target.parentElement;
        const product = productos.parentElement;
        const title = product.querySelector('.productosCafeteria').textContent;

        allProducts = allProducts.filter(
            info => info.title !== title
        );
        
    agregarElemento()
    }if(e.target.classList.contains('cross-icon')){
        console.log('is cross-icon')
        const product = e.target.parentElement;
        const title = product.querySelector('.productosCafeteria').textContent;

        allProducts = allProducts.filter(
            info => info.title !== title
        );
        
    agregarElemento()
    }
    }
);








const agregarElemento = () =>{
    prodAgregados.innerHTML = '';
    let total = 0; 
    let totaldeProductos = 0;
    
    allProducts.forEach(info =>{
        const infoProducto = document.createElement('span')
        infoProducto.classList.add('productosyprecio')
        infoProducto.innerHTML = 
        `
            <p class='cantidadDeProducto'>${info.quantity}</p>
            <p class="productosCafeteria">${info.title}</p>
            <a class="productoscreado">$${(info.quantity * info.price.slice(1))}</a>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="cross-icon" > 
            <path class="icon" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
            </svg>
        `

        prodAgregados.append(infoProducto);

        total = total + parseInt(info.quantity * info.price.slice(1))

    });
    valorTotal.innerText = `$${total}`
    contadorShop.innerText = `$${total}`
}


