async function tableau(){
    const reponse = await fetch ('https://restcountries.com/v3.1/region/europe/?fields=name,area,population,capital');
    // console.log(reponse);

    const pays = await reponse.json();
    console.log(pays);
    let kindercountry = "";
    // console.log(country);

    
    for (const country of pays) {
        kindercountry +=  `<tr><th> ${country.name.official}</th><td> ${country.area}</td>
                            <td>${country.population}</td> <td>${country.capital}</td></tr>`;
                                
    };

  

    const querySelector = document.querySelector("#array");
    querySelector.innerHTML = kindercountry;
    // console.log(country);


}

window.addEventListener('load' , tableau());

let mouse = document.getElementById("hover");
console.log('mouse');
