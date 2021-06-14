const listQuest = document.querySelector(".slider");
const slideBar = document.querySelector(".slide-bar");
const slideBarOpened = document.querySelector(".slide-bar.open");

slideBar.addEventListener("click", () => {
  listQuest.classList.toggle("opened");
});

slideBarOpened.addEventListener("click", () => {
  listQuest.classList.toggle("opened");
});
