async function fetchCancan (){
    const response = await fetch('https://restcountries.com/v3.1/region/europe/?fields=name');


    const countries = await response.json();
    let name = "";

    countries.forEach(country => {

        name += `<li> ${country.name.official}</li>`;
        
        
    });

    const querySelector = document.querySelector("#countries");
    querySelector.innerHTML = name;
    
}
window.addEventListener("load" , fetchCancan);