const btnLeftArrow = document.querySelector('.btn-left-arrow');
const btnRightArrow = document.querySelector('.btn-right-arrow');
const itemSlider = document.querySelectorAll('.item');
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dots');

let slideIndex = 0;
dots[slideIndex].classList.add('active');

function moveNextSlide() {
  if (!(slideIndex >= itemSlider.length - 1)) {
    itemSlider[slideIndex].classList.remove('dsy-block');
    itemSlider[++slideIndex].classList.add('dsy-block');
    dots[slideIndex].classList.add('active');
  }
  else if (slideIndex >= itemSlider.length - 1) {
    slideIndex = 0;
    itemSlider[itemSlider.length - 1].classList.remove('dsy-block');
    itemSlider[slideIndex].classList.add('dsy-block');
    dots[slideIndex].classList.remove('active');
  }

  if (!(dots[slideIndex] >= itemSlider[slideIndex - 1])) {
    dots[slideIndex].classList.add('active');
    dots[itemSlider.length - 1].classList.remove('active');
  } else {
    dots[slideIndex - 1].classList.remove('active');
  }
};

function movePrevSlide() {
  if (!slideIndex <= 0) {
    itemSlider[--slideIndex].classList.add('dsy-block');
    itemSlider[slideIndex + 1].classList.remove('dsy-block')
  }
  else if (slideIndex === 0) {
    slideIndex = 4;
    itemSlider[0].classList.remove('dsy-block');
    itemSlider[slideIndex].classList.add('dsy-block');
  }

  if (!(dots[slideIndex + 1] <= itemSlider[slideIndex])) {
    dots[0].classList.remove('active');
    dots[slideIndex].classList.add('active');
    dots[slideIndex + 1].classList.remove('active');
  } 
};

btnLeftArrow.addEventListener('click', () => {
  movePrevSlide();
});

btnRightArrow.addEventListener('click', () => {
  moveNextSlide();
});

