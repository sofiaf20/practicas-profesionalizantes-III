
function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
	/*Acceso a una posición específica de la tabla (fila,columna)
	tabla.childNodes[0].childNodes[nroFila]
	tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

	//Añade el elemento recibido
	tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}

function startApplicationGUI()
{	
//Creación de todos los elementos necesarios en la interfaz gráfica

let button0 = document.createElement("button");
button0.innerText = "0";
button0.classList.add("numberButton","blueButton");

let button1 = document.createElement("button");
button1.innerText = "1";
button1.classList.add("numberButton","blueButton");

let button2 = document.createElement("button");
button2.innerText = "2";
button2.classList.add("numberButton","blueButton");

let button3 = document.createElement("button");
button3.innerText = "3";
button3.classList.add("numberButton","blueButton");

let button4 = document.createElement("button");
button4.innerText = "4";
button4.classList.add("numberButton","blueButton");

let button5 = document.createElement("button");
button5.innerText ="5";
button5.classList.add("numberButton","blueButton");

let button6 = document.createElement("button");
button6.innerText ="6";
button6.classList.add("numberButton","blueButton");

let button7 = document.createElement("button");
button7.innerText ="7";
button7.classList.add("numberButton","blueButton");

let button8 = document.createElement("button");
button8.innerText ="8";
button8.classList.add("numberButton","blueButton");

let button9 = document.createElement("button");
button9.innerText ="9";
button9.classList.add("numberButton","blueButton");

let buttonPlus = document.createElement("button");
buttonPlus.innerText = "+";
buttonPlus.classList.add("numberButton","greenButton");

let buttonMinus = document.createElement("button");
buttonMinus.innerText ="-";
buttonMinus.classList.add("numberButton","greenButton");

let buttonMulti = document.createElement("button");
buttonMulti.innerText ="*";
buttonMulti.classList.add("numberButton","greenButton");

let buttonDivi = document.createElement("button");
buttonDivi.innerText ="/";
buttonDivi.classList.add("numberButton","greenButton");

let buttonEqual = document.createElement("button");
buttonEqual.innerText ="=";
buttonEqual.classList.add("numberButton","yellowButton");

let buttonDeci = document.createElement("button");
buttonDeci.innerText =".";
buttonDeci.classList.add("numberButton","blueButton");

let deleteButton = document.createElement("button");
deleteButton.innerText ="Borrar";
deleteButton.classList.add("deleteButton");

let display = document.createElement("input");
display.classList.add("box");


//Creación de los elementos de layout
let table = document.createElement("table");
for ( let i = 0; i<4; i++)
{
	let filaActual = table.insertRow();

	for( let c = 0; c<4; c++ )
	{
		filaActual.insertCell();
	}
}
let lastCell = table.insertRow().insertCell();
lastCell.setAttribute("colspan", 4);
table.classList.add("tabla");

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
function alHacerClickEnBotonDivi()
{
    display.value += "/";
}
function alHacerClickEnBotonMulti()
{
    display.value += "*";
}
function alHacerClickEnBotonDeci()
{
    display.value += ".";
}
function alHacerClickEnBotonIgual(){
    display.value = eval(display.value);
}
function alHacerClickEnBotonBorrar(){
    display.value = "";
}

//Asignar las reacciones
button0.addEventListener("click", alHacerClickEnBoton0);
button1.addEventListener("click", alHacerClickEnBoton1 );
button2.addEventListener("click", alHacerClickEnBoton2 );
button3.addEventListener("click", alHacerClickEnBoton3 );
button4.addEventListener("click", alHacerClickEnBoton4 );
button5.addEventListener("click", alHacerClickEnBoton5 );
button6.addEventListener("click", alHacerClickEnBoton6 );
button7.addEventListener("click", alHacerClickEnBoton7 );
button8.addEventListener("click", alHacerClickEnBoton8 );
button9.addEventListener("click", alHacerClickEnBoton9 );
buttonPlus.addEventListener("click", alHacerClickEnBotonSuma );
buttonMinus.addEventListener("click", alHacerClickEnBotonResta);
buttonMulti.addEventListener("click", alHacerClickEnBotonMulti);
buttonDivi.addEventListener("click", alHacerClickEnBotonDivi);
buttonDeci.addEventListener("click", alHacerClickEnBotonDeci);
buttonEqual.addEventListener("click", alHacerClickEnBotonIgual);
deleteButton.addEventListener("click", alHacerClickEnBotonBorrar);


//Ubicar los elementos de la interfaz gráfica dentro del layout

posicionarElementoEnTabla(table,0,0,button7);
posicionarElementoEnTabla(table,0,1,button8);
posicionarElementoEnTabla(table,0,2,button9);
posicionarElementoEnTabla(table,0,3,buttonPlus);
posicionarElementoEnTabla(table,1,0,button4);
posicionarElementoEnTabla(table,1,1,button5);
posicionarElementoEnTabla(table,1,2,button6);
posicionarElementoEnTabla(table,1,3,buttonMinus);
posicionarElementoEnTabla(table,2,0,button3);
posicionarElementoEnTabla(table,2,1,button2);
posicionarElementoEnTabla(table,2,2,button1);
posicionarElementoEnTabla(table,2,3,buttonMulti);
posicionarElementoEnTabla(table,3,0,button0);
posicionarElementoEnTabla(table,3,1,buttonDeci);
posicionarElementoEnTabla(table,3,2,buttonEqual);
posicionarElementoEnTabla(table,3,3,buttonDivi);
posicionarElementoEnTabla(table,4,0,deleteButton);

document.body.appendChild(display);
document.body.appendChild(table);

}

window.addEventListener("load", startApplicationGUI);



