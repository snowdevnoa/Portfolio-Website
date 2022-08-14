const easterEgg = document.querySelector('h1');
const socials = document.querySelectorAll('svg.ionicon');
const page = document.querySelector('body');
const list = document.querySelectorAll('ul#socials li svg');
const projects = document.querySelector('div.projects');
const link = document.querySelectorAll('span');
//dark mode

function nightMode() {
  page.classList.toggle('dark');
  easterEgg.classList.toggle('darkh1');
  socials.forEach((values) => {
    values.classList.toggle('dark');
  });
  projects.classList.toggle('darkprojects');
}

easterEgg.addEventListener('click', nightMode);

// scrolling fade in

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for (let i = 0; reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// // socials reveal

console.log(list);

list.forEach(function (item) {
  item.addEventListener('mouseover', function socialReveal() {
    console.log(item.classList[1]);
    //create span Element to place your attribute
    const spanEl = document.createElement('span');
    item.parentNode.insertBefore(spanEl, item.nextSibling);

    let x = item.classList[1];
    switch (x) {
      // set your handle text and add it next to the icons
      case 'instagram':
        console.log('this is Instagram');
        //set your handle text
        spanEl.appendChild(document.createTextNode('xmasnoaa'));

        break;

      case 'github':
        console.log('this is github');
        spanEl.appendChild(document.createTextNode('xmasnoaa'));

        break;

      case 'linkedin':
        console.log('this is linkedin');
        spanEl.appendChild(document.createTextNode('Tam Duong'));
        break;
    }
    item.removeEventListener('mouseover', socialReveal);
  });
});
