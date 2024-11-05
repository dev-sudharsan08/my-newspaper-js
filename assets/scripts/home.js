function handleRedirect(url) {
  console.log(url);
  // Lets redirect to the specific url
  window.location.href = `${url}.html`;
}

// function handleBrowseNews() {
//   // let's redirect to news.html
//   window.location.href = "news.html";
//   // window.location.replace("news.html");  will replace the existing pg
// }

// function handleGallery() {
//   // let's redirect to gallery.html
//   window.location.href = "gallery.html";
// }



// function handleSaveName() {
//   //read the data frm the input field
//   let saveName = document.querySelector("#inputField").value;
//   //set it in the html span element
//   document.querySelector("#changeName").innerHTML = saveName;
//   //and hide the element with an id nameInputWrapper
//   document.querySelector("#nameInputWrapper").style.display = "none";
//   document.querySelector("#editNameWrapper").style.display = "block";
// }
// const saveBtn = document.querySelector("#saveBtn");
// saveBtn.addEventListener("click", handleSaveName);


const saveBtn = document.querySelector("#saveBtn");
saveBtn.addEventListener("click", () => {
  let saveName = document.querySelector("#inputField").value;
  //set it in the html span element
  document.querySelector("#changeName").innerHTML = saveName;
  //and hide the element with an id nameInputWrapper
  document.querySelector("#nameInputWrapper").style.display = "none";
  document.querySelector("#editNameWrapper").style.display = "block";
});



const changeNameBtn = document.querySelector("#changeNameBtn");
changeNameBtn.addEventListener("click", () => {
  document.querySelector("#inputField").value =
    document.querySelector("#changeName").innerText;
  document.querySelector("#nameInputWrapper").style.display = "flex";
  // hiding the element with an id editNameWrapper
  document.querySelector("#editNameWrapper").style.display = "none";
});

document.querySelector("#editNameWrapper").style.display= "none";

// document.querySelector('#copy').style.display='none'