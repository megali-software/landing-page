let i = 0;
let txt = ["Partners", "Professionals", "Companies"]; // The text
let currentText = 0;
let isDeleting = false;
let speed = 30; // Speed of typing in milliseconds
let delayBetweenWords = 2300; // Delay between words in milliseconds
let randomSpeedVariation = 20; // Variation in typing speed in milliseconds

function typeWriter() {
  let displayText = txt[currentText];

  if (isDeleting) {
    document.getElementById("typewriter").innerHTML =
      displayText.substring(0, i) + '<span class="blinking-cursor">|</span>';
    if (i === 0) {
      isDeleting = false;
      currentText = (currentText + 1) % txt.length;
      setTimeout(
        typeWriter,
        speed + Math.floor(Math.random() * randomSpeedVariation)
      );
    } else {
      i--;
      setTimeout(
        typeWriter,
        speed + Math.floor(Math.random() * randomSpeedVariation)
      );
    }
  } else {
    document.getElementById("typewriter").innerHTML =
      displayText.substring(0, i) + '<span class="blinking-cursor">|</span>';
    if (i === displayText.length) {
      isDeleting = true;
      setTimeout(typeWriter, delayBetweenWords); // Only delay after a full word has been typed
    } else {
      i++;
      setTimeout(
        typeWriter,
        speed + Math.floor(Math.random() * randomSpeedVariation)
      );
    }
  }
}

window.onload = typeWriter;
