const errorLineStart = "<p class='error'>";
const errorLineEnd = "</p>";
let base64Image = "";

function loadImageAsBase64() {
  const file = $("#photo")[0].files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    base64Image = reader.result;
  }, false);
  reader.readAsDataURL(file);
}

function createAuthorizationTokenHeader() {
  var token = localStorage.jwt;
  if (token) {
    return { "Authorization": "Bearer " + token };
  } else {
    return {};
  }
}

function addItem() {

  const name = $("form#addItem_form input#name").val();
  const description = $("form#addItem_form input#description").val();

  loadImageAsBase64();
  const photo = base64Image;

  const dto = JSON.stringify({ name, description, photo });

  $.ajax({
    url: 'http://localhost:8080/api/admin/item',
    dataType: 'json',
    headers: createAuthorizationTokenHeader(),
    type: 'post',
    processData: false,
    contentType: 'application/json',
    data: dto,
    success: function (data, textStatus, jQxhr) {

    },
    error: function (jqXhr, textStatus, errorThrown) {

    }
  });

}

function loadHeader() {
  $.ajax({
    url: 'http://localhost:8080/api/authenticated/details',
    dataType: 'json',
    headers: createAuthorizationTokenHeader(),
    type: 'get',
    processData: false,
    contentType: 'application/json',
    success: function (data, textStatus, jQxhr) {
      const firstName = data.firstName;
      const isAdmin = data.admin;
      const isUser = data.user;
      $("ul.nav-shop span.hello").text("Hello, " + firstName);
      if (isAdmin) {
        $(".nav-item.adminOnly").show();
      }
      if (isUser) {
        $(".nav-item.userOnly").show();
      }
    },
    error: function (jqXhr, textStatus, errorThrown) {

    }
  });
}

$(document).ready(function () {
  loadHeader();
  // loadItems();

  // $("form#addItem_form button").click(function () {
  //   addItem();
  // });

});
