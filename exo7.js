const catalogue = [
    { nom: "PC portable", prix: 900, stock: 5 },
    { nom: "Souris", prix: 25, stock: 10 },
    { nom: "Clavier", prix: 60, stock: 3 },
    { nom: "Écran", prix: 250, stock: 0 },
    { nom: "Casque", prix: 80, stock: 8 }
]

const paragraphe = document.querySelector('#resultat');

catalogue.forEach(element=>{

    if(element.stock===0){paragraphe.innerHTML +=`<p>${element.nom} - ${element.prix} € - stock : ${element.stock
    } - rupture de stock</p>`

    }else{
        paragraphe.innerHTML +=`<p>${element.nom} - ${element.prix} € - stock : ${element.stock
    } - dispo</p>`

    };

});

