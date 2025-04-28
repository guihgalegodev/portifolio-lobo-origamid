const links = document.querySelectorAll("a[href^='#']");

function scrollSuave(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

links.forEach((link) => {
  link.addEventListener("click", scrollSuave);
  link.addEventListener("touchstart", scrollSuave);
});
