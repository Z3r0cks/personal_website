const titleName: HTMLInputElement = document.createElement("input");
titleName.textContent;
const titleNameBtn: HTMLButtonElement = document.createElement("button");
titleNameBtn.innerHTML = "SENDENNN";


fetch('/titlename')
   .then(response => response.json())
   .then(data => titleName.value = data.titleName);

document.body.append(titleName, titleNameBtn);

titleNameBtn.addEventListener("click", e => {
   fetch("/titlename", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ titleName: titleName.value })
   }).then();
});

