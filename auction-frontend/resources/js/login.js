const errorLineStart = "<p class='error'>";
const errorLineEnd = "</p>";

function login() {

  const email = $("form#login_form input#email").val();
  const password = $("form#login_form input#password").val();
  const loginDto = JSON.stringify({ email, password });

  $.ajax({
    url: 'http://localhost:8080/api/login',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: loginDto,
    success: function (data, textStatus, jQxhr) {
      localStorage.jwt = data.jwt;
      console.log('success: ' + localStorage.jwt);
      window.location.href = "home.html";
    },
    error: function (jqXhr, textStatus, errorThrown) {
      const errorsArray = jqXhr.responseJSON.errors;
      if (errorsArray != undefined) {
        for (var index = 0; index < errorsArray.length; index++) {

          const element = $("#" + errorsArray[index].field);

          if (!$(element).next().hasClass("error")) {
            const errorLine = errorLineStart + errorsArray[index].defaultMessage + errorLineEnd;
            $(errorLine).insertAfter(element);

          }

          // console.log("error " + index + "-> " + errorsArray[index].field + ":"
          //     + errorsArray[index].defaultMessage);
        }
      } else {
        const errorMessage = jqXhr.responseJSON.message;
        console.log("singura eroare: " + errorMessage);

        const errorLine = errorLineStart + errorMessage + errorLineEnd;
        console.log(errorLine);
        var element = $("form#login_form .loginError");
        if ($(element).children().length == 0) {
          $(element).append(errorLine);
        }

      }

    }
  });

}

$(document).ready(function () {
  $("form#login_form button").click(function () {
    login();
  });
});
