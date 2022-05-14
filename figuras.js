//------  CODIGO DEL CUADRADO --------------
console.group("Cuadrados");

function perimetroCuadrado(lado)
    { return lado * 4; } 

function areaCuadrado(lado)
    { return lado * lado; } 

console.groupEnd();

//---------- CÓDIGO DEN TRIANGULO -----------
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base)
    { return lado1 + lado2 + base; }        

function areatriangulo(base, altura)
    { return (base * altura) / 2; } 

    console.groupEnd();

//-------------CODIGO DEL CIRCULO -------------
console.group("Circulo");
//Diámetro
function diametroCirculo(radio)
    {  return radio * 2; }

const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//Circunferencia
function perimetroCirculo(radio){
     const diametro = diametroCirculo(radio);
    return diametro * PI;
 }

//Area
function areaCirculo(radio)
    { return (radio * radio) * PI; }

console.groupEnd();

//*************************************************//
//******* AQUI INTERACTUAMOS CON EL HTML **********//
//*************************************************//

/*------------------- CUADRADO --------------------*/

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro); 
}


function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area); 
}

/*-------------------- TRIÁNGULO ------------------------*/
function calcularPerimetroTriangulo(){
    const input2= document.getElementById("lado1Triangulo");
    const ladoT1 = parseInt(input2.value);
    const input3 = document.getElementById("lado2Triangulo");
    const ladoT2 = parseInt(input3.value);
    const input4  = document.getElementById("baseTriangulo");
    const baseT = parseInt(input4.value);
    // const value = input.value;
    const perimetroT = perimetroTriangulo(ladoT1, ladoT2, baseT);
    alert(perimetroT); 
}

function calcularAreaTriangulo(){
    const input4  = document.getElementById("baseTriangulo");
    const baseT = parseInt(input4.value);
    const input5 = document.getElementById("alturaTriangulo");
    const alturaT = parseInt(input5.value);
    const areaT = areatriangulo(baseT, alturaT);
    alert(areaT); 
}

/*------------------ CIRCULO -------------------*/
function calcularDiametroCirculo(){
    const input6 = document.getElementById("radio");
    const radio = parseInt(input6.value);
    const dc = diametroCirculo(radio);
    alert(dc);
    alert("HolaDiametro");
}

function calcularCircunferencia(){
    const input6 = document.getElementById("radio");
    const radio = parseInt(input6.value);
    const cc = perimetroCirculo(radio);
    alert(cc);
    alert("HolaCircunferencia")
}

function calcularAreaCirculo(){
    const input6 = document.getElementById("radio");
    const radio = parseInt(input6.value);
    const ac = areaCirculo(radio);
    alert(ac);
    alert("HolaArea")
}