const url = 'https://dummyjson.com/products';

async function chargerProduits () {
 
    
    try{
        
        const response = await fetch (url);
        
        if(!response.ok){
            throw new Error('erreur https')
            
        }
            const donnees = await response.json();

            const array = donnees.products;
            
            const disponible = array.filter(element=>(element.stock>0));

            const produits=document.querySelector('#produits');
            disponible.forEach(element =>produits.innerHTML += `${element.id}, ${element.title},${element.price},${element.stock}`);
    
             
            const recherche = disponible.find(element=>element.id===6);
            const rechercher = document.querySelector("#recherche");
            rechercher.innerHTML =  recherche.title, recherche.price;

            const totalstock = disponible.reduce((accumulateur,element)=>{return accumulateur+( element.price * element.stock)},0);
            const total = document.querySelector('#total');
            total.innerHTML =  totalstock;

            




        
    }catch(error) {console.log(error)};
    

    
}
chargerProduits();










