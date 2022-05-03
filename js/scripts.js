const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title:"Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title:"Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title:"Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title:"Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title:"Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
    ];

cardContent.forEach((el)=>{
    // asignanse valores ó template
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    // clonan o template e agregase ó 'fragment'
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

// agrégase o fragment ó div
// usando fragment evítase "machacar" o dom e solo se fai unha modificación
// agregando todos os cards de unha vez. como analoxía, facer un insert por elemento
// do array ou facer un insert con todos os elementos de unha vez.
$cards.appendChild($fragment);
