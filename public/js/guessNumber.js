const img = document.querySelector(".gambar");
let acak = Math.floor(Math.random() * 10) + 1;
let ubahGambar = `img/number${acak}.png`;
const tombolReset = document.querySelector(".tombol");
const belur = document.querySelector(".belur");
const setatus = document.querySelector(".setatus");
console.log(tombolReset);

img.src = ubahGambar;

let inputAngka = document.querySelector(".inputAngka");
const tebak = document.querySelector(".tebak");
console.log(tebak);

let alive = 5;
inputAngka.addEventListener("input", function (e) {
  const nilaiInput = parseInt(e.target.value);
  if (isNaN(nilaiInput)) {
    return;
  }
  alive--;
  if (alive !== 0 && nilaiInput !== acak) {
    tebak.innerText = `Tebakan Anda Salah`;
    setatus.innerText = `Sisa Nyawa Kamu ${alive}`;
    setatus.style.fontWeight = "bold";
    setTimeout(() => {
      inputAngka.value = "";
      tebak.innerText = "";
    }, 500);
  } else if (alive === 0) {
    inputAngka.disabled = true;
    setTimeout(() => {
      inputAngka.value = "";
      tebak.innerText = "";
      setatus.innerText = `Sisa Nyawa Kamu 0`;
      inputAngka.placeholder = "Sisa Kesempatan Anda Habis";
      belur.classList.remove("belur");
      tombolReset.classList.remove("tombol");
    }, 500);
  } else {
    inputAngka.disabled = true;
    tebak.innerText = "SELAMAT !!! Tebakan Anda Benar";
    belur.classList.remove("belur");
    tombolReset.classList.remove("btn-outline-danger");
    tombolReset.classList.remove("tombol");
    tombolReset.innerText = "Main Lagi?";
  }
});

inputAngka.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    inputAngka.value = "";
  }
});
function resetGame() {
  acak = Math.floor(Math.random() * 10) + 1;
  ubahGambar = `img/number${acak}.png`;
  img.src = ubahGambar;
  alive = 5;
  inputAngka.disabled = false;
  inputAngka.value = "";
  setatus.innerText = "TEBAK ANGKA PADA GAMBAR DI ATAS";
  setatus.style.fontWeight = "bold";
  inputAngka.placeholder = "Masukkan Tebakan Anda Disini";
  tebak.innerText = "";
  tombolReset.classList.add("tombol");
  tombolReset.classList.add("btn-outline-danger");
  belur.classList.add("belur");
}

tombolReset.addEventListener("click", function (e) {
  setTimeout(() => {
    resetGame();
  }, 300);
});
