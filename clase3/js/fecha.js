// ubicamos elemento dentro del DOM
    var txtReloj = document.getElementById('txtReloj');

// generamos función de control
    function reloj()
    {
        // crear un objeto de fecha
        var fecha = new Date();

        //obtenemos horas, minutos y segundos
        var horas = fecha.getHours();
        var minutos = fecha.getMinutes();
            if( minutos < 10 ){
                minutos = '0'+ minutos;
            }
        var segundos = fecha.getSeconds();
            if( segundos < 10 ){
                segundos = '0'+ segundos;
            }

        // mostrar el contenido en txtReloj
        txtReloj.innerText = horas +':'+ minutos +':'+ segundos;
    }

// ejecutamos la función
    reloj();
// actualizamos el llamado a la función
    setInterval( reloj, 1000 );
