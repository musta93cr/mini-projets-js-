const url = 'https://dummyjson.com/products';

async function chargerProduits() {
    

try {

    const response = await fetch (url);
    if(!response.ok){throw new Error('error http');}

    const donnees = await  response.json();
    const data = donnees.products.filter(element=>element.stock>0);
    const array = data.map(element=>({title : element.title, price: element.price})
    );
    console.log(array);
}
catch (error){console.log(error);}}
chargerProduits();

