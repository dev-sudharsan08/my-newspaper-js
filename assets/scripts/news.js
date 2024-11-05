// let articleTemplate = null;
let articleList = [];

//connect with the back end
// 1. using AJAX or
// 2. using native api or
// 3. using third party tools such as axios

// wht is the back end rest API url? http://jsonplaceholder.typicode.com/posts?_limit=4
// wht is the HTTP method? GET
// wht is the rest api client tool? AJAX

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  console.log(this.readyState);
  // console.log(this.status);
  // get the data frm the back end
  if (this.readyState === 4) {
    console.log(xhttp.response);
    articleList = JSON.parse(xhttp.responseText);

    // display it in html using JS
    console.log(articleList);
    renderNewsTemplate();
  }
};

xhttp.open("GET", "http://jsonplaceholder.typicode.com/posts?_limit=4", true);
xhttp.send();

function renderNewsTemplate() {
  let articleTemplate = articleList
    .map((article) => {
      return `<article class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Tech</strong>
              <h3 class="mb-0">${article.title}</h3>
              <span class="mb-1 text-muted">Nov 12</span>
              <p class="card-text mb-auto img-text">${article.body}</p>
              <a href="#" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <img src="https://placehold.co/200x380" class="img-thumbnail" alt=${article.title}>
            </div>
          </div>
        </article>`;
    })
    .join("");

  document.getElementById("newsArticle").innerHTML = articleTemplate;
}
console.log("Program Ended");
