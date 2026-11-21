const url = 'https://dummyjson.com/products';

async function produis() {
    
    try{
        const response = await fetch (url);
        if(!response.ok){ throw new Error("erreur https");
        

        }

        const data = await response.json();
        
        const produits = document.querySelector('#produits');
        const array = data.products;
        array.forEach(element => {produits.innerHTML +=`<p>${element.id}</p><p>${element.title}</p><p>${element.price}</p><p>${element.stock}</p><p>${element.category}</p>`
            
        });

        const disponible = document.querySelector('#disponible');
        const dispo = array.filter(element=>element.stock>0);
        dispo.forEach(element=>{disponible.innerHTML +=`<p>${element.title}</p><p>${element.price}</p><p>${element.stock}</p>`});

        const recherche = document.querySelector('#recherche');
        const rechercher = array.find(element=>element.id===10);
        if(rechercher){
            recherche.innerHTML = rechercher.id;
        }

        const valeur = document.querySelector('#valeur');
        const valeurstock= array.reduce((accumulateur,element)=>{return accumulateur+(element.price*element.stock);},0);
        valeur.innerHTML = Number((valeurstock).toFixed(2));

        const prixMoyen = document.querySelector('#prixMoyen');
        const valeurMoyen = array.reduce((accumulateur,element)=>{return accumulateur + element.price;},0);
        prixMoyen.innerHTML = Number((valeurMoyen/array.length).toFixed(2));
    }catch(error){console.log(error)}
}
produis();