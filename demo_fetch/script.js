function dibujar(url){
    document.getElementById("perro").setAttribute("src",url);
    document.getElementById("perro").setAttribute("alt","perro");
    document.getElementById("perro").style="width:300px";
}

document.getElementById("boton").addEventListener("click",()=>{
    let breed = document.getElementById("breed").value;
    getRandomImageByBreed(breed);
})

function getRandomImageByBreed(name){
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    .then(res => res.json()) // conversion a JSON
    .then(data=>dibujar(data.message))// URL de la foto del perro
    .catch(e=>console.log(` Ha fallado:${e}`));
}
