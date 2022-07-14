const ps = document.querySelectorAll("p");

ps.forEach(function (ele) {
  if (ele.textContent.includes("the")) {
    ele.remove();
  }
});
