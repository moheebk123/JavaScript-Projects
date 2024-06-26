const run = () => {
  let html = document.getElementById("htmlCode").value;
  let css = document.getElementById("cssCode").value;
  let js = document.getElementById("jsCode").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = `${html}<style>${css}</style>`;
  output.contentWindow.eval(js);
};
