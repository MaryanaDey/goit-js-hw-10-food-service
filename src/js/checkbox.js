const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkTheme = localStorage.getItem('Theme');


checkboxPosition();

refs.checkbox.addEventListener('change', onClickCheck);

function onClickCheck(evt) {

  if (evt.target.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    refs.body.classList.add(Theme.DARK);
   
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    
    refs.body.classList.add(Theme.LIGHT);
  }
}

function checkboxPosition() {

  if (checkTheme === Theme.DARK) {
    refs.checkbox.checked = true;
  }
}







