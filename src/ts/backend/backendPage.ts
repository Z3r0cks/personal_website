console.log("app successfully loaded");

import AddSVG from "../svg/AddSvg";

// const addSVG: AddSVG = new AddSVG("be_addSvg", "#0f7dbd");
// addSVG.svg.addEventListener("click", () => {
// })

const componentMenu: HTMLDivElement = document.createElement("div");
componentMenu.classList.add("c_devMenu");

const componentArray: string[] = [];

fetch('/selectContent')
   .then(response => response.json())
   .then(data => data.forEach(e => {
      componentArray.push(e.Name);
   }));

setTimeout(() => {
   console.log(componentArray.length);
   componentArray.forEach(e => {
      const cBtn: HTMLButtonElement = document.createElement("button");
      cBtn.classList.add("c_devBtn");
      cBtn.innerHTML = e;
      componentMenu.append(cBtn);
   })
}, 200)

// titleNameBtn.addEventListener("click", e => {
//    fetch("/titlename", {
//       method: 'POST',
//       headers: {
//          'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ titleName: titleName.value })
//    }).then();
// });

document.body.append(componentMenu);