// document.addEventListener("DOMContentLoaded", (event) => { })

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//fonction qui va permettre de charger le DOM une fois la récuperation et mise en place effectuée
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
//on declare la div parente pour le reste du code
    const feedblock = document.querySelector(".test");

//métode iitiale pour récupérer les données
// let data = {}
// async function logBooks() {
//     const response = await fetch("https://fakerapi.it/api/v1/books?_quantity=5");
//     const loggedBooks = await response.json();
//     return loggedBooks
// }
// logBooks()
//     .then(resp => {
//         console.log(resp.data);
//         displaybook(resp.data);
//     })

//méthode plus simple et élégante: on fait un fetch avec promesse on reformat les données en json puis après on format les données en json et on utilise les données pour displaybook
    fetch("https://fakerapi.it/api/v1/books?_quantity=5").then(resp => {
        return resp.json();
    }).then(json => {
            console.log(json);
            displaybook(json.data);
        }
    )
//p^rend un tableau d'objet le map avec une fonction create book (voir plus loin) puis retourne le nouveau tableau d'aobjet à la variable feedblock
    const displaybook = (books) => {
        console.log(books)
        const booksNode = books.map((book, index) => {
            return createBookElement(book, index);
        });
        feedblock.append(...booksNode);
    };
//fonction qui utilise les données json pour creer des éléments html
    const createBookElement = (book, index) => {
        const div = document.createElement("div");
        div.classList.add('feed')
        div.id = "feed#"
        div.innerHTML = ` 
            <div class="upperfeed" id="uppperfeed#">
                <div class="ul1">
                    <ul>
                        <li><span class="${book.id}"></span> <p>${book.title}</p></li>
                        <li><span class="${book.id}"></span> <p>${book.author}</p></li>
                        <li><span class="${book.id}"></span> <p>${book.publisher}</p></li>
                    </ul>
                </div>
                <div class="ul2">
                    <ul>
                        <li>genre : ${book.genre}</li>
                        <li>ISBN: ${book.isbn}</li>
                        <li>published date: ${book.published}</li>
                    </ul>
                </div>
                <div class="image">
                    <div>
                        <img src="http://via.placeholder.com/240x240">
                    </div>
                </div>
            </div>
            <div class="infFeed">
                <div id="description">${book.description}</div>
            </div>
         `;
        return div;
    };
})
