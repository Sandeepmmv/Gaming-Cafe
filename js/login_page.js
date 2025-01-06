$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $("#loginbtn").on("click", function () {
        var uname = $("#uname").val();
        var password = $("#password").val();
        $.ajax({
            type: "POST",
            url: "/registration/dologin",
            data: { "uname": uname, "password": password },
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    });
});
