const leftOverlay = document.getElementById('leftOverlay');
const rightOverlay = document.getElementById('rightOverlay');
const leftUnderlay = document.getElementById('leftUnderlay');

leftOverlay.addEventListener('click', function() {
  leftOverlay.classList.toggle('slideRight');
  leftUnderlay.classList.toggle('slideLeft');
});
leftUnderlay.addEventListener('click', function() {
  leftOverlay.classList.toggle('slideRight');
  leftUnderlay.classList.toggle('slideLeft');
});
// rightOverlay.addEventListener('click', function() {
//   rightOverlay.classList.toggle('slideLeft');
//   rightUnderlay.classList.toggle('slideRight');
// });