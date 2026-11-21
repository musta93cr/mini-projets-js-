const formations = [
    { nom: "HTML/CSS", prix: 150, niveau: "débutant" },
    { nom: "JavaScript", prix: 250, niveau: "intermédiaire" },
    { nom: "Bootstrap", prix: 100, niveau: "débutant" },
    { nom: "React", prix: 350, niveau: "avancé" },
    { nom: "PHP", prix: 200, niveau: "débutant" }
];

const donnes = formations.filter(element=>element.niveau==='débutant' && element.prix<=150)
const resultats =donnes.map(element=>({nom:element.nom,prix:element.prix}));

const affichage = document.querySelector('#result');
resultats.forEach(element=>{affichage.innerHTML +=`<p>${element.nom},${element.prix} </p>`});