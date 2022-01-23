async function render() {
    const reponse = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name,area,population,capital');
    console.log(reponse);

    const pays = await reponse.json();
    console.log(pays);
    let name = "";
    // console.log(country);

    const number = new Intl.NumberFormat("en");


    for (const country of pays) {
        name += 
        `<tr>
            <th class="text-nowrap">${country.name.official}</th>
            <td class="text-end">${number.format(country.area)}</td>
            <td class="text-end">${number.format(country.population)}</td> 
            <td class="text-nowrap">${country.capital}</td>         
        </tr>`;

    };



    const querySelector = document.querySelector("#array");
    querySelector.innerHTML = name;
    // console.log(country);



}










window.addEventListener('load', render);

