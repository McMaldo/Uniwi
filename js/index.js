const imageList = document.querySelector("#imageList");
pcComponents.forEach(({img},k)=>{
    if(k<6){
        let articleImg = document.createElement("article");
        // articleImg.textContent = img;
        articleImg.style.backgroundImage = "../img/"+img;
        articleImg.classList.add("center");
        imageList.appendChild(articleImg);
    }
});

const wordList = document.querySelector("#wordList");
pcComponents.forEach(({name},k)=>{
    if(k<6){
        let articleImg = document.createElement("article");
        articleImg.textContent = name;
        articleImg.classList.add("center");
        wordList.appendChild(articleImg);
    }
});