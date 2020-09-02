// maneras de ubicar elementos
    var txtFrase = document.getElementById('txtFrase');
        txtFrase.innerText = 'Elemento encontrado!'

    var losI = document.getElementsByTagName('i');
        console.log(losI);
    //variamos color de texto
        losI[2].style.backgroundColor = '#f1985e';
        losI[2].style.padding = '3px 6px'
        losI[2].style.border = '1px dashed #f60';

    var resaltados = document.getElementsByClassName('resaltado');
        console.log(resaltados);
    // variamos color de fondo
        resaltados[1].style.backgroundColor = '#e9b08a';