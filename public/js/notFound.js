const acak = Math.floor(Math.random() * 5) + 1;
const gambar = document.querySelector(".gambar");

gambar.src = `/img/notfound${acak}.png`;
