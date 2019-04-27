var apiKey = VHyiX2xQUu9Zxkzyq9dUUB8WkxjEGftj

var search = "the wizard of oz"

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + apiKey

$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function (response) {
        var response = response.response;
    });