console.log("app successfully loaded");

import AddSVG from "../svg/AddSvg";

const addSVG: AddSVG = new AddSVG("be_addSvg", "#0f7dbd");

document.body.append(addSVG.svg);



const titleName: HTMLInputElement = document.createElement("input");
titleName.textContent;
const titleNameBtn: HTMLButtonElement = document.createElement("button");
titleNameBtn.innerHTML = "SsEsddnNN";

// console.log("test");

// fetch('/titlename')
// .then(response => response.json())
// .then(data => titleName.value = data.titleName);


// titleNameBtn.addEventListener("click", e => {
//    fetch("/titlename", {
//       method: 'POST',
//       headers: {
//          'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ titleName: titleName.value })
//    }).then();
// });

// document.body.append(titleName, titleNameBtn, addSVG.svg);