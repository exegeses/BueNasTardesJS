
// ubicamos elemento dentro del DOM
    var txtFecha = document.getElementById('txtFecha');

//creamos un objeto de fecha
    var fecha = new Date();

// obtenemos dia/mes/anio
    var diaMes = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    if ( mes < 10 ){
        mes = '0'+mes;
    }
    var anio = fecha.getFullYear();

//mostramos la fecha en el span txtFecha  ej: 14/08/2020
    txtFecha.innerText = diaMes +'/'+ mes +'/'+ anio;