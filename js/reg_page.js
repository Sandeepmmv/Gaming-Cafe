$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $("#regbtn").on("click", function () {
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var uname = $("#uname").val();
        var pnumber = $("#pnumber").val();
        var address = $("#address").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        console.log(`${fname} ${lname} ${uname} ${pnumber} ${address} ${email} ${password} ${cpassword}`);
        $.ajax({
            type: "POST",
            url: "/registration/store",
            data: {"fname":fname, "lname":lname, "uname":uname, "pnumber":pnumber, "address":address, "email":email, "password":password},
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    });
});