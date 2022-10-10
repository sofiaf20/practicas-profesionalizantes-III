import {HomeView} from './view.js';
//import {HomeModel} from './model.js';

function startGUIApplication()
{
	//let myHomeModel = new HomeModel();
	//let myHomeView = new HomeView(myHomeModel);
	let myHomeView = new HomeView();
	document.body.appendChild(myHomeView);
}
window.addEventListener('load',startGUIApplication );
