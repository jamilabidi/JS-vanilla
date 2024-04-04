document.addEventListener("DOMContentLoaded", (event) => {


    const imgFetch = fetch('https://picsum.photos/v2/list')
        .then(resp => resp.json())
        .then(json => {
            displayImgs(json)
            // console.log(json);
        })

    console.log(imgFetch);

 const imgblocks=document.getElementById("container");
console.log(imgblocks);

const displayImgs= (arrayObjects)=>{
    console.log(arrayObjects);
    const imgsNode=arrayObjects.map((img)=>{
        return createImgElement(img);
    });
    imgblocks.append(...imgsNode);
}

const createImgElement= (img)=>{
    const div=document.createElement("div")
    div.classList.add('feed')
    div.classList.add('imgSolo')
    div.innerHTML=`
    <div >
    <img src="${img.download_url}" style="max-width: 25rem"/>
    </div>
    `
    return div;
}

const displayToColumn=()=> {
    imgblocks.classList.remove('imgContainer');
    imgblocks.classList.add('imgColumn');

}
const displayToMosaic=()=> {
    imgblocks.classList.remove('imgColumn');
    imgblocks.classList.add('imgContainer');

}



displayToMosaic();

})