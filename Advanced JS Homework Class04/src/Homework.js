let getPlanets = document.getElementById("getPlanets");
let previousPlanets = document.getElementById("previousPlanets");
let nextPlanets = document.getElementById("nextPlanets");
let planetInfo = document.getElementById("planetInfo");

printStarWarsPlanet=(planet)=>{
    let tbody=planetInfo.tBodies[0];
    let tr = document.createElement("tr");
    tr.insertCell().textContent = planet.name;
    tr.insertCell().textContent = planet.population;
    tr.insertCell().textContent = planet.climate;
    tr.insertCell().textContent = planet.gravity;
    tbody.appendChild(tr);
}

getStarWarsPlanets=(url)=>{
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let tbody=planetInfo.tBodies[0];
        tbody.innerHTML='';
        for(let planet of data.results){
            printStarWarsPlanet(planet);
        }
    })
    .catch((error) => {
        console.log(error);
    });
}

getPlanets.addEventListener("click", ()=>{
    getStarWarsPlanets('https://swapi.dev/api/planets/?page=1&format=json');
    getPlanets.style.display='none';
    previousPlanets.style.display='none';
    nextPlanets.style.display=null;
});
previousPlanets.addEventListener("click", ()=>{
    getStarWarsPlanets('https://swapi.dev/api/planets/?page=1&format=json');
    previousPlanets.style.display='none';
    nextPlanets.style.display=null;
});
nextPlanets.addEventListener("click", ()=>{
    getStarWarsPlanets('https://swapi.dev/api/planets/?page=2&format=json');
    previousPlanets.style.display=null;
    nextPlanets.style.display='none';
});

let firstNames = ["Marko", "Tome", "Elena", "Bojana", "Vladimir"];
let lastNames = ["Bundalevski", "Bundalevski", "Bogoevska", "Gjorgievska", "Putin"];
for(let i = 0; i < 5; ++i){
    const firstName=firstNames[i];
    const lastName=lastNames[i];
    (function(f,l){
        console.log(`${f} ${l}`);
    })(firstName,lastName);
}

function factorial(n){
    if(n == 0){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(2));
console.log(factorial(7));
console.log(factorial(4));
console.log(factorial(15));
console.log(factorial(5));
console.log(factorial(3));