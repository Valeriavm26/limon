fetch("archivo.json")
.then(r => r.json())
.then(datos => {
    document.getElementById("nombre").textContent = perdido[0].nombre;
    document.getElementById("edad").textContent = perdido[0].edad;
    document.getElementById("color").textContent = perdido[0].colorf;
    let perdido = datos});