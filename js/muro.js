const boton = document.getElementById('btn');

boton.addEventListener('click', () => {

  // construyendo los elementos
  let publicacion = document.getElementById('publi').value;// rescato el valor del texto que se introduces
  document.getElementById('publi').value = '';// para mantener limpio el area de texto
  const cont = document.getElementById('cont');
  const newPubli = document.createElement('div');
  const like = document.createElement('i');
  const contenedorElemento = document.createElement('p');
  let textNewPubli = document.createTextNode(publicacion);
  const heart = document.createElement('i');
  const trash = document.createElement('i');

  // agregando atributos (iconos)
  like.classList.add('fa', 'fa-thumbs-up', 'like');
  heart.classList.add('fa', 'fa-heart', 'heart');
  trash.classList.add('fa', 'fa-trash', 'trash');

  //se complementan los elementos(se le asignan a los padres sus hijos)
  contenedorElemento.appendChild(textNewPubli);
  newPubli.appendChild(like);
  newPubli.appendChild(heart);
  newPubli.appendChild(trash);
  newPubli.appendChild(contenedorElemento);
  cont.appendChild(newPubli);

  // se crea el evento para los iconos (el de eliminar comentario al clickear el trash, y el heart en rojo al clickear)
  heart.addEventListener('click', () => {
    heart.classList.toggle('red');
  })
  trash.addEventListener('click', () => {
    cont.removeChild(newPubli);

  })
  like.addEventListener('click', () => {
    like.classList.toggle('blue');
  })

  document.addEventListener('DOMContentLoaded', localStorageReady);
  agregarPublicacionesLocalStorage(publicacion);
})



// mostrar datos de local storage
function localStorageReady() {
  let publicacion = null;
  publicacion = obtenerPublicacionesLocalStorage();
  publicacion.forEach(function (text) {
    creandoDom(text);
  });
}

//Agrega publicación a local storage
function agregarPublicacionesLocalStorage(texto) {
  if ((document.getElementById('publi').value === '')) {
    alert('no puedes dejar campos vacios');
  } else { // esto es para rescatar el valor en string de los comentarios 
    let publicacion = document.getElementById('publi').value;
    localStorage.setItem('publi', publicacion);// en este punto guardo publicacion en mi local storage
  }

}

// Comprobar que haya elementos en local storage, retorna un arreglo
function obtenerPublicacionesLocalStorage() {
  let publicacion = null;
  if (localStorage.getItem('publi') === null) {
    publicacion = [];
  } else {
    publicacion = JSON.parse(localStorage.getItem('publi'));
  }
  return publicacion;
}
// Eliminar publicaciones de Local Storage
function borrarPublicacionesLocalStorage(publicacion) {
  let borrarPublicacion = publicacion.substring(0, tarea.length);
  let publicacion = obtenerPublicacionesLocalStorage();
  publicacion.forEach(function (textoArr, index) {
    if (borrarPublicacion === textoArr) {
      publicacion.splice(index, 1);
    }
  })

  localStorage.setItem('publi', JSON.stringify(publicacion));

  return borrarTareasLocalStorage;
}
