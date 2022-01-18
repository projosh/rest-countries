async function tableau(){
    const reponse = await fetch ('https://restcountries.com/v3.1/region/europe/?fields=name,area,population,capital');
    // console.log(reponse);

    const pays = await reponse.json();
    console.log(pays);
    let kindercountry = "";
    // console.log(country);

    const number = new Intl.NumberFormat("en");
    
    
    for (const country of pays) {
        kindercountry +=  `<tr><th class="text-nowrap"> ${country.name.official}</th><td> ${number.format(country.area)}</td>
                            <td>${number.format(country.population)}</td> <td class="text-nowrap">${country.capital}</td></tr>`;
                                
    };



    const querySelector = document.querySelector("#array");
    querySelector.innerHTML = kindercountry;
    // console.log(country);
    


}










window.addEventListener('load' , tableau);

