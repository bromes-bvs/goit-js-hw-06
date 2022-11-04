const inpurRef = document.querySelector("#validation-input");

inpurRef.addEventListener("blur", () => {
  const validLength = +inpurRef.dataset.length;

  if (inpurRef.value.length === validLength) {
    inpurRef.classList.add("valid");
    inpurRef.classList.remove("invalid");
  } else {
    inpurRef.classList.add("invalid");
    inpurRef.classList.remove("valid");
  }
});
