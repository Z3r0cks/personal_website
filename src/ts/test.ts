(async () => {
   const rawResponse = await fetch('/title', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: 1, name: 'title_name', Text_Content: "Alexander Jaroch" })
   });
   const content = await rawResponse.json();

   console.log(content);
})();