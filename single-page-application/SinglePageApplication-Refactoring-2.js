
function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
	/*Acceso a una posición específica de la tabla (fila,columna)
	tabla.childNodes[0].childNodes[nroFila]
	tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

	//Añade el elemento recibido
	tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}
	
//Creación de todos los elementos necesarios en la interfaz gráfica
let boton0 = document.createElement("button");
boton0.innerText = "0";
boton0.classList.add("numberButton","blueButton");

let boton1 = document.createElement("button");
boton1.innerText = "1";
boton1.classList.add("numberButton","blueButton");

let boton2 = document.createElement("button");
boton2.innerText = "2";
boton2.classList.add("numberButton","blueButton");

let boton3 = document.createElement("button");
boton3.innerText = "3";
boton3.classList.add("numberButton","blueButton");

let boton4 = document.createElement("button");
boton4.innerText = "4";
boton4.classList.add("numberButton","blueButton");

let boton5 = document.createElement("button");
boton5.innerText ="5";
boton5.classList.add("numberButton","blueButton");

let boton6 = document.createElement("button");
boton6.innerText ="6";
boton6.classList.add("numberButton","blueButton");

let boton7 = document.createElement("button");
boton7.innerText ="7";
boton7.classList.add("numberButton","blueButton");

let boton8 = document.createElement("button");
boton8.innerText ="8";
boton8.classList.add("numberButton","blueButton");

let boton9 = document.createElement("button");
boton9.innerText ="9";
boton9.classList.add("numberButton","blueButton");

let botonSuma = document.createElement("button");
botonSuma.innerText = "+";
botonSuma.classList.add("numberButton","greenButton");

let botonResta = document.createElement("button");
botonResta.innerText ="-";
botonResta.classList.add("numberButton","greenButton");

let botonMultiplicacion = document.createElement("button");
botonMultiplicacion.innerText ="*";
botonMultiplicacion.classList.add("numberButton","greenButton");

let botonDivision = document.createElement("button");
botonDivision.innerText ="/";
botonDivision.classList.add("numberButton","greenButton");

let botonIgual = document.createElement("button");
botonIgual.innerText ="=";
botonIgual.classList.add("numberButton","yellowButton");

let botonDecimal = document.createElement("button");
botonDecimal.innerText =".";
botonDecimal.classList.add("numberButton","blueButton");

let botonBorrar = document.createElement("button");
botonBorrar.innerText ="Borrar";
botonBorrar.classList.add("deleteButton");

let display = document.createElement("input");
display.classList.add("inputBox");


//Creación de los elementos de layout
let tabla = document.createElement("table");
for ( let i = 0; i<4; i++)
{
	let filaActual = tabla.insertRow();

	for( let c = 0; c<4; c++ )
	{
		filaActual.insertCell();
	}
}
let lastCell = tabla.insertRow().insertCell();
lastCell.setAttribute("colspan", 4);

//Creación de las reaccioness a las ocurrencias de los eventos
function alHacerClickEnBoton0()
{
    display.value += "0";
}
function alHacerClickEnBoton1()
{
    display.value += "1";
}

function alHacerClickEnBoton2()
{
    display.value += "2";
}

function alHacerClickEnBoton3()
{
    display.value += "3";
}
function alHacerClickEnBoton4()
{
    display.value += "4";
}
function alHacerClickEnBoton5()
{
    display.value += "5";
}
function alHacerClickEnBoton6()
{
    display.value += "6";
}
function alHacerClickEnBoton7()
{
    display.value += "7";
}
function alHacerClickEnBoton8()
{
    display.value += "8";
}
function alHacerClickEnBoton9()
{
    display.value += "9";
}
function alHacerClickEnBotonSuma()
{
    display.value += "+";
}
function alHacerClickEnBotonResta()
{
    display.value += "-";
}
function alHacerClickEnBotonDivision()
{
    display.value += "/";
}
function alHacerClickEnBotonMultiplicacion()
{
    display.value += "*";
}
function alHacerClickEnBotonDecimal()
{
    display.value += ".";
}
function alHacerClickEnBotonIgual(){
    display.value += "=";
}
//Asignar las reacciones
boton0.addEventListener("click", alHacerClickEnBoton0);
boton1.addEventListener("click", alHacerClickEnBoton1 );
boton2.addEventListener("click", alHacerClickEnBoton2 );
boton3.addEventListener("click", alHacerClickEnBoton3 );
boton4.addEventListener("click", alHacerClickEnBoton4 );
boton5.addEventListener("click", alHacerClickEnBoton5 );
boton6.addEventListener("click", alHacerClickEnBoton6 );
boton7.addEventListener("click", alHacerClickEnBoton7 );
boton8.addEventListener("click", alHacerClickEnBoton8 );
boton9.addEventListener("click", alHacerClickEnBoton9 );
botonSuma.addEventListener("click", alHacerClickEnBotonSuma );
botonResta.addEventListener("click", alHacerClickEnBotonResta);
botonMultiplicacion.addEventListener("click", alHacerClickEnBotonMultiplicacion);
botonDivision.addEventListener("click", alHacerClickEnBotonDivision);
botonDecimal.addEventListener("click", alHacerClickEnBotonDecimal);
botonIgual.addEventListener("click", alHacerClickEnBotonIgual);


//Ubicar los elementos de la interfaz gráfica dentro del layout
document.body.appendChild(display);
document.body.appendChild(tabla);
posicionarElementoEnTabla(tabla,0,0,boton7);
posicionarElementoEnTabla(tabla,0,1,boton8);
posicionarElementoEnTabla(tabla,0,2,boton9);
posicionarElementoEnTabla(tabla,0,3,botonSuma);
posicionarElementoEnTabla(tabla,1,0,boton4);
posicionarElementoEnTabla(tabla,1,1,boton5);
posicionarElementoEnTabla(tabla,1,2,boton6);
posicionarElementoEnTabla(tabla,1,3,botonResta);
posicionarElementoEnTabla(tabla,2,0,boton3);
posicionarElementoEnTabla(tabla,2,1,boton2);
posicionarElementoEnTabla(tabla,2,2,boton1);
posicionarElementoEnTabla(tabla,2,3,botonMultiplicacion);
posicionarElementoEnTabla(tabla,3,0,boton0);
posicionarElementoEnTabla(tabla,3,1,botonDecimal);
posicionarElementoEnTabla(tabla,3,2,botonIgual);
posicionarElementoEnTabla(tabla,3,3,botonDivision);
posicionarElementoEnTabla(tabla,4,0,botonBorrar);




