
var URI_IMAGENES = "https://api.nasa.gov/planetary/apod"
var URI_ASTEROIDES = "https://api.nasa.gov/neo/rest/v1/feed?"

//Demo KEY
const API_KEY = "VQ7rKqOwgit4L5ueyLoTih2ZInQZwxeHHJLsKr9V";

async function cambiarImagen()
{
    var dia = document.getElementById("fecha").value // YYYY-MM-dd
    //"https://api.nasa.gov/planetary/apod?api_key=VQ7rKqOwgit4L5ueyLoTih2ZInQZwxeHHJLsKr9V&date=2022-10-26"
    var datos = await fetch(URI_IMAGENES + "api_key"+API_KEY 
    "&date="+dia).then(function(respuesta));

    datos = datos.json();
    dtos = datos[0];
    console.log(datos);

    // Aquí se maneja el objeto promesa
    // datos datos.json
    // datos. datos[0]
    console.log(datos)

    document.getElementById("imagen").style = "background-image: url("+datos.url+")";
    document.getElementById("titulo").innerText = datos.title
    document.getElementById("texto").innerText = datos.explanation;
}
 async function consultarAsterioides()
{
    // YYYY-MM-DD
    var fechaInicio = document.getElementById("fechaInicioAsteroides").value;
    var fechaFin = document.getElementById("fechaFinAsteroides").value;
    fetch(URI_ASTEROIDES+"start_date=" +fechaInicio + "end_date=" + fechaFin + "&api_key=" +API_KEY) 
    .then(function(resultado){
        return resultado.json()
    })
    .then(function(data){
        data.near_earth_objects
        
        //Cada uno de los objetos tiene como llave el dia en formato:
        // YYYY-MM-DD
        let fechaInicioDate = new Date(fechaInicio)
        let fechaInicioDate = new Date(fechaFin)
        
        // Date se representa en ms
        //86400000 = 24*60*60*1000
       

        //DiaInicial hasta DiaFin

        while(fechaInicio <= fechaFin){
            console.log(fechaInicio)
            fechaInicioDate.setDate(fechaInicioDate.getDate()+ 1)
        }
        console.log("Termine")
    })
}