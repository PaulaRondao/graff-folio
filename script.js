const collapse = () => {

  const menu = document.getElementById("menu");
  const button = document.getElementById("burger-button");
  const navImages = document.getElementsByClassName("navigation-image");

  menu.classList.toggle("menu-collapsed");

  const isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", (!isExpanded).toString());

  document.body.classList.toggle("no-scroll", !isExpanded);

  Array.from(navImages).forEach((img) =>
    img.classList.toggle("menu-collapsed"),
  );
  window.addEventListener("DOMContentLoaded", () => {
    collapse();
  });

  const firstFocusableElement = document.getElementById("burger-button");
  const lastFocusableElement =
    document.getElementById("menu").lastElementChild;

  document.addEventListener("keydown", function (e) {
    const activeElement = document.activeElement.textContent;
    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (activeElement == "CONTACT") {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  });
};

collapse();