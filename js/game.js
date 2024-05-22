const imageList = document.querySelector("#imageList");
const wordList = document.querySelector("#wordList");
let selecteds = {id:0,name:""};
let clicksCounter = {s1:false,s2:false};
let idanterior1 = 0;
let idanterior2 = 0;
var total = 3;
var totalInicio = total;
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
                let main = document.querySelector("main.game");
                let span = document.createElement("span");
                span.innerText = "Bien Hecho";
                span.setAttribute('id','showResults');
                main.appendChild(span);
                let div = document.createElement("div");
                span.appendChild(div);
                let good = document.createElement("div");
                good.classList.add("asiertos")
                good.innerText = `Asiertos: ${totalInicio}`;
                div.appendChild(good);
                let bads = document.createElement("div");
                bads.classList.add("errores")
                bads.innerText = `Errores: ${wrong}`;
                div.appendChild(bads);
                let link = document.createElement("a");
                link.setAttribute('href','../index.html');
                link.innerText = "Volver a Home";
                span.appendChild(link);
                //window.location.replace("../html/results.html");

            }
        }else{
            image.classList.remove("selected");
            image.classList.add("wrong");
            name.classList.remove("selected");
            name.classList.add("wrong");
            wrong += 1;
            console.log(wrong);
        }
        
    }
}
function removeWrong(list){
    let wrongList = list.querySelectorAll(".wrong");
    if(wrongList){
        wrongList.forEach(e => e.classList.remove("wrong"));
    }
}
function unir(id){
    let selected = document.getElementById(id);
    let otros = imageList.querySelector(".selected");
    removeWrong(imageList);
    if (otros){
        otros.classList.remove("selected");
        if(selected.id==idanterior1){
            selected.classList.remove("selected")
            clicksCounter.s1 = false;
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
    removeWrong(wordList);
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