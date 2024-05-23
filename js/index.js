let glosarioSect = document.getElementById("glosario");
let idAnterior = 0;
function expand(id){
    let li = document.querySelectorAll(`#glosario > li.selected`);
    if(li){
        li.forEach(e=>e.classList.remove("selected"));
    }
    let otros = document.querySelectorAll(`#glosario > li > div`);
    let selected = document.getElementById(id);
    if(otros){
        otros.forEach(e=>e.remove());
        if(id==idAnterior){
            selected.classList.remove("selected")
        }else{
            selected.classList.add("selected")
            let descLi = document.createElement("div");
            glosario.forEach(e=>(Number(e.id) == Number(id) ?  descLi.innerText = e.desc : false));
            selected.appendChild(descLi);
        }
    }else{
        selected.classList.add("selected")
        let descLi = document.createElement("div");
        glosario.forEach(e=>(Number(e.id) == Number(id) ?  descLi.innerText = e.desc : false));
        selected.appendChild(descLi);
    }
}
glosario.forEach(({id,word})=>{
    let wordLi = document.createElement("li");
    wordLi.innerText = word;
    wordLi.classList.add("center");
    wordLi.setAttribute('id',id);
    wordLi.setAttribute('onClick','expand(id)');
    glosarioSect.appendChild(wordLi);
})