let url = "https://reqres.in/api/users";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let array = data.data;

    let tbody = document.querySelector("#tbody");

    array.forEach((item, index) => {
      tbody.innerHTML += `<tr>
     <td id = "${array[index].id}">
     <img src="${item.avatar}" alt="avatar">
     </td>
     <td id = "${array[index].id}">${item.email}</td>
     <td id = "${array[index].id}">${item.first_name}</td>
     <td id = "${array[index].id}">${item.last_name}</td>

     </tr>`;
    });
  })
  .catch(function (err) {
    return err;
  });
