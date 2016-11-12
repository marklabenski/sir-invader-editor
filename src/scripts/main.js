import Invader from 'sir-invader';
const numPixels = 9 * 9;

console.log(Invader);

for(let i=0; i < numPixels; i++) {
  let createDiv = document.createElement('div');
  createDiv.classList.add('pixel');
  let dataAttrib = document.createAttribute("data-pixel-index");
  dataAttrib.value = `${i}`;
  let styleAttrib = document.createAttribute("style");
  styleAttrib.value = "background-color:black;";
  createDiv.setAttributeNode(dataAttrib);
  createDiv.setAttributeNode(styleAttrib);
  document.querySelector(".pixel-edit").appendChild(createDiv);
}
const allPixels = document.querySelectorAll('.pixel');

[].map.call(allPixels, function(pixel) {
  pixel.addEventListener('mousedown', (evt) => {
    const bgColor = pixel.style.backgroundColor;
    if(bgColor === "black") {
      pixel.style.backgroundColor = "white";
    } else {
      pixel.style.backgroundColor = "black";
    }
  });
});

const gatherAppearanceArray = function (domElements) {
  return [].map.call(domElements, function(pixel) {
    const bgColor = pixel.style.backgroundColor;

    if(bgColor === "black") {
      return false;
    } else {
      return true;
    }
  });
};

const gatherPropsFromFields = function () {
  const props = {
    health: +document.querySelector('input[name="invader.health"]').value,
    speed: +document.querySelector('input[name="invader.speed"]').value,
    armed: +document.querySelector('input[name="invader.armed"]').value,
    name: document.querySelector('input[name="invader.name"]').value,
    //appearance: {}
  };
  props.appearance = {pixels: gatherAppearanceArray(allPixels) };

  return props;
};

document.querySelector('.create').addEventListener("mousedown", (evt) => {
  const props = gatherPropsFromFields();
  const firstInvader = Invader.createInvader(props);

  document.querySelector('input[name="invader.cost"]').value = firstInvader.cost;
  console.log(firstInvader);
});

document.querySelector('.export-svg').addEventListener("mousedown", (evt) => {
  const props = gatherPropsFromFields();
  const firstInvader = Invader.createInvader(props);
  document.querySelector(".exported").innerHTML = Invader.exportSvg(firstInvader);
});
