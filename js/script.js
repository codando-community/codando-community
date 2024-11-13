const scrollButton = document.querySelector('.scrollbutton');

scrollButton.addEventListener('click', () => {
    window.scrollTo(0,0)
})

function displayButton() {
    if(window.scrollY === 0) {
        //ocultar o botão
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        //mostrar o botao
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', displayButton)

window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.nav-links').style.animation = 'slideDown 1s forwards ease-in-out';
    }, 500);
  });