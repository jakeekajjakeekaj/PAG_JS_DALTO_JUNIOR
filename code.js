const contenedor = document.querySelector(".flex-container");   //SEÑALA AL CONTENEDOR "MAESTRO"

// document.querySelector(".send-button").value = "COMPRAR";
// O TAMBIEN SE PUEDE HACER DE FORMA:
const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

function crearLlave(nombre, modelo, precio) {   //GENERA LAS LLAVES
    img = "<img class='llave-img' src= 'images/llave.png'>";
    nombre = `<h2><u>Llave ${nombre}</u></h2>`;
    modelo = `<h3>Modelo: ${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

// const llave = crearLlave("llave1", "modelo x", 33);

// contenedor.innerHTML += llave[0] + llave[1] + llave[2] + llave[3];  //El += se agrega para dentro del contenedor, sumar lo que se está indicando

changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();   //CREA UN FRAGMENTO DEL DOM
for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.floor(Math.random()*30);    //GENERA EL MODELO DE 0 A 30
    let precioRandom = Math.floor(Math.random()*(100 - 50) + 50);   //GENERA EL PRECIO DE 50 A 100
    let llave = crearLlave(i, modeloRandom, precioRandom);  //SE DA LA ORDEN DE GENERAR LA LLAVE
    let div = document.createElement("DIV");    //ES LA ETIQUETA QUE SE TENDRÁ, ES DECIR UN DIV, ARTICLE, HEADER, ETC.
    div.addEventListener("click", ()=>{changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);    //A LA VARIABLE div CREADA, SE LE AGREGA item-0, ETC Y UN flex-item
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];  //SE AGREGA EL HTML AL DIV
    // contenedor.innerHTML += div; //De esta manera se imprime en el DOM únicamente lo que es "object HTMLDivElement", es decir que no se imprime el contenido
    // contenedor.innerHTML += llave[0] + llave[1] + llave[2] + llave[3];   //Esta es una manera de imprimir todo, pero solo imprimirlo, no se almacena en ingún lugar
    documentFragment.appendChild(div);  //AL documentFragment CREADO PREVIAMENTE, SE LE SUMA EL CONTENDIO DEL div Y A DIFERENCIA DEL DIV, AQUI SE LE VAN SUMANDO LOS HIJOS
}

contenedor.appendChild(documentFragment);   //SE INDICA QUE EN EL CONTENEDOR "MAESTRO", SE AGREGUEN LOS HIJOS DEL documentFragment, ES DECIR TODO LO CREADO CON LOS DIV