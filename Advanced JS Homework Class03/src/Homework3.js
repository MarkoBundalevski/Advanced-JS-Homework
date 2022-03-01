let dogImages = document.getElementById("dogImages");

fetch("https://dog.ceo/api/breed/hound/images")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(let item of data.message){
            let img = document.createElement("img");
            img.src = item;
            dogImages.appendChild(img);
        }
    })
    .catch((error) => {
        console.log(error);
});