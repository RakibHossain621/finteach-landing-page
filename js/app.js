const navbarButton = document.querySelector(".mobile_nav");
const navbarCloseButton = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const mobileNavigation = document.querySelector(".mobile_navigation");


function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  function enableScroll() {
    document.body.style.overflow = "auto";
  }

function closeMenu() {
  mobileNavigation.classList.remove("active");
  overlay.classList.remove("active");
  enableScroll()
}

navbarButton.addEventListener("click", () => {
  mobileNavigation.classList.add("active");
  overlay.classList.add("active");
  disableScroll()
});

navbarCloseButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
