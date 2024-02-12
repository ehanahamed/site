const codeFormatter = require("../main.js");

document.getElementById("buttonFormat").addEventListener(
  "click",
  function () {
    document.getElementById("demoCode").innerText = codeFormatter.format(document.getElementById("demoCode").innerText, {});
    document.getElementById("demoCode").removeAttribute("data-highlighted");
    hljs.highlightAll();
  }
);

document.getElementById("buttonMinify").addEventListener(
  "click",
  function () {
    document.getElementById("demoCode").innerText = codeFormatter.minify(document.getElementById("demoCode").innerText, {});
    document.getElementById("demoCode").removeAttribute("data-highlighted");
    hljs.highlightAll();
  }
);
