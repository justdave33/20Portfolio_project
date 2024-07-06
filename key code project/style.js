const conatiner = document.getElementById("keycontainer")
conatiner.innerHTML = generateHTML("-", "-", "-")
window.addEventListener("keydown", (e) => {
    conatiner.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
})

function generateHTML(key,code,keyCode) {

    return `
    <div class="key-container">
      <h4>Key</h4>
      <div class="key-content">${key === " " ? "Space" : key}
      </div>
    </div>

    <div class="key-container">
      <h4>Code</h4>
      <div class="key-content">${code}
      </div>
    </div>

    <div class="key-container">
      <h4>Key code</h4>
      <div class="key-content">${keyCode}
      </div>
    </div>
    `
}