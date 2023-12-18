const formNewInput = document.querySelector("#formNewInput");
const button = document.querySelector("#addRandomJokes");
const contener = document.querySelector(".container");

let id = 0;
const newJokes = async () => {
  const textJokes = await requestJokes();
  const newForm = document.createElement("form");
  newForm.classList.add("form", "column");
  const newArticle = document.createElement("article");
  newArticle.classList.add("message", "is-primary");
  const newDiv = document.createElement("div");
  newDiv.classList.add("message-header");
  const newTitle = document.createElement("p");
  newDiv.textContent = "Jokes";
  const newButton = document.createElement("button");
  newButton.classList.add("delete");
  const newJokesDiv = document.createElement("div");
  newJokesDiv.id = `jokes${id}`;
  id++;
  newJokesDiv.classList.add("message-body");
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newButton); //?ini menggabungkan button dan p ke div class message-header
  newArticle.appendChild(newDiv);
  newArticle.appendChild(newJokesDiv); //?ini menggabungkan div 1 dan div 2 ke article
  newForm.appendChild(newArticle); //?isi dari form yaitu 2 div diatas
  const previousForm = document.querySelector(".form"); //* jika ada class yg sama maka hapus
  if (previousForm) {
    previousForm.remove();
  }
  formNewInput.appendChild(newForm);
  const jokes = document.querySelector(`#jokes${id - 1}`);
  const newP = document.createElement("p");
  newP.textContent = textJokes;
  jokes.appendChild(newP);
};

const requestJokes = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return "Sorry Jokes Yang Kamu Mau Tidak Ada";
  }
};

button.addEventListener("click", newJokes);
console.log(newJokes);
