    var mensaje = document.getElementById('mensaje');

    function comparar()
    {
        var numero = prompt('Ingrese un número');
        if ( numero < 100 ){
            // ventana emergente alert()
            //alert('Es menor que 100');
            mensaje.innerText = 'Es menor que 100';
        }
        else {
            //alert('No es menor que 100');
            mensaje.innerText = 'No es menor que 100'
        }
    }