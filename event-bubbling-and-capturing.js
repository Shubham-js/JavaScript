document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked!");
    //e.stopPropagation();
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
    // e.stopPropagation();
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
    // e.stopPropagation();
  },
  false // flag -> false:bubbling , true:capturing
); // Preference Order -> Trickling/Capruting > Bubbling
