//connect with the back end
// 1. using AJAX or
// 2. using native api or
// 3. using third party tools such as axios

// wht is the back end rest API url? https://jsonplaceholder.typicode.com/photos?_limit=12
// wht is the HTTP method? GET
// wht is the rest api client tool? AJAX

// const xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//   console.log(this.readyState);
//   // console.log(this.status);
//   // get the data frm the back end
//   if (this.readyState === 4) {
//     console.log(xhttp.response);
//     galleryList = JSON.parse(xhttp.responseText);

//     // display it in html using JS
//     console.log(galleryList);
//     renderGalleryTemplate();
//   }
// };

// xhttp.open(
//   "GET",
//   "https://jsonplaceholder.typicode.com/photos?_limit=12",
//   true
// );
// xhttp.send();

fetch("https://jsonplaceholder.typicode.com/photos?_limit=12")
  .then((res) => {
    console.log("Successfully fetched the response");
    return res.json();
  })
  .then((resInJson) => {
    console.log(resInJson);
    renderGalleryTemplate(resInJson);
  })
  .catch((err) => {
    console.log("Inside catch");
    console.log(err);
  })
  .finally(() => {
    console.log("It is over");
  });

function renderGalleryTemplate(res) {
  let galleryTemplate = res.map((gallery) => {
      return `<div class="col-md-4 pt-2 pb-3">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src=${gallery.thumbnailUrl} alt=${gallery.title}>
          <div class="card-body">
            <p class="card-title">${gallery.title}</p>
            <a href=${gallery.url} class="btn btn-primary">View Image</a>
          </div>
        </div>
      </div>`;
    })
    .join("");

  document.getElementById("newsGallery").innerHTML = galleryTemplate;
}

console.log("Program Ended");
