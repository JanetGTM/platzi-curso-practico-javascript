//------  CODIGO DEL CUADRADO --------------
function perimetroCuadrado(lado)
    { return lado * 4; } 

function areaCuadrado(lado)
    { return lado * lado; } 

//---------- CÓDIGO DEN TRIANGULO -----------
function perimetroTriangulo(lado1, lado2, base)
    { return lado1 + lado2 + base; }        

function areatriangulo(base, altura)
    { return (base * altura) / 2; } 

//-------------CODIGO DEL CIRCULO -------------
//-------------Diámetro
function diametroCirculo(radio)
    {  return radio * 2; }
const PI = Math.PI;

//------------Circunferencia
function perimetroCirculo(radio){
     const diametro = diametroCirculo(radio);
    return diametro * PI;
 }
//-------------Area
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
    const pc = document.querySelector('#perimetro_cuadrado');
    pc.innerHTML = "Perímetro: " + perimetro + " cm";
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const ac = document.querySelector('#area_cuadrado');
    ac.innerHTML = "Área: " + area + " cm<sup>2</sup>";
}
/*-------------------- TRIÁNGULO ------------------------*/
function calcularPerimetroTriangulo(){
    const input2= document.getElementById("ladosTriangulo");
    const ladoT1 = parseInt(input2.value);
    const perimetroT = perimetroTriangulo(ladoT1, ladoT1,ladoT1);
    const pt = document.querySelector('#perimetro_triangulo');
    pt.innerHTML = "Perímetro: " + perimetroT + " cm";
}

function calcularAreaTriangulo(){
    const input2= document.getElementById("ladosTriangulo");
    const ladoT1 = parseInt(input2.value);

//-------------teorema de pitagoras
    const h = ladoT1 * ladoT1;
    const c_a = (ladoT1 / 2) * (ladoT1 / 2);
    const c_o = Math.sqrt(h - c_a);   

//-------------área del triangulo
    const alturaT = (ladoT1 * c_o) / 2;
    const areaT = areatriangulo(ladoT1, alturaT);
    const at = document.querySelector('#area_triangulo');
    at.innerHTML = "Área: " + areaT.toFixed(2) + " cm<sup>2</sup>";
}
/*------------------ CIRCULO -------------------*/
function calcularDiametroCirculo(){
    const input3 = document.getElementById("radio");
    const radio = parseInt(input3.value);
    const dc = diametroCirculo(radio);
    const diametro_c = document.querySelector('#diametro_circulo');
    diametro_c.innerHTML = "Diámetro: " + dc + " cm";
}

function calcularCircunferencia(){
    const input3 = document.getElementById("radio");
    const radio = parseInt(input3.value);
    const cc = perimetroCirculo(radio).toFixed(1);
    const circunferencia_c = document.querySelector('#circunferencia_circulo');
    circunferencia_c.innerHTML = "Circunferencia: " + cc + " cm";
}

function calcularAreaCirculo(){
    const input3 = document.getElementById("radio");
    const radio = parseInt(input3.value);
    const ac = areaCirculo(radio).toFixed(1);
    const area_c = document.querySelector('#area_circulo');
    area_c.innerHTML = "Área: " + ac + " cm<sup>2</sup>";
}
/*-------- BORRAR INPUTS */
//------- id inputs de las figuras
const input = document.getElementById("inputCuadrado");
const input2= document.getElementById("ladosTriangulo");
const input3 = document.getElementById("radio");

// -------   id divs resultados de cuadrado
const pc = document.querySelector('#perimetro_cuadrado');
const ac = document.querySelector('#area_cuadrado');

// -------   id divs resultados de triángulo
const pt = document.querySelector('#perimetro_triangulo');
const at = document.querySelector('#area_triangulo');

// -------   id divs resultados de circulo
const diametro_c = document.querySelector('#diametro_circulo');
const circunferencia_c = document.querySelector('#circunferencia_circulo');
const area_c = document.querySelector('#area_circulo');

function clear_input_cuadrado(){
    input.value = "";
    pc.innerHTML = "Perímetro:";
    ac.innerHTML = "Área: ";
}

function clear_input_triangulo(){
    input2.value = "";
    pt.innerHTML = "Perímetro:";
    at.innerHTML = "Área:";
}
function clear_input_circulo(){
    input3.value = "";
    diametro_c.innerHTML = "Diámetro:";
    circunferencia_c.innerHTML = "Circunferencia:";
    area_c.innerHTML = "Área:";
}
 
input.addEventListener("click", clear_input_cuadrado);
input2.addEventListener("click", clear_input_triangulo);
input3.addEventListener("click", clear_input_circulo);