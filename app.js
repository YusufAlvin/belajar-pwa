const container = document.querySelector(".container");
const coffees = [
  { name: "Perspiciatis", image: "img/coffee.png" },
  { name: "Voluptatem", image: "img/coffee.png" },
  { name: "Explicabo", image: "img/coffee.png" },
  { name: "Rchitecto", image: "img/coffee.png" },
  { name: "Beatae", image: "img/coffee.png" },
  { name: "Vitae", image: "img/coffee.png" },
  { name: "Inventore", image: "img/coffee.png" },
  { name: "Veritatis", image: "img/coffee.png" },
  { name: "Accusantium", image: "img/coffee.png" },
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
