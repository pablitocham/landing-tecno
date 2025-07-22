document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('toggleMenu');
    const links = document.querySelector('.links');
    const linkItems = document.querySelectorAll('.links a')

    toggleButton.addEventListener('click', () => {
        links.classList.toggle("show");
    });

    linkItems.forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('show')
        })
    })
});

const imagenes = [
    {
        "url": "img/note.jpg",
        "nombre": "Mac Ebook",
        "descripcion": "En oferta, ideal para trabajar y jugar"

    },

    {
        "url": "img/pack.png",
        "nombre": "Iphone 16",
        "descripcion": "Pack por 6 para empresas con 20% de descuento"

    },

    {
        "url": "img/note3.png",
        "nombre": "Gfast",
        "descripcion": "Ideal para iniciarte al Desarrollo web"

    },

    {
        "url": "img/note4.png",
        "nombre": "Mac Ebook",
        "descripcion": "En oferta, ideal para trabajar y jugar"

    },

    {
        "url": "img/note5.png",
        "nombre": "Touch",
        "descripcion": "Motebook con pantalla táctil 15% de descuento"

    }
]

const atras = document.getElementById('atras');
const adelante = document.getElementById('adelante');
const img = document.getElementById('img');
const puntos = document.getElementById('puntos')
const texto = document.getElementById('texto')
let actual = 0

function actualizarCarrusel() {
    img.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="${imagenes[actual].nombre}" loading="lazy">`;
    texto.innerHTML = `<h3>${imagenes[actual].nombre}</h3><p>${imagenes[actual].descripcion}</p>`;

    puntos.innerHTML = '';
    for (let index = 0; index < imagenes.length; index++) {
        if (index === actual) {
            puntos.innerHTML += '<span class="activo>•</span>';
        } else {
            puntos.innerHTML += '<span>•</span>';
        }
    }
    const puntosSpan = puntos.querySelectorAll('span')
    puntosSpan.forEach((punto, index) => {
        punto.addEventListener('click', () => {
            actual = index;
            actualizarCarrusel()
        })
    })
}

function irImg(indice) {
    actual = indice
    actualizarCarrusel()
}

atras.addEventListener('click', () => {
    actual--;
    if (actual < 0) actual = imagenes.length - 1;
    actualizarCarrusel();
});

adelante.addEventListener('click', () => {
    actual++;
    if (actual >= imagenes.length) actual = 0;
    actualizarCarrusel();
});

actualizarCarrusel();


