$(document).ready(function () {
    var search_terms = "";
    var results_number = "";
    var start_year = "";
    var end_year = "";
    $("#submitbutton").on("click", function () {
        search_terms = $("#searchterms").val();
        results_number = $("#records").val();
        start_year = $("#startyear").val();
        end_year = $("#endyear").val();
        console.log(search_terms);
        console.log(results_number);
        search(search_terms, results_number, start_year, end_year);

    });

    var apiKey = "VHyiX2xQUu9Zxkzyq9dUUB8WkxjEGftj";

    function search(search_terms, results_number, start_year, end_year) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search_terms + "&api-key=" + apiKey;
        if (start_year !== "") {
            queryURL += "&begin_date=" + start_year + "0101";
        }
        if (end_year !== "") {
            queryURL += "&end_date=" + end_year + "1231";
        }

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                var response = response.response;
                for (var i = 1; i <= results_number; i++) {
                    var headline = response.docs[i].headline.main;
                    var author = response.docs[i].byline.original;
                    var headlineDiv = $("<h3>");
                    var lineItem = $("<li>");
                    lineItem.attr("class", "list-group-item");
                    var authorDiv = $("<p>");
                    headlineDiv.append(headline);
                    if (author) {
                        authorDiv.append(author);
                    }
                    else {
                        authorDiv.append("Author Uncredited");
                    }
                    lineItem.append(headlineDiv, authorDiv);
                    $(".list-group").append(lineItem);
                }

                console.log("hello");
                console.log(response);
                console.log (start_year);
            });

    }

});