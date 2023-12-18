const inputUser = document.querySelector("#searchTV");
const gambarBaru = document.querySelector(".gambar");

inputUser.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const searchTerm = inputUser.elements.query.value;
    sessionStorage.setItem("searchTerm", searchTerm);
    window.location.href = `/search?query=${searchTerm}`;
  }
});

inputUser.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = inputUser.elements.query.value;
  sessionStorage.setItem("searchTerm", searchTerm);
  window.location.href = `/search?query=${searchTerm}`;
});

document.addEventListener("DOMContentLoaded", async function () {
  const searchTerm = sessionStorage.getItem("searchTerm");
  if (searchTerm) {
    await getApi(searchTerm);
  }
});

const getApi = async function (searchTerm) {
  try {
    const config = { params: { q: searchTerm } };
    const showTV = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    setTimeout(() => {
      createImg(showTV.data);
      inputUser.elements.query.value = "";
    }, 1000);
  } catch (error) {
    return "Data Tidak Ditemukan";
  }
};

const createImg = async (shows) => {
  const gambar = document.querySelectorAll("img");
  gambar.forEach((img) => img.remove());
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      gambarBaru.append(img);
    }
  }
};
