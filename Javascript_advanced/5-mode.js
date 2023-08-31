let escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
  createHTML: (to_escape) => to_escape,
});

const changeMode = function (size, weight, transform, background, color) {
  return function () {
    const body = document.querySelector("body");
    body.style.fontSize = size + "px";
    body.style.fontWeight = weight;
    body.style.textTransform = transform;
    body.style.backgroundColor = background;
    body.style.color = color;
  };
};

const main = function () {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", " white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Welcome Holberton!";
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const btn3 = document.createElement("button");
  btn1.innerHTML = "Spooky";
  btn2.innerHTML = "Dark mode";
  btn3.innerHTML = "Scream mode";
  document.body.appendChild(paragraph);
  document.body.appendChild(btn1);
  document.body.appendChild(btn2);
  document.body.appendChild(btn3);
  btn1.addEventListener("click", spooky);
  btn2.addEventListener("click", darkMode);
  btn3.addEventListener("click", screamMode);
};
main();
