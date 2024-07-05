const insertarEnTabla = ( users) =>{
    const table = users.map(  user => `
    <tr class="table-active">
        <th scope="row">${user.id}</th>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td><img src="${user.avatar}"  alt="..." style="border-radius: 35%;"></td>
    </tr>
        ` );
    return table.join("");
}

const buttonSection = document.getElementById("arreglo-tabla");
const loadCarta = document.getElementById("carta-espera");

const getUsuarios = ( url ) =>{
    fetch( url )
        .then( (resolve)=> resolve.json() ) 
        .then( (data)=> {            
            console.log( data.data);            
            buttonSection.innerHTML =  insertarEnTabla(data.data);
            loadCarta.style.display = 'none';
        } )           
        .catch( (error)=> {
            console.log(error);
            loadCarta.style.display = 'none';
        }  );
};

getUsuarios( "https://reqres.in/api/users?delay=3");