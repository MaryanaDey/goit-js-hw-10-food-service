const refs = {
    checkbox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
  };
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  currentCheckThem();
  checkboxPosition();
  
  refs.checkbox.addEventListener('change', onBlackWhite);
  
  function onBlackWhite(e) {
    const checkThem = localStorage.getItem('Them');
    if (e.target.checked) {
      localStorage.setItem('Them', Theme.DARK);
      refs.body.classList.add(Theme.DARK);
    } else {
      localStorage.setItem('Them', Theme.LIGHT);
      refs.body.classList.remove(Theme.DARK);
    }
  }
  
  function checkboxPosition() {
    const checkThem = localStorage.getItem('Them');
    if (checkThem === Theme.DARK) {
      refs.checkbox.checked = true;
    }
  }
  
  function currentCheckThem() {
    const checkThem = localStorage.getItem('Them');
  
    if (!checkThem) {
      localStorage.setItem('Them', Theme.LIGHT);
      refs.body.classList.add(Theme.LIGHT);
    } else {
      refs.body.classList.add(checkThem);
    }
  }












