import Invader from 'sir-invader';
const numPixels = 9 * 9;

const invaderList = function() {
  const invaderObj = {
    invaders: [],
    storageVersion: 2,
    render: function () {

      document.querySelector('.list').innerHTML = "";
      const ulElem = document.createElement('ul');
      this.invaders.map((invader) => {
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        const divElem = document.createElement('div');
        liElem.appendChild(divElem);
        divElem.innerHTML = Invader.exportSvg(invader);
        const invaderInfos = document.createTextNode(
          'name: ' + invader.name + "\n" +
          'health: ' + invader.health + "\n" +
          'speed: ' + invader.speed + "\n" +
          'armed: ' + invader.armed + "\n" +
          'cost: ' + invader.cost + "\n"
        );
        liElem.appendChild(invaderInfos);
        document.querySelector('.list').appendChild(ulElem);
        localStorage.setItem('invader-list', JSON.stringify(this.invaders));
        localStorage.setItem('invader-list-version', this.storageVersion);
      });
    },
    loadFromStorage: function (invadersFromStorage) {
      this.invaders = JSON.parse(invadersFromStorage);
      this.render();
    },
    add: function (invader) {
      this.invaders.push(invader);

      this.render();
    },
    remove: function (invaderIndex) {
      this.invaders.splice(invaderIndex, 1);
      this.render();
    },
  };
  return invaderObj;
}();

if(localStorage.getItem('invader-list') != null && localStorage.getItem('invader-list-version') == invaderList.storageVersion) {
  invaderList.loadFromStorage(localStorage.getItem('invader-list'));
}


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

document.querySelector('.save').addEventListener("mousedown", (evt) => {
  const props = gatherPropsFromFields();
  const newInvader = Invader.createInvader(props);

  document.querySelector('input[name="invader.cost"]').value = newInvader.cost;
  invaderList.add(newInvader);
});

document.querySelector('.export-list').addEventListener("mousedown", (evt) => {
  document.querySelector('.panel.export textarea').innerHTML = JSON.stringify(invaderList.invaders);
});

var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.panel.export textarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
