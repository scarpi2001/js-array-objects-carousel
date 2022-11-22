//dato un array contenente tot immagini creare uno slideshow

//crea array immagini
const imgs = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, 
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, 
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
];

//inserisci array immagini in html
//richiama container di figure
const container = document.getElementById("item_container");

for (let i = 0; i < imgs.length; i++) {
    let imgsElement = imgs[i];

    let figure = `
    <figure class="item">
                <img src="${imgsElement.image}" alt="">
                <div class="item_text">
                    <h1>${imgsElement.title}</h1>
                    <h3>${imgsElement.text}</h3>
                </div>
            </figure>
            
    `;

    container.innerHTML += figure;    
}

//crea array oggetti
const items = document.getElementsByClassName("item");
items[0].classList.add("active");
console.log(items);

//navigazione
//pulsante next
const next = document.querySelector(".next");
let active = 0;
next.addEventListener("click",
    function(){
        if (active < imgs.length -1) {
            //togli classe active elemento corrente
            items[active].classList.remove("active");
            //incrementa indice
            active++;
            //aggiungi classe active elemento successivo
            items[active].classList.add("active");

        } else {

            items[active].classList.remove("active");
            active = 0;
            items[active].classList.add("active");

        }
    }
);

//pulsante prev
const prev = document.querySelector(".prev");
prev.addEventListener("click",
    function(){
        if (active > 0) {
            //togli classe active elemento corrente
            items[active].classList.remove("active");
            //decrementa indice
            active--;
            //aggiungi classe active elemento precedente
            items[active].classList.add("active");
            
        } else {

            items[active].classList.remove("active");
            active = imgs.length - 1;
            items[active].classList.add("active");
    
        }
    }
);
