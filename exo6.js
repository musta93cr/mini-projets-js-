const produits = [
    { nom: "PC portable", prix: 900, stock: 5 },
    { nom: "Souris", prix: 25, stock: 0 },
    { nom: "Clavier", prix: 60, stock: 3 },
    { nom: "Écran", prix: 250, stock: 0 },
    { nom: "Casque", prix: 80, stock: 8 }
];

const donnees =produits.filter(Element=>(Element.stock>0));
const resultats = donnees.map(Element=>({nom:Element.nom,prix:Element.prix,stock:Element.stock}));

const paragraphe = document.querySelector('#produits');
resultats.forEach(Element=>paragraphe.innerHTML+=`<p>  ${Element.nom} ${Element.prix} € - stock : ${Element.stock} </p>`)