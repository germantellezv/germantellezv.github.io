function mostrarTodos()
{
    if (document.getElementById){
        recocido = document.getElementById('recocido');
        wavefront = document.getElementById('wavefront');
        hillClimbing = document.getElementById('hillClimbing');
        yartpApi= document.getElementById('yartpApi');
        controlRemoto= document.getElementById('controlRemoto');
        contadorPalabras = document.getElementById('contadorPalabras');
        inventario = document.getElementById('inventario');


        recocido.style.display = 'block';
        wavefront.style.display = 'block';
        hillClimbing.style.display = 'block';
        yartpApi.style.display = 'block';
        controlRemoto.style.display = 'block';
        contadorPalabras.style.display = 'block';
        inventario.style.display = 'block';

        // SI QUIERO QUE SE MUESTRE U OCULTE AL PRESIONAR CLIC ACA DEBAJO ESTA EL CODIGO PARA ELLO

        // elemento.style.display = (elemento.style.display == 'none') ? 'block' : 'none';
        // hillClimbing.style.display = (hillClimbing.style.display == 'none') ? 'block' : 'none';
        // yartpApi.style.display = (yartpApi.style.display == 'none') ? 'block' : 'none';
        // controlRemoto.style.display = (controlRemoto.style.display == 'none') ? 'block' : 'none';
        // contadorPalabras.style.display = (contadorPalabras.style.display == 'none') ? 'block' : 'none';
        // inventario.style.display = (inventario.style.display == 'none') ? 'block' : 'none';
    }
}

function mostrarPython()
{
    if (document.getElementById){
        recocido = document.getElementById('recocido');
        wavefront = document.getElementById('wavefront');
        hillClimbing = document.getElementById('hillClimbing');
        yartpApi= document.getElementById('yartpApi');
        controlRemoto= document.getElementById('controlRemoto');
        contadorPalabras = document.getElementById('contadorPalabras');
        inventario = document.getElementById('inventario');

        //mostrar
        recocido.style.display = 'block';
        wavefront.style.display = 'block';
        hillClimbing.style.display = 'block';
        yartpApi.style.display = 'block';
        inventario.style.display = 'block';
        // ocultar
        controlRemoto.style.display = 'none';
        contadorPalabras.style.display = 'none';
    }
}