function ocultar()
{
    if (document.getElementById){
        elemento = document.getElementById('recocido');
        hillClimbing = document.getElementById('hillClimbing');
        yartpApi= document.getElementById('yartpApi');
        controlRemoto= document.getElementById('controlRemoto');
        contadorPalabras = document.getElementById('contadorPalabras');
        inventario = document.getElementById('inventario');


        elemento.style.display = (elemento.style.display == 'none') ? 'block' : 'none';
        hillClimbing.style.display = (hillClimbing.style.display == 'none') ? 'block' : 'none';
        yartpApi.style.display = (yartpApi.style.display == 'none') ? 'block' : 'none';
        controlRemoto.style.display = (controlRemoto.style.display == 'none') ? 'block' : 'none';
        contadorPalabras.style.display = (contadorPalabras.style.display == 'none') ? 'block' : 'none';
        inventario.style.display = (inventario.style.display == 'none') ? 'block' : 'none';
    }
}