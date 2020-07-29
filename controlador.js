//1. Definir la URL del servicio de donde vamos a consumir los servicios
let url = "https://api.spotify.com/v1/artists/1t7t8q4zoYHp22JLIx3FM7/top-tracks?country=us";

//2. Definir el token o permiso de acceso que lo sacamos de spotify
let token = "Bearer BQCpDQRFdl3ohoGWRZ8i5ZiBpQFY9PKyTg2cFUsRDudEkr6G_DA0x4CAEfxgqr9aGVV9iAfrkQK0bx54JJS4AM0pMaj1luriyH2XrIhn0QQkfdCxBAfduy5fF7sRTZFiJXbAJTcyERoBoDvWJdTyBGcmrcsaNT4";


let objAjax = new XMLHttpRequest();

objAjax.open('GET', url, true);

objAjax.setRequestHeader('Authorization', token);

objAjax.onload = function() {

    let respuesta = JSON.parse(this.responseText); 
    console.log(respuesta)    
    
    document.getElementById('imagen1').src = respuesta.tracks[0].album.images[0].url
    document.getElementById('card1').src = respuesta.tracks[0].album.images[0].url
    document.getElementById('card2').src = respuesta.tracks[1].album.images[0].url
    document.getElementById('card3').src = respuesta.tracks[2].album.images[0].url

    document.getElementById('titulo1').textContent = respuesta.tracks[0].name   
    document.getElementById('titulo2').textContent = respuesta.tracks[1].name   
    document.getElementById('titulo3').textContent = respuesta.tracks[2].name   

    document.getElementById('audio1').src = respuesta.tracks[0].preview_url
    document.getElementById('audio2').src = respuesta.tracks[1].preview_url
    document.getElementById('audio3').src = respuesta.tracks[2].preview_url   
        
}

//7. enviamos la peticion
objAjax.send();