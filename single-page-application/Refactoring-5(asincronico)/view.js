import {CalculatorController} from './controller.js';

class CalculatorView extends HTMLElement //canvas o caja html
{
	constructor( externalModel ){

        super(); //invocacion de la clase base

        this.innerModel = externalModel;
		this.innerController = new CalculatorController(this,this.innerModel);

        this.display = document.createElement("input");
        this.display.type = "text";
        this.display.classList.add("box");

		this.button0 = document.createElement("button");
	    this.button0.innerText = "0";
	    this.button0.classList.add("numberButton", "blueButton");

        this.button1 = document.createElement("button");
	    this.button1.innerText = "1";
	    this.button1.classList.add("numberButton", "blueButton");

	    this.button2 = document.createElement("button");
	    this.button2.innerText = "2";
	    this.button2.classList.add("numberButton", "blueButton");

	    this.button3 = document.createElement("button");
	    this.button3.innerText = "3";
	    this.button3.classList.add("numberButton", "blueButton");

		this.button4 = document.createElement("button");
	    this.button4.innerText = "4";
	    this.button4.classList.add("numberButton", "blueButton");

		this.button5 = document.createElement("button");
	    this.button5.innerText = "5";
	    this.button5.classList.add("numberButton", "blueButton");

		this.button6 = document.createElement("button");
	    this.button6.innerText = "6";
	    this.button6.classList.add("numberButton", "blueButton");

		this.button7 = document.createElement("button");
	    this.button7.innerText = "7";
	    this.button7.classList.add("numberButton", "blueButton");

		this.button8 = document.createElement("button");
	    this.button8.innerText = "8";
	    this.button8.classList.add("numberButton", "blueButton");

		this.button9 = document.createElement("button");
	    this.button9.innerText = "9";
	    this.button9.classList.add("numberButton", "blueButton");

		this.buttonPlus = document.createElement("button");
	    this.buttonPlus.innerText = "+";
	    this.buttonPlus.classList.add("numberButton", "greenButton");

		this.buttonMinus = document.createElement("button");
	    this.buttonMinus.innerText = "-";
	    this.buttonMinus.classList.add("numberButton", "greenButton");

		this.buttonMulti = document.createElement("button");
	    this.buttonMulti.innerText = "*";
	    this.buttonMulti.classList.add("numberButton", "greenButton");

		this.buttonDivi = document.createElement("button");
	    this.buttonDivi.innerText = "/";
	    this.buttonDivi.classList.add("numberButton", "greenButton");

		this.buttonDeci = document.createElement("button");
	    this.buttonDeci.innerText = ".";
	    this.buttonDeci.classList.add("numberButton", "blueButton");

        this.Equalbutton = document.createElement("button");
	    this.Equalbutton.innerText = "=";
	    this.Equalbutton.classList.add("numberButton", "yellowButton");

		this.deleteButton = document.createElement("button");
	    this.deleteButton.innerText = "Borrar";
	    this.deleteButton.classList.add("deleteButton");
	
        this.layout = document.createElement("table");
		this.layout.classList.add("tabla");
	    for ( let i = 0; i<4; i++)
	    {
			let filaActual = this.layout.insertRow();
			for( let c = 0; c<4; c++ )
			{
				filaActual.insertCell();
			}
        }   
        let lastCell = this.layout.insertRow().insertCell();
	    lastCell.setAttribute("colspan", 4);
    }
    posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
    {
		/*Acceso a una posición específica de la tabla (fila,columna)
		tabla.childNodes[0].childNodes[nroFila]
		tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

		//Añade el elemento recibido
		tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
	}
    connectedCallback(){

		this.posicionarElementoEnTabla(this.layout,0,0,this.button7);
		this.posicionarElementoEnTabla(this.layout,0,1,this.button8);
		this.posicionarElementoEnTabla(this.layout,0,2,this.button9);
		this.posicionarElementoEnTabla(this.layout,0,3,this.buttonPlus);
		this.posicionarElementoEnTabla(this.layout,1,0,this.button4);
		this.posicionarElementoEnTabla(this.layout,1,1,this.button5);
		this.posicionarElementoEnTabla(this.layout,1,2,this.button6);
		this.posicionarElementoEnTabla(this.layout,1,3,this.buttonMinus);
        this.posicionarElementoEnTabla(this.layout,2,0,this.button3);
	    this.posicionarElementoEnTabla(this.layout,2,1,this.button2);
	    this.posicionarElementoEnTabla(this.layout,2,2,this.button1);
		this.posicionarElementoEnTabla(this.layout,2,3,this.buttonMulti);
		this.posicionarElementoEnTabla(this.layout,3,0,this.button0);
		this.posicionarElementoEnTabla(this.layout,3,1,this.buttonDeci);
        this.posicionarElementoEnTabla(this.layout,3,2,this.Equalbutton);
		this.posicionarElementoEnTabla(this.layout,3,3,this.buttonDivi);
		this.posicionarElementoEnTabla(this.layout,4,0,this.deleteButton);

        this.appendChild(this.display);
        this.appendChild(this.layout);

        this.button0.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton0(event));
		this.button1.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton1(event) );
		this.button2.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton2(event) );
		this.button3.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton3(event) );
		this.button4.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton4(event) );
		this.button5.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton5(event) );
		this.button6.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton6(event) );
		this.button7.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton7(event) );
		this.button8.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton8(event) );
		this.button9.addEventListener("click", (event) => this.innerController.alHacerClickEnBoton9(event) );
		this.buttonPlus.addEventListener("click", (event) => this.innerController.alHacerClickEnBotonSuma(event) );
		this.buttonMinus.addEventListener("click", (event) => this.innerController.alHacerClickEnBotonResta(event));
		this.buttonMulti.addEventListener("click", (event) => this.innerController.alHacerClickEnBotonMulti(event));
		this.buttonDivi.addEventListener("click", (event) => this.innerController.alHacerClickEnBotonDivi(event));
		this.buttonDeci.addEventListener("click", (event) => this.innerController.alHacerClickEnBotonDeci(event));
		this.Equalbutton.addEventListener("click", (event) => this.innerController.alHacerClickEnBotonIgual(event));
		this.deleteButton.addEventListener("click", (event) => this.innerController.alHacerClickEnBotonBorrar(event));
    }
}
customElements.define('x-calculator-view', CalculatorView);

export {CalculatorView};
