
    var txtNDia = document.getElementById('txtNDia');
    var txtDia = document.getElementById('txtDia');
    var nombres = [
                    'Lucas','Mateo',
                    'Marcos','Juan',
                    'Santiago', 'Benjamin'
                  ];
    console.log(nombres);

    //creamos un objeto de fecha
    var fecha = new Date();

    //obtenemos el número del día de la semana
    // 0 -> Domingo, 1 -> Lunes, ... 6 -> Sábado
    var nDia = fecha.getDay();
    // mostramos el número del día de la semana
    txtNDia.innerText = nDia;
    //guardamos en un array los días de la semana
    var semana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                 ];
    //mostramos el día de la semana
    txtDia.innerText = semana[ nDia ];