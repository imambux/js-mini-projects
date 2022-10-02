const imgsContainer = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const imgs = document.querySelectorAll('#imgs img');

let idx = 0;

function changeImage() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }

  imgsContainer.style.transform = `translateX(${-idx * 500}px)`;
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
});

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
});
