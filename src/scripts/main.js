import createInvader from './invader/invader.js';
const numPixels = 9 * 9;

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
  props.appearance = gatherAppearanceArray(allPixels);
  props.cost = props.health + props.speed + props.armed;

  return props;
};

document.querySelector('.create').addEventListener("mousedown", (evt) => {
  const props = gatherPropsFromFields();

  document.querySelector('input[name="invader.cost"]').value = props.cost;

  const firstInvader = createInvader(props);
  console.log(firstInvader);
});
