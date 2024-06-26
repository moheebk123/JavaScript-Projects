const container = document.getElementById("container");
const request = new XMLHttpRequest();
request.open("GET", "index.json");
request.send();

// response
request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  const htmlData = `
    <div class="image">
      <img width="200px" src="${data.flag}" alt="image"/>
    </div>
    <h1>${data.country}</h1>
    <p class="capital">capital : ${data.state}</p><hr>
    <div class="info">
      <div class="text">
        <h3>${data.language}</h3>
        <p>Native Language</p>
      </div>
      <div class="text">
        <h3>${data.currency}</h3>
        <p>Currency</p>
      </div>
    </div>
  `;
  container.innerHTML = htmlData;
});
