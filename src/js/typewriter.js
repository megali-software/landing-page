const txt = ["Partners", "Professionals", "Companies"];
const speed = 50;
const delayBetweenWords = 2300;

let i = txt[0].length;
let currentText = 0;
let isDeleting = true;

function typeWriter() {
  let displayText = txt[currentText];

  document.getElementById("typewriter").innerHTML =
    displayText.substring(0, i) + '<span class="blinking-cursor">|</span>';

  if (isDeleting) {
    if (i === 0) {
      isDeleting = false;
      currentText = (currentText + 1) % txt.length;
      setTimeout(typeWriter, speed);
    } else {
      i--;
      setTimeout(typeWriter, speed);
    }
  } else {
    if (i === displayText.length) {
      isDeleting = true;
      setTimeout(typeWriter, delayBetweenWords); // Only delay after a full word has been typed
    } else {
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}

window.onload = typeWriter;
