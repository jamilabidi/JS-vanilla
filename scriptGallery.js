document.addEventListener("DOMContentLoaded", (event) => {

    const imgblocks = document.getElementById("container");
    const toggleImg =document.getElementById("switch");
    let mosaicBoolean=document.getElementById("switch").value==="true"? true:false;
    console.log(mosaicBoolean);

    const imgFetch = fetch('https://picsum.photos/v2/list')
        .then(resp => resp.json())
        .then(json => {
            displayImgs(json)
            // console.log(json);
        })

    const displayImgs = (arrayObjects) => {
        console.log(arrayObjects);
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
    </div>
    `
        return div;
    }

    const displayToColumn = () => {
        imgblocks.classList.remove('imgContainer');
        imgblocks.classList.add('imgColumn');
        mosaicBoolean=false;
    }
    const displayToMosaic = () => {
        imgblocks.classList.remove('imgColumn');
        imgblocks.classList.add('imgContainer');
        mosaicBoolean=true;
    }

    toggleImg.onclick=()=>{
        // event.preventDefault();
        console.log(typeof mosaicBoolean);
        if (mosaicBoolean===true){
            displayToColumn();
            console.log('mos',mosaicBoolean);

        }
        else{
            displayToMosaic();
            console.log('col',mosaicBoolean);
        }
        console.log('booleanSortie=',mosaicBoolean);
    }

    // displayToMosaic();

})