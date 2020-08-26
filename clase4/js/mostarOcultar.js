
    var caja = document.getElementById('caja');

    function ocultar()
    {
        // display = 'none'
        // visibility = 'hidden'
        // opacity = '0';
        caja.style.display = 'none';
    }
    function mostrar()
    {
        // display = 'block'
        // visibility = 'visible'
        // opacity = 1;
        caja.style.display = 'block';
    }
    function mostarOcultar()
    {
        if( caja.style.display == 'none' ){
            //caja.style.display = 'block';
            mostrar();
        }
        else{
            //caja.style.display = 'none';
            ocultar();
        }
    }