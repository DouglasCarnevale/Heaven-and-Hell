const selectors = {
  mode: 'section.main .mode',
  section: 'section.main',
  title: 'section.main .title',
  clouds: 'section.main .clouds img',
};

const mode = document.querySelector(selectors.mode);
const section = document.querySelector(selectors.section);
const title = document.querySelector(selectors.title);
const clouds = document.querySelectorAll(selectors.clouds);

const MODE_LIGHT = 'heaven';
const MODE_DARK = 'hell';

const getCurrentMode = () => {
  let currentMode = null;
  if (section.classList.contains(MODE_LIGHT)) {
    currentMode = MODE_LIGHT;
  } else if (section.classList.contains(MODE_DARK)) {
    currentMode = MODE_DARK;
  }
  return currentMode;
};

//mudar titulo
const toggleTitle = () => {
  const current = getCurrentMode();

  const titleText = {};
  titleText[MODE_DARK] = 'Hell';
  titleText[MODE_LIGHT] = 'Heaven';

  title.innerText = titleText[current];
};

//mudar classe main
const toggleMainClass = () => {
  const current = getCurrentMode();
  section.classList.remove(MODE_LIGHT, MODE_DARK);
  if (current === MODE_LIGHT) {
    section.classList.add(MODE_DARK);
  } else if (current === MODE_DARK) {
    section.classList.add(MODE_LIGHT);
  }
};

//mudar as imagens
const toggleClouds = () => {
  const current = getCurrentMode();
  const regex = /img\/(heaven|hell)/;
  const newSrc = `img/${current}`;

  clouds.forEach((img) => {
    const imgSrc = img.src.replace(regex, newSrc);
    img.src = imgSrc;
  });
};

//mudar tudo
const toggleMode = (e) => {
  toggleMainClass();
  toggleTitle();
  toggleClouds();
};

mode.addEventListener('click', toggleMode);
