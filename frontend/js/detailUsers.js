function showUserData() {
  var searchParams = new URLSearchParams(window.location.search);
  var userEmail = searchParams.get("email");

  var userFind = listOfEmployees.find((user) => {
    return user.email == userEmail;
  });
  if (userFind) {
    $("#name").html(userFind.name);
    $("#userEmail").html(userFind.email);
    $("#userPhone").html(userFind.phone_number);
    $("#userRole").html(userFind.role);
  }
}

$(document).ready(() => {
  showUserData();
});
