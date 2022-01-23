async function render (){
    const response = await fetch ('https://restcountries.com/v3.1/region/europe?fields=name,flags,capital,maps');
    console.log(response);
}