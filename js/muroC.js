
var muro = {};// se crea obj muro
muro.muro_id = "prueba id";
console.log(muro.muro_id);
muro.post = [];
var post = {};// se crea obj post
post.tipo = "Texto";
post.likes = 1;
post.infomuro = "Mi muro";

muro.post.push(post);// agrego obj post al arr de muro
console.log(muro.post[0].post);

// instancia de firebase
var database = firebase.database();
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl // aqui se debe agregar el llamado a la foto
    });
  }

  var likesCountRef = firebase.database().ref('posts/' + post.likes + '/starCount');
likesCountRef.on('value', function(snapshot) {
  updateStarCount(post.likes, snapshot.val());
});

// //  firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   }, function(error) {
//     if (error) {
//       // The write failed...
//     } else {
//       // Data saved successfully!
//     }
//   });
// }

