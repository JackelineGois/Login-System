checkUserLogin();

function login(emailTypedForm, passwordTypedForm) {
  var validUser = listOfEmployees.find((employees) => {
    return (
      employees.email == emailTypedForm &&
      employees.password == passwordTypedForm
    );
  });

  if (validUser) {
    saveUser(validUser);
    window.document.location = "usersList.html";
  } else {
    $("#alert-error").css("display", "block");
    setTimeout(function () {
      $("#alert-error").css("display", "none");
    }, 5000);
  }
}

function saveUser(user) {
  var userJSON = JSON.stringify(user);
  localStorage.setItem("userLogin", userJSON);
}

function checkUserLogin() {
  var userCheckLogin = localStorage.getItem("userLogin");
  if (userCheckLogin) {
    window.document.location = "usersList.html";
  }
}

$(document).ready(() => {
  $("#form-login").submit((event) => {
    event.preventDefault();

    var emailTyped = $("#inputEmail").val();

    var passwordTyped = $("#inputPassword").val();

    login(emailTyped, passwordTyped);
  });
});
