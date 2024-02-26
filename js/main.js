let icon = document.getElementById("js-func");
let div1 = document.getElementById("js-func2");
let service = document.querySelectorAll("#service");
let counter = 0;

icon.addEventListener("click", () => {
  icon.classList.toggle("bi-list");
  icon.classList.toggle("bi-x-lg");
  div1.classList.toggle("hidden");
  div1.classList.toggle("flex");
});

const myFunc = () => {
  if (counter === 0) {
    service[0].classList.remove("opacity-50");
    service[6].classList.add("opacity-50");
  } else {
    service[counter - 1].classList.add("opacity-50");
    service[counter].classList.remove("opacity-50");
  }
  counter += 1;
  if (counter === 7) {
    counter = 0;
  }
};

setInterval(myFunc, 5000);
