const sideBar = document.querySelector(".sidebarCont");
const contentCont = document.querySelector(".contentCont");
const body = document.querySelector("body");

const toggleSidebar = () => {
  console.log("toggled");
  sideBar.classList.toggle("hideSidebar");
  contentCont.classList.toggle("overlay");
  body.classList.toggle("hideOverflow");
};
