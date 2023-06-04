const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
});
