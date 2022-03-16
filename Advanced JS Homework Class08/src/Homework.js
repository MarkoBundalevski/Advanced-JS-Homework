let userPost = document.getElementById("userPost");
let userDetails = document.getElementById("userDetails");
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data => {
        console.log(data);
        userPost.innerHTML=`
        <div>userId: ${data.userId}</div>
        <div>id: ${data.id}</div>
        <div>title: ${data.title}</div>
        <div>body: ${data.body}</div>
        `;
        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
        .then(response2 => response2.json())
        .then(data2 => {
                console.log(data2);
                userDetails.innerHTML=`
                <div>name: ${data2.name}</div>
                <div>username: ${data2.username}</div>
                <div>email: ${data2.email}</div>
                <div>address: ${data2.address.street}, ${data2.address.suite}, ${data2.address.city}, ${data2.address.zipcode} (${data2.address.geo.lat},${data2.address.geo.lng})</div>
                <div>phone: ${data2.phone}</div>
                <div>website: ${data2.website}</div>
                <div>Company name: ${data2.company.name}</div>
                <div>catchPhrase: ${data2.company.catchPhrase}</div>
                <div>bs: ${data2.company.bs}</div>
                `;
            })
            .catch((error) => {
                console.log(error);
        });
    })
    .catch((error) => {
        console.log(error);
});

function promiseFunction(parameter){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof parameter === "string"){
                resolve(parameter.toUpperCase());
            }
            else{
                reject(parameter);
            }
        }, 4000)
    });
}

promiseFunction("Marko")
.then(res => console.log(res));
promiseFunction(5)
.then(res => console.log(res));