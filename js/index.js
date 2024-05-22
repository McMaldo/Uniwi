let glosarioSect = document.getElementById("glosario");
glosario.forEach(({word})=>{
    let wordLi = document.createElement("li");
    wordLi.innerText = word;
    // wordLi.classList.add("img"+id);
    // wordLi.setAttribute('id',id);
    // wordLi.classList.add("center");
    // glosarioSect.appendChild(wordLi);
})