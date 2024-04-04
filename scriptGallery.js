document.addEventListener("DOMContentLoaded", (event) => {
    const imgFetch = fetch('https://picsum.photos/v2/list')
        .then(resp => resp.json())
        .then(json => {
            console.log(json);
        })

    console.log(imgFetch);
})
