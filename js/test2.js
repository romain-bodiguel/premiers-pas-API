
// Fonction qui se déclenche lorsque qu'on reçoit la réponse du serveur
function handleResponse( response )
{
  // J'indique quoi faire une fois le .json() de la requête interprété
  response.json().then( handleJson );
}

// Fonction qui se déclenche lorsqu'on a terminé de lire la réponse au format JSON
function handleJson( json )
{  
  // Je récupère ma réponse au format JSON
  let contentElement = document.querySelector( "#content" );

  // Sur cette API, le texte de la blague se situe dans la propriété value du json
  contentElement.textContent = json.value;
}

function handleButtonClick( evt )
{
  // J'envoi une requete HTTP
  let requestPromise = fetch( "https://api.chucknorris.io/jokes/random" );
  
  // J'indique quelle fonction appeller une fois la réponse reçue
  // Comme pour les eventListener, cette fonction recevra auto en paramètre la réponse
  requestPromise.then( handleResponse );
}

// Je récupère mon bouton pour y ajouter un EL au clic
// Quand je clic, je vais demander une fact au hasard
// et l'afficher dans la div#content
let buttonElement = document.querySelector( "#random" );
buttonElement.addEventListener( "click", handleButtonClick );
