
/**
 * role affiche la recette de cuisine en console 
 * parametre: recette la recette a afficher en console 
 * retour rien
 */
function afficheEnConsole(recette){
    console.log(`%c${recette.nom}`,"color:red; font-size:42px; text-transform:uppercase")
    console.log(`Diffculté : ${recette.difficulte}`)
    console.log(`Temps de préparation : ${recette.tempPreparation}`)
    console.log(`Temps de cuisson : ${recette.tempCuisson}`)
    console.log(`Pour ${recette.nbrPortions} personnes`)
    console.log("%cIngredients : ", "color:green; font-size: 18px; font-weight: bold")
    recette.ingredients.forEach(ingr=>{
        console.log(`- ${ingr}`)
    })

}


let recettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];


recettes.forEach(rec=>{
    //afficheEnConsole(rec)

    //je construit la liste d'ingredient
recettes.forEach(recette=){
  let liste=""
  recette.ingredients.forEach(ingredient=){
    liste}
  }
}

    //je construit ma div 
  document.getElementById("monid").innerHTML+=`<div>
    <h2>${rec.nom}</h2>
    <p>${rec.difficulte}</p>
    <p>${rec.tempPreparation}</p>
    <p>${rec.tempCuisson}</p>
    <p>${rec.nbrPortions}</p>
    <p>${}</p>
</div>`
    
})
