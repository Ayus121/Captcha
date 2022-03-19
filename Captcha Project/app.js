const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector("input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-txt");

let allCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 						  "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 						  "w", "x", "y", "z", 0, 	1, 2, 3, 4, 5, 6, 7, 8, 9, ];
function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomChar}`; // passing 6 random characters inside captcha innerText
  }
}
getCaptcha();
reloadBtn.addEventListener("click", () => {
  captcha.innerText = "";
  getCaptcha();
});

checkBtn.addEventListener("click", (e) => {
  e.preventDefault(); // preventing button from its default behaviour
  statusTxt.style.display = "block";
  // adding space after each value of user entered captcha because i have added spaces while generating captcha
  let inputVal = inputField.value.split("").join(" ");
  if (inputVal == captcha.innerText) {
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice! You don't appear to be a robot";
    setTimeout(() => {
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();
    }, 2000); // removing user entered value and captcha inner text after  4s
  } else {
    statusTxt.style.color = "red";
    statusTxt.innerText = "Captcha not matched.Please try again!";
  }
});
