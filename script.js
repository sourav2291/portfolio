const phrases = [
  "IT Project Coordinator",
  "Python & Django Developer",
  "Web Designer",
  "Full-Stack Developer"
];

let current = 0;
let index = 0;
let isDeleting = false;

const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function type() {
  const text = phrases[current];

  if (!isDeleting) {
    typedText.textContent = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => { isDeleting = true; }, 1500);
    }
  } 
  else {
    typedText.textContent = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
      current = (current + 1) % phrases.length;

      /* Re-trigger glow animation on new word */
      typedText.style.animation = "none";
      void typedText.offsetWidth;
      typedText.style.animation = "";
    }
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});
