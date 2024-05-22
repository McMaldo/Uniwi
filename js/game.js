import "../json/pcComponent.json"
const imageList = document.querySelector("#imageList");
const wordList = document.querySelector("#wordList");
let selecteds = {id:0,name:""};
// funcion para verificar la union de los articulos
function unir(id){
    let selected = document.getElementById(id);
    let otros = imageList.querySelectorAll(".selected");
    (selected.classList.contains("selected") ? selected.classList.remove("selected") : selected.classList.add("selected"));
    if (otros.length <= 1){
        otros.forEach(e => e.classList.remove("selected"));
    }
    selecteds = {id:id};
}
function unir2(id){
    let selectedW = document.getElementById(id);
    let otros = wordList.querySelectorAll(".selected");
    (selectedW.classList.contains("selected") ? selectedW.classList.remove("selected") : selectedW.classList.add("selected"));
    if (otros.length <= 1){
        otros.forEach(e => e.classList.remove("selected"));
    }
    selecteds = {name:id};
    console.log(selecteds);
}
// section de las imagenes
pcComponents.forEach(({id},k)=>{
    if(k<9){
        let articleImg = document.createElement("article");
        articleImg.classList.add("img"+id);
        articleImg.setAttribute('id',id);
        articleImg.setAttribute('onclick',"unir(id)");
        articleImg.classList.add("center");
        imageList.appendChild(articleImg);
    }
});
// section de las palabras
pcComponents.forEach(({id,name},k)=>{
    if(k<9){
        let articleImg = document.createElement("article");
        articleImg.textContent = name;
        articleImg.setAttribute('id',name);
        articleImg.setAttribute('onclick',"unir2(id)");
        articleImg.classList.add("center");
        wordList.appendChild(articleImg);
    }
});