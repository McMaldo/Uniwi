const wordList = document.querySelector("#wordList");
const descList = document.querySelector("#descList");
let selecteds = {id:0,word:""};
let clicksCounter = {s1:false,s2:false};
let idanterior1 = 0;
let idanterior2 = 0;
var total = 6;
var totalInicio = total;
var wrong = 0;
// funcion para verificar la union de los articulos
function verificar(){
  // console.log(clicksCounter);
  if(clicksCounter.s1 && clicksCounter.s2){
    let unionBien = false
    glosario.map(e =>(selecteds.id == e.id  && selecteds.word == e.word ? unionBien = true : false ));
    console.log(unionBien)
    let word = document.getElementById(selecteds.word);
    let desc = document.getElementById(selecteds.id);
    clicksCounter = {s1:false,s2:false};
    selecteds = {id:0,word:""};
    if(unionBien){
      word.classList.remove("selected");
      word.classList.add("unable");
      word.removeAttribute("onclick")
      desc.classList.remove("selected");
      desc.classList.add("unable");
      desc.removeAttribute("onclick")
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
        good.classList.add("aciertos")
        good.innerText = `Aciertos: ${totalInicio}`;
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
      word.classList.remove("selected");
      word.classList.add("wrong");
      desc.classList.remove("selected");
      desc.classList.add("wrong");
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
  let otros = wordList.querySelector(".selected");
  removeWrong(wordList);
  removeWrong(descList);
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
  console.log(id)
  selecteds.word = id;
  verificar();
}
function unir2(id){
  let selected = document.getElementById(id);
  let otros = descList.querySelector(".selected");
  removeWrong(wordList);
  removeWrong(descList);
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
  console.log(id)
  selecteds.id = id;
  verificar();
}
// section de las palabras
let arrayRandom = glosario.slice(0,totalInicio);
arrayRandom = arrayRandom.sort(function() { return Math.random() - 0.5 })
arrayRandom.forEach(({word},k)=>{
  if(k<total){
    let articleImg = document.createElement("article");
    articleImg.textContent = word;
    articleImg.setAttribute('id',word);
    articleImg.setAttribute('onclick',"unir(id)");
    articleImg.classList.add("center");
    wordList.appendChild(articleImg);
  }
});
// section de las wordnes
arrayRandom = arrayRandom.sort(function() { return Math.random() - 0.5 })
arrayRandom.forEach(({id,desc},k)=>{
  if(k<total){
    let articleImg = document.createElement("article");
    articleImg.textContent = desc;
    articleImg.setAttribute('id',id);
    articleImg.setAttribute('onclick',"unir2(id)");
    descList.appendChild(articleImg);
  }
});