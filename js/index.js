import "../json/glosario.json"
let glosario = document.getElementById("glosario");
let articleImg = document.createElement("article");
articleImg.classList.add("img"+id);
articleImg.setAttribute('id',id);
articleImg.setAttribute('onclick',"unir(id)");
articleImg.classList.add("center");
imageList.appendChild(articleImg);