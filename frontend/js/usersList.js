function listUsers() {
  var listUsers = $("#table");

  listOfEmployees.map((user) => {
    listUsers.find("tbody").append(`
      <tr>
        <td> ${user.email} </td>
        <td> ${user.name} </td>
        <td> <a href="detailUsers.html?email=${user.email}"> vizualizar </a>  </td>
      </tr>
      `);
  });
}

$(document).ready(() => {
  listUsers();
});
