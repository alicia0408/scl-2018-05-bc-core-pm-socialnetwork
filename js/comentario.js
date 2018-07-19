function saveComment() {
	if ((document.getElementById('comment').value === '')) {
		alert('no puedes dejar campos vacios');
	} else { // esto es para rescatar el valor en string de los comentarios 
		let comment = document.getElementById('comment').value;
		localStorage.setItem('comment', comment);// en este punto guardo comentario en mi local storage
	}
}

function printComment() {
	document.getElementById('datos').innerHTML = '';// para imprimir en pantalla
	for (let i = 0; i < localStorage.length; i++) {// se recorre el local storage
		let comment = localStorage.key(i); // estas almacenando los datos, va iterando en cada key guarda solo la llave del local storage para saber que hay en cada una de esas llaves,esta guardando los valores de local storage
		let comentarioTexto = localStorage.getItem(comment);// llama los datos que estan en local storage una vez que itere cuando los quiero pedir llamo al commentName

		let singleComment = document.createElement('div');
		singleComment.className = 'singleComment';


		let pComment = document.createElement('p');
		let nodeP = document.createTextNode(comentarioTexto);
		pComment.appendChild(nodeP);
		singleComment.appendChild(pComment);

		document.getElementById('datos').appendChild(singleComment);

	}


}

function deleteComments() {
	window.localStorage.clear();// quiere borrarlo globalmente por eso coloco window
	// y con estos se va eliminando lo que vamos colocando en el html
	document.getElementById('comment').value = '';
	document.getElementById('datos').innerHTML = '';
}

function makeComment() {
	if (typeof (Storage) !== 'undefined') {
		saveComment();
		printComment();
		document.getElementById('comment').value = '';
	} else {
		alert('lo sentimos, el web Storage no tiene soporte :(');
	}

}