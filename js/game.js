const imageList = document.querySelector("#imageList");
const wordList = document.querySelector("#wordList");
let selecteds = {id:0,name:""};
let clicksCounter = {s1:false,s2:false};
let idanterior1 = 0;
let idanterior2 = 0;

// funcion para verificar la union de los articulos
function verificar(){
    // console.log(clicksCounter);
    if(clicksCounter.s1 && clicksCounter.s2){
        // console.log(selecteds);
        // pcComponents.forEach((e)=>(console.log(e)));
        let unionBien = false
        pcComponents.map(e =>(selecteds.id == e.id  && selecteds.name == e.name ? unionBien = true : false ));
        console.log(unionBien)
        if(unionBien){
            let image = document.getElementById(selecteds.id);
            image.remove()
            let name = document.getElementById(selecteds.name);
            name.remove()
        }
    }
}
function unir(id){
    let selected = document.getElementById(id);
    let otros = imageList.querySelector(".selected");
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
    if(k<9){
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
    if(k<9){
        let articleImg = document.createElement("article");
        articleImg.textContent = name;
        articleImg.setAttribute('id',name);
        articleImg.setAttribute('onclick',"unir2(id)");
        articleImg.classList.add("center");
        wordList.appendChild(articleImg);
    }
});