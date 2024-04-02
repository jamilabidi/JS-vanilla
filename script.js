// document.addEventListener("DOMContentLoaded", (event) => { })



document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
const feedblock = document.querySelector(".test");
    console.log("feedblock", feedblock)


//
// const books = [{
//     id: 1,
//     title: "book 1"
// }, {
//     id: 2,
//     title: "book 2"
// }, {
//     id: 3,
//     title: "book 3"
// }]


// let data = {}
async function logBooks() {
    const response = await fetch("https://fakerapi.it/api/v1/books?_quantity=5");
    const loggedBooks = await response.json();

    return loggedBooks

}
logBooks()
    .then(resp => {
        console.log(resp.data);
        displaybook(resp.data);
    })

// console.log("data : ", data)








const displaybook = (books) => {
    console.log(books)
    const booksNode = books.map((book, index) => {
        return createBookElement(book, index);
    });
    console.log(booksNode);
    console.log(feedblock);
    feedblock.append(...booksNode);
};
const createBookElement = (book, index) => {
    const div = document.createElement("div");
    div.classList.add('feed')
    div.id = "feed#"
    console.log(book);
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
