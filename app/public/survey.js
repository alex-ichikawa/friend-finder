$("#submit").on("click", function (event) {
    event.preventDefault();

    function validateForm() {
        let isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === '') {
                isValid = false;
            }
        });

        $(".questions").each(function () {
            if ($(this).val() === '') {
                isValid = false;
            }
        });
        return isValid;
    }


    if (validateForm()) {
        let userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        }
        $.post("/api/friends", userData)
            .then(function (data) {
                window.open("/match");
                $("#name").val("");
                $("#photo").val("");
                $("#q1").val("");
                $("#q2").val("");
                $("#q3").val("");
                $("#q4").val("");
                $("#q5").val("");
                $("#q6").val("");
                $("#q7").val("");
                $("#q8").val("");
                $("#q9").val("");
                $("#q10").val("");
            });
    }
    else {
        swal({
            title: 'Please complete the whole form before submitting',
            animation: false,
            customClass: 'animated jackInTheBox'
        });
    }
});