document.querySelector('.skillMenu a').addEventListener('click', function(e) {
  e.preventDefault(); // #skill へのスクロールを防ぐ
  document.querySelectorAll('.opus').forEach(el => {
    el.style.display = 'none';  // .opusを非表示
  });
  document.querySelector('.skillSection').style.display = 'block';  // .skillSectionを表示
});