$(document).ready(function(){
    $("#getPokemonName").click(function(){
        for(let i=1; i <=10; i++){
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${i}`,
                success: function(response){
                    console.log(response);
                    $("#listOfPokemon").append(`<li>${response.name}</li>`);
                },
                error: function(errorResponse){
                    console.log("An error has occured");
                    console.log(errorResponse);
                }
            })
        }
    })
})