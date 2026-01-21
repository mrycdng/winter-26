const cover = document.querySelector('.cover');
const spreads = document.querySelectorAll('.spread');

let index = -1; // -1 = cover

document.getElementById('book').addEventListener('click', () => {
  if (index === -1) {
    cover.classList.remove('active');
    index = 0;
    spreads[0].classList.add('active');
    return;
  }

  spreads[index].classList.remove('active');
  index = (index + 1) % spreads.length;
  spreads[index].classList.add('active');
});