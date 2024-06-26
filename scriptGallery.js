document.addEventListener("DOMContentLoaded", async (event) => {

    const imgblocks = document.getElementById("container");
    const toggleImg = document.getElementById("switch");
    const form = document.querySelector("form");
    let mosaicBoolean = document.getElementById("switch").value === "true" ? true : false;

    const imgFetch = fetch('https://picsum.photos/v2/list')
        .then(resp => resp.json())
        .then(json => {
            displayImgs(json)
            // console.log(json);
        })

    const displayImgs = (arrayObjects) => {
        const imgsNode = arrayObjects.map((img) => {
            return createImgElement(img);
        });
        imgblocks.append(...imgsNode);
    }

    const createImgElement = (img) => {
        const div = document.createElement("div")
        div.classList.add('feed')
        div.classList.add('imgSolo')
        div.innerHTML = `
    <div >
    <img src="${img.download_url}" style="max-width: 25rem"/>
    </div>`
        return div;
    }

    const displayToColumn = () => {
        imgblocks.classList.remove('imgContainer');
        imgblocks.classList.add('imgColumn');
        mosaicBoolean = false;
    }
    const displayToMosaic = () => {
        imgblocks.classList.remove('imgColumn');
        imgblocks.classList.add('imgContainer');
        mosaicBoolean = true;
    }

    toggleImg.onclick = () => {
        if (mosaicBoolean === true) {
            displayToColumn();
        } else {
            displayToMosaic();
        }
    }

    // displayToMosaic();
    form.addEventListener("submit", async event => {
        event.preventDefault();
        const formData = new FormData(form);
        const imgUpload = Object.fromEntries(formData.entries());
        const json = JSON.stringify(imgUpload);

        let imgUploadBlock = createImgElement(imgUpload);
        console.log(imgUploadBlock);
        createDeleteButton(imgUploadBlock);
        console.log(imgUploadBlock);
        imgblocks.prepend(imgUploadBlock);
///=======on met en place l'action du bouton delete
        let buttonDelete = document.getElementById("btn-close");
        buttonDelete.addEventListener("click", event => {
            imgblocks.removeChild(event.target.parentNode.parentNode.parentNode);
        })


    })

    const createDeleteButton = (div) => {
        const deleteButton = document.createElement("div")
        deleteButton.innerHTML = `
<!--        <button type="button" id="btn-close" className="btn-close">-->
<!--            <span className="icon-cross"></span>-->
<!--            <span className="visually-hidden">Delete</span>-->
<!--        </button>-->
<button class="noselect btn-close" id="btn-close"><span class="text">Delete</span><span class="icon">X</span></button>
        <span className="cross-stand-alone"></span>
        <span className="cross-1px"></span>`
        div.appendChild(deleteButton);
        return div;
    }

    const url = "https://api.nasa.gov/planetary/apod?api_key=PNzkVvhqAOv7czlOtmivyyGIDyY6r9EdVJecGBWt&count=5"

    let data;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselContainer=document.getElementById('carousel');
    let currentIndex = 0;

    const callApi = async (url) => {
        return await fetch(url)
    }

    await callApi(url)
        .then(resp => resp.json())
        .then(resp2 => data = resp2)


    const createImgCarouselElement = (img) => {
        const div = document.createElement("div");
        div.classList.add('carousel-container');
        div.style.display = 'none'
        div.innerHTML = `
    <div class="carousel-item">
    <img src="${img.url}" "/>
    </div>`
        console.log('div',div);
        return div;
    }

    function buildSlide(index,carouselItems) {
        const imgsNodeCarousel = carouselItems.map((img) => {
            return createImgCarouselElement(img);
        });
        carouselContainer.append(...imgsNodeCarousel);
        // Show the slide at the specified index
         imgsNodeCarousel[index].style.display = 'block';
         return imgsNodeCarousel;
    }

    function showSlide(index,imgsNodeCarousel) {
        // Hide all carousel items
        imgsNodeCarousel.forEach(item => {
            item.style.display = 'none';
        });
        // Show the slide at the specified index
        imgsNodeCarousel[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % imgsNodeCarousel.length;
        showSlide(currentIndex,imgsNodeCarousel);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + imgsNodeCarousel.length) % imgsNodeCarousel.length;
        showSlide(currentIndex,imgsNodeCarousel);
    }

// Show the first slide initially


// Set up event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', previousSlide);

    const imgsNodeCarousel=buildSlide(currentIndex,data);
    showSlide(currentIndex,imgsNodeCarousel);

})


