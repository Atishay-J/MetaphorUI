const sideBar = document.querySelector(".sidebarCont");
const contentCont = document.querySelector(".contentCont");
const body = document.querySelector("body");
const codeToggler = document.querySelectorAll(".showCodeToggle");
const code = document.querySelectorAll(".code");

const toggleSidebar = () => {
  console.log("toggled");
  sideBar.classList.toggle("hideSidebar");
  contentCont.classList.toggle("overlay");
  body.classList.toggle("hideOverflow");
};
Array.from(codeToggler).forEach((el) => {
  el.innerHTML = "Show Snippet ▼";
});

const showCodeToggle = (event) => {
  // code.classList.toggle("hideCode");
  // if (codeToggler.innerHTML == "Show Snippet ▼") {
  //   codeToggler.innerHTML = "Hide Snippet ▲";
  // } else {
  //   codeToggler.innerHTML = "Show Snippet ▼";
  // }
  // console.log("looggg");
  /**************** */
  Array.from(code).forEach((el) => {
    el.classList.toggle("hideCode");
  });
  Array.from(codeToggler).forEach((el) => {
    if (el.innerHTML == "Show Snippet ▼") {
      el.innerHTML = "Hide Snippet ▲";
    } else {
      el.innerHTML = "Show Snippet ▼";
    }
    console.log("looggg");
  });
};
