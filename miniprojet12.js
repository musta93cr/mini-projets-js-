const url = 'https://dummyjson.com/carts';

async function paniersCommandes() {
    
    try{
        
        const recuperer= await fetch (url);

        if(!recuperer.ok){
            throw new Error("erreur https");

            
        }

        const data =await recuperer.json();

        const donnees =data;
        /*console.log(donnees.carts.forEach(element => {console.log(element.id);}));*/
        
        const commande =document.querySelector('#commandes');
         donnees.carts.forEach(element=>{let categorie= '';
         
        if(element.total>500){ 
            categorie='Grosse commande';
        }
        else{
            categorie= 'commande classique';
        };(commande.innerHTML +=`<p>${element.id}</p><p>${element.userId}</p><p>${element.total}</p><p>${element.totalProducts}</p><p>${categorie}</p> `)
    });

     const grosseCommande=donnees.carts.filter(element=>element.total>500);
        const totalite =document.querySelector('#total');
       grosseCommande.forEach(element=>{totalite.innerHTML +=`<p>${element.id}</p><p>${element.total}</p>`;});

    const chiffreAffaire= donnees.carts.reduce((accumulateur,element)=>{return accumulateur + element.total},0);
    const chiffre = document.querySelector('#chiffreAffaire');
    chiffre.innerHTML =  chiffreAffaire;

    const rechercher= donnees.carts.find(element=>element.id===18);
    
        const recherche =document.querySelector('#recherche');
    if(rechercher){

        recherche.innerHTML +=`<p>${rechercher.id}</p><p>${rechercher.userId}</p><p>${rechercher.total}</p>`;
    }
    else{
        recherche.innerHTML = 'commande introuvable'
    }


    } catch (error){console.log(error)};
    
    
}
paniersCommandes();