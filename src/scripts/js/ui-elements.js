const makeButton = (id, label, onClick) => {
  const button = document.createElement("button");
  button.id = id;
  button.innerText = label;
  button.onclick = () => {
    onClick();
    reflect();
  };
  button.style = "position: absolute; left: 0; top: 0;";
  return button;
};

const toolLine = () => {
  let button = makeButton("tool-line", "Draw line", () => {
    window.onmousedown = (e) => {
      console.log(e);
    };
  });
  return button;
};

const reflect = () => {};

const UI_ELEMENTS = {
  toolLine: toolLine(),
};

export { UI_ELEMENTS };
