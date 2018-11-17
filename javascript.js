$(document).ready(function() {
    console.log("ready");
        $("#zipsub").on("click", function(event) {
            event.preventDefault();
            var devkey = "c2557dfbaaf18789923aa6e8aa40ced3"
            var zipcode =  $("#testing").val().trim();

            $.ajax({

                url: "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/shelter.find?key=" + devkey + "&location=" + zipcode + "&format=json",
                method: "GET",
                success: function(data, status) {
                    // console.log(petfinder.shelters.length);
                    console.log(data.petfinder.shelters.shelter);
                    // $("#shelterResults").append("mani");
                    var shelters =  data.petfinder.shelters.shelter;
                    console.log(shelters.length);
                    for (var i = 0; i < shelters.length; i++) {
                        // console.log(i);
                        // console.log(shelters[i]);
                        // for (x in shelters[i]) {
                            // console.log(shelters[i][x]);
                            // var place = "<div><h1>"+shelters[i].name.$t+"</h1><div class='info'>"+shelters[i].state.$t+", " +shelters[i].zip.$t+ " phone: " +shelters[i].phone.$t+ "</div></div>";
                            var place = `<div class="shelterWrapper">
                                            <h4>${shelters[i].name.$t}</h4>
                                            <h6><div class='info'>${shelters[i].city.$t}, ${shelters[i].state.$t}, ${shelters[i].zip.$t} Phone: ${shelters[i].phone.$t} Email: ${shelters[i].email.$t}</div></h6>
                                         </div>`;
                            $("#shelterResults").append(place);

                        // }
                    }

                    console.log(shelters[0].name.$t);

                },
              })
        
            });
        });        