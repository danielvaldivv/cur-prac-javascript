//Código del Cuadrado
console.group("Cuadrados")
//Lado del cuadrado
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
//Perimetro del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4; 
}
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");
//Area del cuadrado
function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
console.groupEnd();


//Código del Triangulo
console.group("Triangulo");
//Lados de triangulo
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo =5;
//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
//console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangul
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
function perimetroTriangulo(baseTriangulo, ladoTriangulo1, ladoTriangulo2) {
    return (baseTriangulo + ladoTriangulo1 + ladoTriangulo2);
}
//Area del triangulo
//const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
//console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");
function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return ((baseTriangulo * alturaTriangulo)/2)}
console.groupEnd();


//Código del Circulos
console.group("Circulos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
//console.log("PI es " + PI + ".");
// Perimetro
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
function perimetroCirculo(radioCirculo) {
        return (2 * radioCirculo * PI)
    }
//Area
//const areaCirculo = PI * (radioCirculo**2);
//console.log("El area del circulo es " + areaCirculo + " cms.");
function areaCirculo(radioCirculo) {
    return (PI * (radioCirculo*radioCirculo))
}
console.groupEnd();

//Aqui interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert (perimetro)
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert (area)
}
//Triangulo
function calcularPerimetroTriangulo(){
    const inputBase = document.getElementById("inputBaseTriangulo")
    const baseTriangulo = inputBase.value;
    const baseTri = parseInt(baseTriangulo);
    console.log(baseTri);
    console.log(typeof(baseTri));

    const inputAltura = document.getElementById("inputAltutaTriangulo")
    const alturaTriangulo = inputAltura.value;
    const alturaTri = parseInt(alturaTriangulo);

    const input1Lado = document.getElementById("inputLado1Triangulo")
    const ladoTriangulo1 = input1Lado.value;
    const ladoTri1 = parseInt(ladoTriangulo1);

    const input2Lado = document.getElementById("inputLado2Triangulo")
    const ladoTriangulo2 = input2Lado.value;
    const ladoTri2 = parseInt(ladoTriangulo2);

    const perimetroTri = perimetroTriangulo(baseTri, ladoTri1, ladoTri2);
    alert (perimetroTri);
}
function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBaseTriangulo")
    const baseTriangulo = inputBase.value;
    const baseTri = parseInt(baseTriangulo);
    console.log(baseTri);
    console.log(typeof(baseTri));

    const inputAltura = document.getElementById("inputAltutaTriangulo")
    const alturaTriangulo = inputAltura.value;
    const alturaTri = parseInt(alturaTriangulo);
    console.log(alturaTri);
    console.log(typeof(alturaTri));

    const areaTri = areaTriangulo(baseTri, alturaTri);
    alert (areaTri);
}

//Circulo
//PERIMETRO
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo")
    const radioCirculo = inputRadio.value;
    const radioCir = parseInt(radioCirculo);

    console.group("Circulo");
    console.log(inputRadio);
    console.log(typeof(inputRadio));
    console.log(radioCirculo);
    console.log(typeof(radioCirculo));
    console.log(radioCir);
    console.log(typeof(radioCir));
    console.groupEnd();

    const perimetroCir = perimetroCirculo(radioCir);
    alert(perimetroCir);
}
//Area
function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo")
    const radioCirculo = inputRadio.value;
    const radioCir = parseInt(radioCirculo);

    console.group("Circulo");
    console.log(inputRadio);
    console.log(typeof(inputRadio));
    console.log(radioCirculo);
    console.log(typeof(radioCirculo));
    console.log(radioCir);
    console.log(typeof(radioCir));
    console.groupEnd();

    const areaCir = areaCirculo(radioCir);
    alert(areaCir);
}