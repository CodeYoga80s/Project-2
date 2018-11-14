$(document).ready(function() {
    console.log("ready");
    
    // https://cors-anywhere.herokuapp.com/http://api.petfinder.com/breed.list?key=c2557dfbaaf18789923aa6e8aa40ced3&animal=dog&format=json

    // $.ajax({
    //     url: "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/breed.list?key=c2557dfbaaf18789923aa6e8aa40ced3&animal=dog&format=json",
    //     method: "GET"
    //   })

    //   .then(function(response) {
        
    //     console.log(response);
    //     });

        $("#submit").on("click", function(event) {
            event.preventDefault();
            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/breed.list?key=c2557dfbaaf18789923aa6e8aa40ced3&animal=dog&format=json",
                method: "GET"
              })
        
              .then(function(response) {
                
                console.log(response);
                });

            });
        });
