var navMenu = {
  hamburgerIcon: new Object(document.querySelector("#expand-btn .fa-bars")),
  closeIcon: new Object(document.querySelector("#expand-btn .fa-times")),
  dropdownList: new Object(document.querySelector("#nav-menu"))
}

navMenu.hamburgerIcon.addEventListener("click", expandList);

function expandList() {
  navMenu.hamburgerIcon.classList.add("icon-hide");

  navMenu.closeIcon.classList.remove("icon-hide");

  navMenu.dropdownList.classList.add("dropdownList-show");
}

navMenu.closeIcon.addEventListener("click", collapseList);

function collapseList() {
  navMenu.hamburgerIcon.classList.remove("icon-hide");

  navMenu.closeIcon.classList.add("icon-hide");

  navMenu.dropdownList.classList.remove("dropdownList-show");
}
