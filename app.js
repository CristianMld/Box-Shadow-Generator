const box = document.querySelector('.box');
const generateCodeBtn = document.querySelector('.generate-code-btn');
const code = document.querySelector('.code pre code');
const controls = document.querySelectorAll('.control');

let xValue = 0;
let yValue = 0;
let blurValue = 6;
let opacityValue = 0.3;
let width = 240;
let height = 240;
let borderRadius = 0;
let spreadValue = 0;
let colorValue = 'rgba(0, 0, 0, 0.3)';
let insetValue = false;

const hexToRGBA = (hex) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
};

const generateBoxShadow = () => {
  if (insetValue) {
    box.style.boxShadow = `inset ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  } else {
    box.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  }
};

const changeBoxSize = () => {
  box.setAttribute('style', `height: ${height}px; width: ${width}px; border-radius: ${borderRadius}px;`);
};

const updateValues = () => {
  xValue = document.querySelector("#x-value").value;
  yValue = document.querySelector("#y-value").value;
  blurValue = document.querySelector("#blur").value;
  opacityValue = document.querySelector("#opacity").value;
  width = document.querySelector('#width').value;
  height = document.querySelector('#height').value;
  borderRadius = document.querySelector('#border-radius').value;
  spreadValue = document.querySelector("#spread").value;
  colorValue = hexToRGBA(document.querySelector("#color").value);
  insetValue = document.querySelector("#inset").checked;

  changeBoxSize();
  generateBoxShadow();
};

controls.forEach((c) => {
  c.addEventListener('input', updateValues);
});

const generateCode = () => {
  if (insetValue) {
    code.innerHTML = `box-shadow: inset ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  } else {
    code.innerHTML = `box-shadow: ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
  }
};

generateCodeBtn.addEventListener('click', generateCode);