function ocultar()
{
    if (document.getElementById){
        elemento = document.getElementById('recocido');

        elemento.style.display = (elemento.style.display == 'none') ? 'block' : 'none';
        
    }
}