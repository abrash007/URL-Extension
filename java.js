// //let inputEL = document.getElementById("input-btn");
// // function clicked() {
// //   //inputEL.textContent = "Clicked";
// //   console.log("clicked");
// // }

// // let boxEL = document.getElementById("box");
// // boxEL.addEventListener("click", function () {
// //   console.log("I want to open the box");
// // });

let myleads = [];
let oldleads = [];
const inputbtn = document.getElementById("input-btn");
const inputEL = document.getElementById("input-el");
const ulEL = document.getElementById("ul");
const deletebtn = document.getElementById("delete-btn");
const saveEL = document.getElementById("save-tab");

// Get the leads string from local storage
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"));
//for saving leads after reloading
if (leadsfromlocalstorage) {
  myleads = leadsfromlocalstorage;
  // rendering out only myleads
  render(myleads);
}
console.log(leadsfromlocalstorage);

//listen for the clicks on tabbtn. log per linkdln URL to the console.
saveEL.addEventListener("click", function () {
  myleads.push(window.location.href);
  localStorage.setItem("myleads", JSON.stringify(myleads));
  render(myleads);
});

// you can pass any name in rendor()
function render(leads) {
  let listItems = "";
  for (i = 0; i < leads.length; i++) {
    // listItems += "<li><a href='"+ myleads[i] + "' target='_blank'>" + myleads[i] + "</a></li>";
    listItems += `<li><a href='${leads[i]}' target='_blank'>${leads[i]}</a></li>`;
  }
  // we use innerhtml instead of textcontent bzn list does not work in proper format in textcontent
  ulEL.innerHTML = listItems;
}
document;
deletebtn.addEventListener("dblclick", function () {
  // Clear the local storage
  localStorage.removeItem("myleads");
  // Clear the myleads array
  myleads = [];
  // Clear the DOM
  ulEL.innerHTML = "";
  // Code to execute when the button is double-clicked
  render(myleads);
});

inputbtn.addEventListener("click", function () {
  myleads.push(inputEL.value);
  //for clearing input field after submit
  inputEL.value = "";
  //storing in local storage
  localStorage.setItem("myleads", JSON.stringify(myleads));
  //-----------
  render(myleads);
  console.log(localStorage.getItem("myleads"));
});
