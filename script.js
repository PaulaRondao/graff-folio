const collapse = () => {

  const menu = document.getElementById("menu");
  const button = document.getElementById("burger-button");
  const navImages = document.getElementsByClassName("navigation-image");

  menu.classList.toggle("menu-collapsed");

  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", (!isExpanded).toString());

  Array.from(navImages).forEach((img) =>
    img.classList.toggle("menu-collapsed")
  );
  window.addEventListener("DOMContentLoaded", () => {
    collapse();
  });
};

collapse();