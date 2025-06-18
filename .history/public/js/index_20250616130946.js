document.querySelector('.skillMenu a').addEventListener('click', function(e) {
  e.preventDefault(); // #skill へのスクロールを防ぐ
  document.querySelectorAll('.opus').forEach(el => {
    el.style.display = 'none';  // .opusを非表示
  });
  document.querySelector('.skillSection').style.display = 'block';  // .skillSectionを表示
});

// skillMenuクリック時
document.querySelector('.skillMenu a').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelectorAll('.opus').forEach(el => el.style.display = 'none');
  document.querySelector('.skillSection').style.display = 'block';
  document.querySelector('.futureContent').style.display = 'none';
});

// futureMenuクリック時
document.querySelector('.futureMenu a').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelectorAll('.opus').forEach(el => el.style.display = 'none');
  document.querySelector('.skillSection').style.display = 'none';
  document.querySelector('.futureContent').style.display = 'block';
});

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '#scroll') {
    window.scrollTo({ top: 1600, behavior: 'smooth' });
  }
});