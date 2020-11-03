var gradients = [
  "from-orange-400 to-red-500",
  "from-pink-400 to-red-500",
  "from-pink-600 to-purple-800",
  "from-blue-600 to-green-800",
];
var currentGradient = 0;
var count = 6;
var itenaryElements;
window.onload = function () {
  var gradientElement = document.getElementsByClassName("gradient");
  for (let index = 0; index < gradientElement.length; index++) {
    gradientElement[index].classList.add(
      gradients[currentGradient].split(" ")[0],
      gradients[currentGradient].split(" ")[1]
    );
    if (currentGradient == gradients.length - 1) currentGradient = 0;
    else currentGradient++;
  }
  itenaryElements = document.getElementsByClassName("itenary");
  if(itenaryElements.length>0)
  for (let i = 0; i < 6; i++) {
    itenaryElements[i].classList.remove("hidden");
  }
  if(document.getElementsByClassName("article").length>0)
  for (let i = 0; i < 3; i++) {
    document.getElementsByClassName("article")[i].classList.remove("hidden");
  }
};

function showMore(elementId, type) {
  var showMoreElement = document.getElementById(elementId);
  var elements = document.getElementsByClassName(type);
  if (showMoreElement.classList.contains("rotate-90")) {
    for (let i = 5; i < elements.length; i++) {
      elements[i].classList.remove("hidden");
    }
    showMoreElement.classList.remove("rotate-90");
    showMoreElement.classList.add("-rotate-90");
  } else {
    for (let i = 6; i < elements.length; i++) {
      elements[i].classList.add("hidden");
    }

    showMoreElement.classList.add("rotate-90");
    showMoreElement.classList.remove("-rotate-90");
  }
}
