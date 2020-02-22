var queryURL = "https://api.scryfall.com/cards/random"

        // Gets a random number of cards from Scryfall and appends them to the libray
function getAndPostCard(color) {

    queryURL += "?q=is%3a" + "c:g";
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
            for (i = 0; i < 1; i++) {
                var newCard = ($("<div>").addClass("tile"))
                newCard.append($("<img>").attr("src", response.image_uris.small))
                $("#library").append(newCard)
        }
    })
 }

        // Pulls the color bar below making it visible
$("#generate-btn").on("click", function() {
    anime({
        targets: "#color-bar",
        translateY: 50
    })
    anime({
        targets: "#main-content",
        translateY: 50
    })
})

$(".color").on("click", function() {
    $(this).addClass("is-active")
})

getAndPostCard("red");