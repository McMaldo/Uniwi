let glosarioSect = document.getElementById("glosario");
function expand(id){
    let otros = document.querySelectorAll(`#glosario > li > div`);
    if(otros){
        otros.forEach(e=>e.remove());
    }
    let wordLi = document.getElementById(id);
    let descLi = document.createElement("div");
    glosario.forEach(e=>(Number(e.id) == Number(id) ?  descLi.innerText = e.desc : false));
    wordLi.appendChild(descLi);
}
glosario.forEach(({id,word})=>{
    let wordLi = document.createElement("li");
    wordLi.innerText = word;
    wordLi.classList.add("center");
    wordLi.setAttribute('id',id);
    wordLi.setAttribute('onClick','expand(id)');
    glosarioSect.appendChild(wordLi);
})