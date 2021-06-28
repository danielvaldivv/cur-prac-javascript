function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
function introducirValorArray(){
    console.group("arrays");
    const inputPrimer = document.getElementById("inputArray0");
    const primerValor = parseInt(inputPrimer.value);
    console.log("Primer valor:" + primerValor + " Type of:" + typeof(primerValor));

    const inputSegundo = document.getElementById("inputArray1");
    const segundoValor = parseInt(inputSegundo.value);
    console.log("Segundo valor:" + segundoValor + " Type of:" + typeof(segundoValor));

    const inputTercer = document.getElementById("inputArray2");
    const tercerValor = parseInt(inputTercer.value);
    console.log("Tercer valor:" + tercerValor + " Type of:" + typeof(tercerValor));

    const inputCuarto = document.getElementById("inputArray3");
    const cuartoValor = parseInt(inputCuarto.value);
    console.log("Cuarto valor:" + cuartoValor + " Type of:" + typeof(cuartoValor));

    const inputQuinto = document.getElementById("inputArray4");
    const quintoValor = parseInt(inputQuinto.value);
    console.log("Quinto valor:" + quintoValor + " Type of:" + typeof(quintoValor));

    const inputSexto = document.getElementById("inputArray5");
    const sextoValor = parseInt(inputSexto.value);
    console.log("Sexto valor:" + sextoValor + " Type of:" + typeof(sextoValor));
    console.groupEnd();

    
    if (primerValor || primerValor == 0){
        lista1.push(primerValor);
    }
    if (segundoValor || segundoValor ==0){
        lista1.push(segundoValor);
    }
    if (tercerValor || tercerValor == 0){
        lista1.push(tercerValor);
    }
    if (cuartoValor || cuartoValor == 0){
        lista1.push(cuartoValor);
    }
    if (quintoValor || quintoValor == 0){
        lista1.push(quintoValor);
    }
    if (sextoValor || sextoValor == 0){
        lista1.push(sextoValor);
    }

    lista1.sort();
    console.log(lista1);

    const mitadLista1 = parseInt(lista1.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1];
        const elemento2 = lista1[mitadLista1 - 1];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2,]);
        mediana = promedioElemento1y2;
        console.log("La mediana es: " + mediana);
    } else {
        mediana = lista1[mitadLista1];
        console.log("La mediana es: " + mediana);
    }
    const print = document.getElementById("printMediana")
    print.innerText = "La mediana de tus datos es: " + mediana;

}

var mediana;
const lista1 = [];
console.log(lista1);

