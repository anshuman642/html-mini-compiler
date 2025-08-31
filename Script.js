const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const output = document.getElementById("output");

// 🟢 Run Code
function runCode() {
  let html = htmlCode.value;
  let css = "<style>" + cssCode.value + "</style>";
  let js = "<script>" + jsCode.value + "<\/script>";

  output.srcdoc = html + css + js;

  // Auto Save while typing
  saveCode(false);
}

// 🟢 Save to LocalStorage
function saveCode(showAlert = true) {
  localStorage.setItem("htmlCode", htmlCode.value);
  localStorage.setItem("cssCode", cssCode.value);
  localStorage.setItem("jsCode", jsCode.value);
  if (showAlert) alert("✅ Code Saved!");
}

// 🟢 Clear Editors
function clearCode() {
  if (confirm("⚠ Kya aap sure ho sab clear karna chahte ho?")) {
    htmlCode.value = "";
    cssCode.value = "";
    jsCode.value = "";
    runCode();
    localStorage.clear();
  }
}

// 🟢 Load Saved Code
window.onload = () => {
  htmlCode.value = localStorage.getItem("htmlCode") || "<h2>Hello Duniya 🌍</h2>";
  cssCode.value = localStorage.getItem("cssCode") || "body { text-align:center; font-family: Arial; }";
  jsCode.value = localStorage.getItem("jsCode") || "console.log('Muskuraiye — Aap Coder Hai!')";
  runCode();
};


