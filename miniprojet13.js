

const url ='https://dummyjson.com/users';

async function chargerusers() {

    try{

        const response = await fetch (url);
        if(!response.ok){
            throw new Error("erreur https");

            
        }
        const data = await response.json();
        const array = data.users;
        const utilisateurs = document.querySelector('#utilisateurs');
        array.forEach(element =>{ utilisateurs.innerHTML +=`<p>${element.firstName}, ${element.lastName}</p><p>${element.age}</p><p>${element.email}</p><p>${element.address.city}</p>`
            
    });

    const majeurs=array.filter(element=>element.age>=30);
    const majeur=document.querySelector('#majeurs');

    majeurs.forEach(element=>{majeur.innerHTML +=`<p>${element.firstName}, ${element.lastName}</p><p>${element.age}</p><p>${element.email}</p><p>${element.address.city}</p>`});

    const recherche =document.querySelector('#recherche');
    const userRecherche = array.find(element=>element.id ===42);
        if(userRecherche){
            recherche.innerHTML +=`${ userRecherche.id} ${userRecherche.firstName} ${userRecherche.lastName} ${userRecherche.email}`
        }
        else{
            recherche.innerHTML = `utilisateur introuvable`
        };
    

    const nombre = document.querySelector('#nombre');
    

        const total = array.reduce((accumulateur,element)=>{return accumulateur+1;},0);

        nombre.innerHTML =  total;

        
        const age = array.reduce((accumulateur,element)=>{return accumulateur+element.age; },0);

        const moyen = Number((age/total).toFixed(2));
        const ageMoyen =document.querySelector('#ageMoyen');
        ageMoyen.innerHTML = moyen;
    }
    

    catch (error){console.log(error);}}

    

chargerusers();

