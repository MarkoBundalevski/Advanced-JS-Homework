let fetchData = document.getElementById("fetchData");
let personStats = document.getElementById("personStats");

fetchData.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let tbody=personStats.tBodies[0];
        let tr = document.createElement("tr");
        tr.insertCell().textContent = data.id;
        tr.insertCell().textContent = data.name;
        tr.insertCell().textContent = data.username;
        tr.insertCell().textContent = data.email;
        tr.insertCell().textContent = data.phone;
        tr.insertCell().textContent = data.website;
        tr.insertCell().textContent = `${data.address.city} ${data.address.street}`;
        tr.insertCell().textContent = data.company.name;
        tbody.appendChild(tr);
    })
    .catch((error) => {
        console.log(error);
    });
})
