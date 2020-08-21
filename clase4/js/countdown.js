// ubicamos las cajas de texto (span) dentro del DOM
    var txtDias = document.getElementById('dias');
    var txtHoras = document.getElementById('horas');
    var txtMinutos = document.getElementById('minutos');
    var txtSegundos = document.getElementById('segundos');

    function countDown()
    {
        // fechas de fin y actual
        var ahora = new Date();
        var fin   = new Date(2020, 7, 30);

        // fechas pasadas a milisegundos
        var actual = ahora.getTime();
        var evento = fin.getTime();

        var restante = evento - actual;

        //obtener tiempo restante en segundos/minutos/horas y días
        var segundos = Math.floor(restante/1000);
        var minutos = Math.floor(segundos/60);
        var horas = Math.floor(minutos/60);
        var dias = Math.floor(horas/24);

        //calcular restante de horas, minutos y segundos
        horas %= 24;  //horas = horas%24;
        minutos %= 60; //minutos = minutos%60;
        segundos %= 60; //segundos = segundos%60;

        //ceros iniciales   ( codicion ) ? 'true' : 'false'
        segundos = ( segundos < 10 ) ? '0'+segundos : segundos;
        minutos  = ( minutos < 10 ) ? '0'+minutos : minutos;
        horas = ( horas < 10 ) ? '0'+horas : horas;

        txtDias.innerText = dias;
        txtHoras.innerText = horas;
        txtMinutos.innerText = minutos;
        txtSegundos.innerText = segundos;
    }

    countDown();
    setInterval( countDown, 1000 );