function checkUserLogout() {
  var checkLogout = localStorage.getItem("userLogin");
  if (!checkLogout) {
    window.location.href = "login.html";
  }
}

function showLoggedUserEmail() {
  var userLogin = localStorage.getItem("userLogin");

  var loginObject = JSON.parse(userLogin);

  $("#emailLogged").html(loginObject.email);
}

function logout() {
  localStorage.removeItem("userLogin");
  window.location.href = "login.html";
}

checkUserLogout();

$(document).ready(() => {
  $("#logout").click(function () {
    logout();
  });
  showLoggedUserEmail();
});
