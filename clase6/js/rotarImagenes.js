
    var foto = document.getElementById('foto');

    //crear un array con los nombres de las imágenes
    var fotos = [
                'arq1.jpg', 'arq2.jpg', 'arq3.jpg',
                'dancer1.jpg', 'dancer2.jpg', 'dancer3.jpg',
                'moda1.jpg', 'moda2.jpg', 'moda3.jpg',
                ];

    // crear a función para rotar imagenes
    function rotarImagenes()
    {
        //obtener un número aleatorio entre 0 y 8
        // el número debe ser entero
        var numero = Math.round( Math.random() * 8 );
            console.log(numero);

        //mostrar una imagen dentro del figure
        foto.innerHTML = '<img src="imagenes/'+fotos[numero]+'">';
    }

    rotarImagenes()

    //con un botón mostrar imagen al azar