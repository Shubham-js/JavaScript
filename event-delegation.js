document.querySelector("#categories").addEventListener("click", (e) => {
  console.log("event ", e.target.id);
  if (e.target.tagName === "LI") {
    window.location.href = `/${e.target.id}`;
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log("shubham here out", e.target.dataset.uppercheck);
  if (e.target.dataset.uppercheck != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
