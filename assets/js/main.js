//Inicial
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".sidenav");

  document.querySelector("#btnNav").addEventListener("click", () => {
    nav.classList.add("open");
  });

  document.querySelector(".nav-overlay").addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Dropdown
function showDropdown(el) {
  var content = el.nextElementSibling;
  if (content.classList.contains("dropdown-content")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
    content.classList.toggle("show");
  }
}

window.onclick = function (event) {
  if (
    !event.target.matches(".btnDropdown") &&
    !event.target.matches(".txtDropdown") &&
    !event.target.matches(".iconDropdown")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
};
