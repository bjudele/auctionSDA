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
  const category = $("form#addItem_form input#category").val();
  const startingPrice = $("form#addItem_form input#startingPrice").val();
  const startDate = $("form#addItem_form input#startDate").val();
  const endDate = $("form#addItem_form input#endDate").val();

  const photo = base64Image;

  const dto = JSON.stringify(
      { name, description, category, startingPrice, startDate, endDate, photo });

  $.ajax({
    url: 'http://localhost:8080/api/admin/item',
    dataType: 'json',
    headers: createAuthorizationTokenHeader(),
    type: 'post',
    processData: false,
    contentType: 'application/json',
    data: dto,
    success: function (data, textStatus, jQxhr) {
      console.log(data);

    },
    error: function (jqXhr, textStatus, errorThrown) {

    }
  });

}

$(document).ready(function () {
  $("form#addItem_form button").click(function () {
    addItem();
  });
  $("form#addItem_form input#photo").change(function () {
    loadImageAsBase64();
  });

});
