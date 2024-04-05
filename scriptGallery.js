document.addEventListener("DOMContentLoaded", (event) => {

    const imgblocks = document.getElementById("container");
    const toggleImg =document.getElementById("switch");
    const form=document.querySelector("form");
    let mosaicBoolean=document.getElementById("switch").value==="true"? true:false;

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
        mosaicBoolean=false;
    }
    const displayToMosaic = () => {
        imgblocks.classList.remove('imgColumn');
        imgblocks.classList.add('imgContainer');
        mosaicBoolean=true;
    }

    toggleImg.onclick=()=>{
        if (mosaicBoolean===true){
            displayToColumn();
        }
        else{
            displayToMosaic();
        }
    }

    // displayToMosaic();
    form.addEventListener("submit", async event=>{
        event.preventDefault();
        const formData= new FormData(form);
        const imgUpload=Object.fromEntries(formData.entries());
        const json=JSON.stringify(imgUpload);

        let imgUploadBlock=createImgElement(imgUpload);
        console.log(imgUploadBlock);
        createDeleteButton(imgUploadBlock);
        console.log(imgUploadBlock);
        imgblocks.prepend(imgUploadBlock);
    })

    const createDeleteButton=(div)=> {
        const deleteButton=document.createElement("div")
        deleteButton.innerHTML = `
        <button type="button" className="btn-close">
            <span className="icon-cross"></span>
            <span className="visually-hidden">Close</span>
        </button>
        <span className="cross-stand-alone"></span>
        <span className="cross-1px"></span>`
        div.appendChild(deleteButton);
        return div;
    }
})