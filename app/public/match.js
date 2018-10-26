function displayMatch() {
    let currentURL = window.location.origin
    $.ajax({
        url: currentURL +"/api/best",
        method: "GET"
    }).done(function(bestData) {
        $("#matchName").html(bestData[0].name);
        $("#matchPhoto").attr("src", bestData[0].photo);

    });
}

displayMatch();