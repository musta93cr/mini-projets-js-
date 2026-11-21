const produits = [
    { nom: "PC portable", prix: 900, stock: 5 },
    { nom: "Souris", prix: 25, stock: 10 },
    { nom: "Clavier", prix: 60, stock: 3 },
    { nom: "Écran", prix: 250, stock: 0 },
    { nom: "Casque", prix: 80, stock: 8 },
    { nom: "Imprimante", prix: 180, stock: 4 }
];

const result1 = document.querySelector('#resultat1');
const result2= document.querySelector('#resultat2');
const result3 = document.querySelector('#resultat3');

const donnees1= produits.filter(element=>element.stock>0);
const donnees2 =donnees1.filter(element=>element.prix>100);

const donnees3 = donnees1.reduce((accumulateur,element)=>{return accumulateur+( element.prix * element.stock)},0);

donnees1.forEach(element=>{result1.innerHTML +=`<p>${element.nom} ${element.prix} - stock:${element.stock}</p>`;});

donnees2.forEach(element=>{result2.innerHTML +=`<p>${element.nom} ${element.prix} - stock: ${element.stock}</p>`;});

 result3.innerHTML =`<p>${donnees3}</p>`;


