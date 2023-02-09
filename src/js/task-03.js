const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galerryEl = document.querySelector(".gallery");

const markup = images.map(
  (image) =>
    `<li><img src = "${image.url}" width = "400" height = "270" alt ="${image.alt}"></li>`
);

galerryEl.insertAdjacentHTML("afterbegin", markup);

console.log(galerryEl);

galerryEl.style.display = "flex";
galerryEl.style.gap = "10px";
galerryEl.style.justifyContent = "center";
galerryEl.style.listStyle = "none";
