var modal = document.getElementById('modal-trailer');

var modalBtn = document.getElementById('modal-btn');

var closeBtn = document.getElementsByClassName('close-btn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutSide);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutSide(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
