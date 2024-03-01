let icon = document.getElementById("js-func");
let div1 = document.getElementById("js-func2");
let service = document.querySelectorAll(".service");
let component = document.querySelectorAll(".component");
// let divSelector = document.querySelectorAll(".divSelector");
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
    component[0].classList.remove("hidden"); // asli
    component[0].classList.add("flex");
    component[6].classList.add("hidden"); // asli
    component[6].classList.remove("flex");
  } else {
    service[counter - 1].classList.add("opacity-50");
    service[counter].classList.remove("opacity-50");
    // /////////////
    component[counter - 1].classList.add("hidden"); // asli
    component[counter - 1].classList.remove("flex");
    component[counter].classList.remove("hidden"); // asli
    component[counter].classList.add("flex");
  }
  counter += 1;
  if (counter === 7) {
    counter = 0;
    // clearInterval(intervalId);
  }
};

// const intervalId = setInterval(myFunc, 3000);

// for (let i = 0; i < divSelector.length; i++) {
//   // text += cars[i] + "<br>";
//   console.log("hi");
//   divSelector[i].classList.add(0 + i);
//   divSelector[i].addEventListener("click", (e) => {
//     console.log(e);
//   });
// }
