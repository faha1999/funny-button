const btn = document.getElementById('btn');
const password = document.getElementById('pass');
let elemWidth = btn.offsetTop;
let eleTop = elemWidth;

password.addEventListener('keyup', () => {
  const passwordValue = document.getElementById('pass').value;
  if (passwordValue.length < 8) {
    const x = `https://c6c8j7x5.rocketcdn.me/Android|iPhone/i.test(navigator.userAgent`;
    if (x) {
      console.log('mobile');
    } else {
      btn.removeAttribute('disabled');
    }

    password.style.outline = '2px solid red';
    btn.style.backgroundColor = 'red';
    btn.classList.add('trans');
  } else {
    btn.style.backgroundColor = 'rgba(0, 0, 255, 0.714)';
    btn.classList.remove('trans');
    password.style.outline = 'none';
    btn.style.position = 'absolute';
    btn.style.bottom = '-50px';
    btn.style.left = '16px';
  }

  document
    .querySelector('.trans')
    .addEventListener('mouseover', async (event) => {
      const passwordValue = document.getElementById('pass').value;

      if (passwordValue.length < 8) {
        btn.style.position = 'absolute';
        btn.style.bottom = '-50px';
        console.log('width', elemWidth);
        console.log('Top', eleTop);
        if (elemWidth != eleTop) {
          btn.style.removeProperty('right');
          btn.style.left = '16px';
          elemWidth = elemWidth - parseInt('38px');
          event.stopImmediatePropagation();
        } else {
          btn.style.removeProperty('left');
          btn.style.right = '16px';
          elemWidth = elemWidth + parseInt('38px');
          event.stopImmediatePropagation();
        }
      }
    });
});

btn.addEventListener('click', () => {
  const password = document.getElementById('pass');
  if (password.value == '') {
    swal({
      title: 'Password field is empty!',
      text: 'Type  your  password!',
      icon: 'error',
      button: 'Ok!',
    });
  }

  if (password.value.length >= 8) {
    swal({
      title: 'Good job!',
      text: 'Account Created!',
      icon: 'success',
      button: 'Ok!',
    });
  }
});
