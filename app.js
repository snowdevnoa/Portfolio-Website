const easterEgg = document.querySelector('h1');
const list = document.querySelector('ul');
let socials = document.querySelectorAll('svg.ionicon');

//dark mode
function nightMode() {
  const page = document.querySelector('body');
  page.classList.toggle('dark');
  easterEgg.classList.toggle('darkh1');
  socials.forEach((values) => {
    values.classList.toggle('dark');
  });
}

easterEgg.addEventListener('click', nightMode);

//social animate

function socialOpen() {
  console.log(list.children[0]);
  console.log(list.children[1]);
  console.log(list.children[2]);
}

list.addEventListener('mousover', socialOpen);

console.log(socials);
