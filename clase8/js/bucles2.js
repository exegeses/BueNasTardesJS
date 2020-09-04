
    var lista = document.getElementById('lista');

    var colores = [
                    'rojo', 'azul', 'verde', 'amarillo', 'naranja', 'rosa'
                  ];
    var codigos = [
                    '#d00', '#00a', '#0a0', '#ff0', '#f60', '#f58b8b'
                  ];

    var n = 0;
    var cantidad = codigos.length;

    var contenido = '';
    while ( n < cantidad ) {

        contenido += '<li class="list-group-item">\n' +
            '               <span class="badge border p-3" style="background-color: '+ codigos[n] +'">color</span>\n' +
            '                '+ colores[n] +'\n' +
            '         </li>';
        n++;
    }

    lista.innerHTML = contenido;