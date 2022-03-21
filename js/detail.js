
// Fonction qui se déclenche lorsque qu'on reçoit la réponse du serveur
function handlePofpof( responsePafpaf )
{
  // Ce qui se trouve à l'intérieur de cette fonction
  // anonyme ne sera executé QUE quand la réponse sera reçue
  console.log( "Réponse reçue" );

  // PROBLEME : la variable responsePafpaf n'est pas exploitable telle quelle
  // C'est un objet de type "Response"
  console.log( responsePafpaf );

  // COUP DE CHANCE : il existe une méthode .json() sur les objets Response
  // pour récupérer leur contenu au format JSON
  // RE-PROBLEME : cette méthode nous renvoi une nouvelle promesse
  // cette fois, une "promesse de lecture et d'interprétation" du contenu de la réponse
  let jsonResponsePromise = responsePafpaf.json();
  console.log( jsonResponsePromise );

  // On doit ENCORE indiquer à JS quelle fonction appeller une fois cette lecture terminée
  // Ici, c'est la fonction handleJson qui s'en occupera
  jsonResponsePromise.then( handleJson );
  
  console.log( "J'ai terminé d'indiquer a JS quoi faire une fois la réponse lue." );
}

// Fonction qui se déclenche lorsqu'on a terminé de lire la réponse au format JSON
function handleJson( jsonPifpif )
{
  // Je peux ici ENFIN récupérer le contenu de ma requete, au format JSON
  // que je reçoit automatiquement en paramètre (comme on recoit evt dans un handleXXXX)
  console.log( "J'ai terminé de lire la réponse, je log (enfin) le resultat final !" );
  console.log( jsonPifpif );

  console.log( jsonPifpif.value );
}

console.log( "Avant d'envoyer la requête" );

// J'envoi une requete HTTP
let requestPromisePofpof = fetch( "https://api.chucknorris.io/jokes/random" );

console.log( "Requete envoyée !" );

// On indique à JS quoi faire si la réponse arrive
// => Si la promesse de réponse est tenue
requestPromisePofpof.then( handlePofpof );

// Ce code ne marche pas mais peut vous aider a comprendre le principe
//    requestPromisePofpof.addEventListener( "responseReceived", handlePofpof );
// est identique dans son fonctionnement à
//    requestPromisePofpof.then( handlePofpof );

console.log( "Suite du script..." );