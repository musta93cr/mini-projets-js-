const factures = [
    { id: 1, client: "Ali", montant: 250, statut: "payée" },
    { id: 2, client: "Sarah", montant: 450, statut: "en attente" },
    { id: 3, client: "Thomas", montant: 150, statut: "payée" },
    { id: 4, client: "Julie", montant: 700, statut: "payée" },
    { id: 5, client: "Mehdi", montant: 300, statut: "en attente" }
];
const paragraphe = document.querySelector('#resultat');
const paragraphe2=document.querySelector('#donnees');
const data =factures.filter(element=>(element.statut==='payée'));

const result = data.map(element=>({client:element.client ,montant: element.montant}

))

const total = result.reduce((accumulateur,element)=>{return accumulateur+element.montant;},0);
result.forEach(element=>{
paragraphe.innerHTML += `${element.client} ${element.montant}`});
paragraphe2.innerHTML = `somme total :${total}`