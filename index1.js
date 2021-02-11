let page1 = document.querySelector("#page1");
let page2 = document.querySelector("#page2");

page1.addEventListener("click", (event) => {
  event.preventDefault();
  let urlFirstPage = "https://reqres.in/api/users";

  fetch(urlFirstPage)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let array = data.data;

      let tbody = document.querySelector("#tbody");
      tbody.innerHTML = "";
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
});

page2.addEventListener("click", (event) => {
  event.preventDefault();
  let urlSecondPage = "https://reqres.in/api/users?page=2&per_page=6";

  fetch(urlSecondPage)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let array = data.data;

      let tbody = document.querySelector("#tbody");
      tbody.innerHTML = "";
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
});
