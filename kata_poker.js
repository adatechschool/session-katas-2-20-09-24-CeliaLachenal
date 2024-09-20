/*ETAPE 1 : Créeer une fonction createDeck qui génère 52 cartes sous forme d'un tableau de chaines de caractères  */

let deck = [];
console.log(deck);
//je crée une fonction qui va me générer les carte de la couleur pic
function creerPic() {
  let i = 1;
  let cartePic;
  if (i < 13) {
    while (i < 13) {
      cartePic = deck.push(i + "♠︎");
      console.log('s', i);
      i++;
      if (i === 11) {
        cartePic = deck.push("J♠︎");
        i++;
        console.log(i);
      } else if (i === 12) {
        cartePic = deck.push("Q♠︎");
        i++;
      } else if (i === 13) {
        cartePic = deck.push("K♠︎");
        i++;
      }

      /* console.log(cartePic); */
    }
  }
}

//je crée une fonction qui va me créer les cartes de la couleur trefle
function creerTrefle() {}

//je crée une fonction qui va me créer les cartes de la couleur carreau
function creerCarreau() {}

//je crée une fonction qui va me créer les cartes de la couleur coeur
function creerCoeur() {}

function createDeck(Deckcartes) {
  creerPic();
}

createDeck();
