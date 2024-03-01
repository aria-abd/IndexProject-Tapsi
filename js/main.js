let icon = document.getElementById("js-func");
let div1 = document.getElementById("js-func2");
let service = document.querySelectorAll(".service");
let component = document.querySelectorAll(".component");
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
    // /////////////
    component[0].classList.remove("hidden");
    component[0].classList.add("flex");
    component[6].classList.add("hidden");
    component[6].classList.remove("flex");
  } else {
    service[counter - 1].classList.add("opacity-50");
    service[counter].classList.remove("opacity-50");
    // /////////////
    component[counter - 1].classList.add("hidden");
    component[counter - 1].classList.remove("flex");
    component[counter].classList.remove("hidden");
    component[counter].classList.add("flex");
  }
  counter += 1;
  if (counter === 7) {
    counter = 0;
  }
};

const intervalId = setInterval(myFunc, 3000);
