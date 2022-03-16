async function getCurrency(){
    const data=await(await fetch("https://restcountries.com/v3.1/capital/tallinn")).json();
    return Object.keys(data[0].currencies)[0];
}
async function getCountriesWithCurrency(c){
    const data=await(await fetch(`https://restcountries.com/v3.1/currency/${c}`)).json();
    return data.length;
}
getCurrency().then(c=>{
    getCountriesWithCurrency(c).then(length=>console.log(length));
});