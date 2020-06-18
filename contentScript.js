window.addEventListener("keydown", (event) => {
  console.log(event.key);

  if (event.key === "j") {
    document.scrollingElement.scrollTop += 50;
  } else if (event.key === "k") {
    document.scrollingElement.scrollTop -= 50;
  }
});
