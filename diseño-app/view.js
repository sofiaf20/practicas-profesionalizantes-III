//import {HomeController} from './controller.js';

class HomeView extends HTMLElement //canvas o caja html
{
    //contructor(externalModel)
	constructor(){

        super(); //invocacion de la clase base

        //this.innerModel = externalModel;
		//this.innerController = new CalculatorController(this,this.innerModel);

        this.mySidebar = document.createElement("div");
        this.mySidebar.classList.add("w3-sidebar","w3-bar-block","w3-collapse","w3-animate-left","w3-card");
        this.mySidebar.style.width = "250px";
        this.mySidebar.style.zIndex = "3";

        this.myImg = document.createElement("img");
        this.myImg.src = "logo.png";
        this.myImg.classList.add("w3-bar-item","w3-button","w3-border-bottom","w3-large");
        this.myImg.style.width = "250px";
        //href="#"

        //<a class="w3-bar-item w3-button w3-hide-large w3-large" href="javascript:void(0)" onclick="w3_close()">Close <i class="fa fa-remove"></i></a>
        this.Close = document.createElement("button");
        this.Close.innerText = "Close";
        this.Close.classList.add("w3-bar-item", "w3-button", "w3-hide-large", "w3-large");

        this.innerClose = document.createElement("i");
        this.innerClose.classList.add("fa", "fa-remove");

        this.myHome = document.createElement("button");
        this.myHome.innerText = "Home";
        this.myHome.classList.add("w3-bar-item","w3-button","w3-teal");
        //href="#"

        this.Link1 = document.createElement("button");
        this.Link1.innerText = "Link1";
        this.Link1.classList.add("w3-bar-item","w3-button");
        //href="#"

        this.Link2 = document.createElement("button");
        this.Link2.innerText = "Link2";
        this.Link2.classList.add("w3-bar-item","w3-button");
        //href="#"

        this.Link3 = document.createElement("button");
        this.Link3.innerText = "Link3";
        this.Link3.classList.add("w3-bar-item","w3-button");
        //href="#"

        this.Link4 = document.createElement("button");
        this.Link4.innerText = "Link4";
        this.Link4.classList.add("w3-bar-item","w3-button");
        //href="#"

        this.Link5 = document.createElement("button");
        this.Link5.innerText = "Link5";
        this.Link5.classList.add("w3-bar-item","w3-button");
        //href="#"

        this.myOverlay = document.createElement("div");
        this.myOverlay.classList.add("w3-overlay","w3-hide-large","w3-animate-opacity");
        this.myOverlay.style.cursor = "pointer";
        //onclick="w3_close()"

        this.myBox = document.createElement("div");
        this.myBox.classList.add("w3-main");
        this.myBox.style.marginLeft = "250px";

        this.myTop = document.createElement("div");
        this.myTop.classList.add("w3-container","w3-top","w3-theme","w3-large");
        //<p><i class="fa fa-bars w3-button w3-teal w3-hide-large w3-xlarge" onclick="w3_open()"></i>

        
        this.bars = document.createElement("img");
        this.bars.src = "bars.png";
        this.bars.classList.add("fa","fa-bars", "w3-button", "w3-teal", "w3-hide-large", "w3-xlarge");
        

        this.myIntro = document.createElement("span");
        this.myIntro.innerText = "ISFT: Introduction";
        this.myIntro.classList.add("w3-hide");

        this.myHeader = document.createElement("header");
        this.myHeader.classList.add("w3-container","w3-theme");
        this.myHeader.style.padding = "64px 32px";

        this.myH1 = document.createElement("h1");
        this.myH1.innerText = "ISFT";
        this.myH1.classList.add("w3-xxxlarge");

        this.whiteBox = document.createElement("div");
        this.whiteBox.classList.add("w3-container","w3-padding-16","w3-card");
        this.whiteBox.style.backgroundColor ="#eee";

        this.myFooter = document.createElement("footer");
        this.myFooter.classList.add("w3-container","w3-theme");
        this.myFooter.style.padding ="32px";


    }

    connectedCallback(){

        this.appendChild(this.mySidebar);
        this.mySidebar.appendChild(this.myImg);
        this.mySidebar.appendChild(this.myHome);
        this.mySidebar.appendChild(this.Link1);
        this.mySidebar.appendChild(this.Link2);
        this.mySidebar.appendChild(this.Link3);
        this.mySidebar.appendChild(this.Link4);
        this.mySidebar.appendChild(this.Link5);
        this.appendChild(this.myOverlay);

        this.appendChild(this.myHeader);
        this.myHeader.appendChild(this.myTop);
        this.myTop.appendChild(this.myIntro);
        this.myTop.appendChild(this.bars);
        
        this.myHeader.appendChild(this.myH1);
        
        
        this.appendChild(this.whiteBox);
        this.appendChild(this.myFooter);
        
        //<a class="w3-bar-item w3-button w3-hide-large w3-large" href="javascript:void(0)" onclick="w3_close()">Close <i class="fa fa-remove"></i></a>
        //onclick="w3_close()
        //this.addEventListener('click', () => this.Close.onclick(close));
        //onclick="w3_open()
        //this.bars.addEventListener("click",w3_open());
        //this.addEventListener('click', () => this.innerController.onclick() );


       
    }
    disconnectedCallback(){}
    //addItem(nombre){
        //  create button
        //  div.appendChild(button); button.innerText = nombre
        //return button;
        //}
}
customElements.define('x-home-view', HomeView);

export {HomeView};
