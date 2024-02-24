let icon = document.getElementById("js-func");
let div1 = document.getElementById("js-func2");

icon.addEventListener("click", () => {
  icon.classList.toggle("bi-list");
  icon.classList.toggle("bi-x-lg");
  div1.classList.toggle("hidden");
  div1.classList.toggle("flex");
});
