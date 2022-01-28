async function render() {
  const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,flags,capital,maps');
  // console.log(response);

  const countries = await response.json();

  let cards = "";

  for (const country of countries) {

    cards += `
        <div class="col">
          <div class="card h-100">
            <a href="${country.maps.openStreetMaps}" target="_blank">
            <img src = "${country.flags.png}" class="card-img-top" alt="${country.name.official}">
            </a>
            <div class="card-body">
              <h5 class="card-title">${country.name.official}</h5>
              <p class="card-text">${country.capital}</p>
            </div>
          </div>
        </div>
      </div>`;

  }

  const country = document.querySelector("#countries");
  country.innerHTML = cards;


  // 1 il faut recupérer l'element de la page html dans lequel inserer card
  // 2 inserer cards dans l'element récupérer 

};

window.addEventListener("load", render);