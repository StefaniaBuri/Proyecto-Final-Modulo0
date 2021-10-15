
var boton = document.querySelector("#boton");
boton.style.background="blue";
boton.style.padding = "10px";

boton.addEventListener('click', function CalcularIMC(altura, peso){
   
    function CalcularIMC(altura, peso){
        altura = Math.round(altura) / 100;
        peso = Math.round(peso);
        
        var indice = (peso / Math.pow(altura, 2));
        var resultado = "";
            if (indice < 18.5)
            {
              resultado = "Peso insuficiente.";
            }
            else if (indice >= 18.5 && indice < 24.9)
            {
              resultado = "Peso Normal.";
            }
            else if (indice >= 25 && indice < 26.9)
            {
              resultado = "Sobrepeso grado I.";
            }
            else if (indice >= 27 && indice < 29.9)
            {
              resultado = "Sobrepeso grado II.";
            }
            else if (indice >= 30 && indice < 34.9)
            {
              resultado = "Obesidad grado I.";
            }
            else if (indice >= 35 && indice < 39.9)
            {
              resultado = "obesidad grado II.";
            }
            else if (indice >= 40 && indice < 49.9)
            {
              resultado = "Obesidad morbida.";
            }
            else if (indice >= 49.9)
            {
              resultado = "Obesidad extrema.";
            }  
            return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
         
    }

    function MostrarResultadoIMC (altura, peso, indice){
            var MostrarResultadoIMC = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
        alert(MostrarResultadoIMC);

    }	

    var altura = parseInt(prompt("Indique su altura en cm:", 0));
    var peso = parseInt(prompt("Indique su peso en kg:" , 0));
    var resultado = CalcularIMC(altura, peso);
    MostrarResultadoIMC(altura, peso, resultado); 
});
