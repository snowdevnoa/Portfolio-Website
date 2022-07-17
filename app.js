const easterEgg = document.querySelector('h1');

function nightMode() {
  const page = document.querySelector('body');
  page.classList.toggle('dark');
}

easterEgg.addEventListener('click', nightMode);

const val = document.querySelector('body');

console.log(val);
