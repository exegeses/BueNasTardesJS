// ubicar elemento dentro del DOM
    var caja = document.getElementById('caja');

// modificaciones sobre la caja
    caja.style.height = '200px';
    caja.style.position = 'relative';
    caja.style.top = '100px';
    caja.style.left = '100px';
    caja.style.borderRadius = '10px';

    var grados = 0;

// creamos funcion de control
    function rotar()
    {
        //grados = grados + 3;
        grados += 3;
        caja.style.transform = 'rotate('+grados+'deg)';

        // cambio de color
        var red = Math.random() *  255; // entre 0 y 255;
        var green = Math.random() * 255;
        var blue = Math.random() * 255;

        caja.style.backgroundColor = 'rgb( '+red+', '+green+', '+blue+' )';
    }

// ejecutamos la funcion
    rotar();
// actualizamos el llamado a la función
    setInterval( rotar, 100 );
