const ham = document.querySelector(".header__icon-hambuger");
const nav = document.querySelector(".header__nav");
const btnShorten = document.querySelector(".cta__btn");
const inputShorten = document.querySelector(".cta__input");
const shortenedArea = document.querySelector(".shortened");
const errorLink = document.querySelector(".cta__text i");

nav.classList.add(".header__nav-show");

ham.addEventListener("click", () => {
  nav.classList.toggle("header__nav-show");
});

btnShorten.addEventListener("click", (e) => {
  e.preventDefault();
  shortenedURL().catch(() => {
    errorLink.style.display = "block";
    setTimeout(() => {
      errorLink.style.display = "none";
    }, 5000);
  });
});
async function shortenedURL() {
  const dataSent = await fetch(
    `https://api.shrtco.de/v2/shorten?url=${inputShorten.value}`
  );
  const dataReceived = await dataSent.json();
  const shortenedBox = document.createElement("div");
  shortenedBox.innerHTML = `
          <div class="shortened__box">
              <div class="shortened__input-value">
                  <p>${inputShorten.value}</p>
              </div>
              <div class="shortened__inner-box">
                <div class="shortened__shorten-value">
                  <p>${dataReceived.result.full_short_link2}</p>
                </div>
                <button class="shortened__btn" onclick="buttonCopyLink()">Copy</button>
              </div>
          </div>
  `;
  shortenedArea.prepend(shortenedBox);
  inputShorten.value = "";
}

let btnCopy = document.getElementsByClassName("shortened__btn");
let btnBox = document.getElementsByClassName("shortened__box");

function buttonCopyLink() {
  [...btnCopy].forEach((e) => {
    console.log(EventTarget)
    console.log(EventSource)
    console.log(Event)

    console.log(e.previousElementSibling.textContent);
  });

}
// btnCopy.textContent = "Copied!";
// btnCopy.style.backgroundColor = "rgb(34, 34, 218)";
