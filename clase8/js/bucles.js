
    var txt = document.getElementById('txt');
    var numero = 1;
    txt.innerHTML = '';

    while ( numero < 15 ){
        txt.innerHTML = txt.innerHTML + numero + '<br>';
        numero++; //numero = numero + 1;
    }

    // usando un array
    var txt2 = document.getElementById('txt2');
    var ingleses = [
                    'Aston Martin',
                    'Rolls Royce',
                    'Bentley',
                    'Vaulxall',
                    'Lotus',
                    'MG',
                    'Triumph',
                    'Jaguar',
                    'McLaren'
                   ];

    txt2.innerHTML = '';
    var n = 0;
    var cantidad = ingleses.length;
    while ( n < cantidad ){
        txt2.innerHTML = txt2.innerHTML + '<li class="list-group-item list-group-item-action">' + ingleses[n] + '</li>';
        n++;
    }