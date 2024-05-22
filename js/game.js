const imageList = document.querySelector("#imageList");
const wordList = document.querySelector("#wordList");
let selecteds = {id:0,name:""};
let clicksCounter = {s1:false,s2:false};
let idanterior1 = 0;
let idanterior2 = 0;
var total = 6;
var wrong = 0;
// funcion para verificar la union de los articulos
function verificar(){
    // console.log(clicksCounter);
    if(clicksCounter.s1 && clicksCounter.s2){
        // console.log(selecteds);
        // pcComponents.forEach((e)=>(console.log(e)));
        let unionBien = false
        pcComponents.map(e =>(selecteds.id == e.id  && selecteds.name == e.name ? unionBien = true : false ));
        console.log(unionBien)
        let image = document.getElementById(selecteds.id);
        let name = document.getElementById(selecteds.name);
        clicksCounter = {s1:false,s2:false};
        selecteds = {id:0,name:""};
        if(unionBien){
            image.classList.remove("selected");
            image.classList.add("unable");
            name.classList.remove("selected");
            name.classList.add("unable");
            total -= 1;
            if(total < 1){
                window.location.replace("../html/results.html");
            }
        }else{
            image.classList.remove("selected");
            image.classList.add("wrong");
            name.classList.remove("selected");
            name.classList.add("wrong");
            wrong += 1;
        }
        
    }
}
function removeWrong(selected){
    if(selected.classList.contains("wrong")){
        selected.classList.remove("wrong");
    }
}
function unir(id){
    let selected = document.getElementById(id);
    let otros = imageList.querySelector(".selected");
    removeWrong(selected);
    if (otros){
        otros.classList.remove("selected");
        if(selected.id==idanterior1){
            selected.classList.remove("selected")
            clicksCounter.s1 = false;
            console.log(clicksCounter)
        }//el else se puede sacar, es solo para ver el valor de clikccounbter
        else{
            selected.classList.add("selected")
            console.log(clicksCounter)
        }
        idanterior1 = selected.id
    }else{
        selected.classList.add("selected")
        clicksCounter.s1 = true;
        idanterior1 = selected.id
        console.log(clicksCounter)
    }
    selecteds.id = id;
    verificar();
}
function unir2(id){
    let selected = document.getElementById(id);
    let otros = wordList.querySelector(".selected");
    removeWrong(selected);
    if (otros){
        otros.classList.remove("selected");
        if(selected.id==idanterior2){
            selected.classList.remove("selected")
            clicksCounter.s2 = false;
            console.log(clicksCounter)
        }//el else se puede sacar, es solo para ver el valor de clikccounbter
        else{
            selected.classList.add("selected")
            console.log(clicksCounter)
        }
        idanterior2 = selected.id
    }else{
        selected.classList.add("selected")
        clicksCounter.s2 = true;
        idanterior2 = selected.id
        console.log(clicksCounter)
    }
    selecteds.name = id;
    verificar();
}
// section de las imagenes
pcComponents.forEach(({id},k)=>{
    if(k<total){
        let articleImg = document.createElement("article");
        articleImg.classList.add(`img${id}`);
        articleImg.setAttribute('id',id);
        articleImg.setAttribute('onclick',"unir(id)");
        articleImg.classList.add("center");
        imageList.appendChild(articleImg);
    }
});
// section de las palabras
pcComponents.forEach(({name},k)=>{
    if(k<total){
        let articleImg = document.createElement("article");
        articleImg.textContent = name;
        articleImg.setAttribute('id',name);
        articleImg.setAttribute('onclick',"unir2(id)");
        articleImg.classList.add("center");
        wordList.appendChild(articleImg);
    }
});