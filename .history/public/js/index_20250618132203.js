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

window.addEventListener('load', () => {
  if (window.location.hash === '#scroll') {
    setTimeout(() => {
      window.scrollTo({ top: 1600, behavior: 'smooth' });
    }, 100); // 0.1秒後に実行
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const skillMenu = document.querySelector('.skillMenu a');
  const workContent = document.querySelector('.workContent');

  skillMenu.addEventListener('click', (e) => {
    e.preventDefault();
    const isExpanded = workContent.classList.contains('expanded');

    if (isExpanded) {
      workContent.style.height = '0px';
      workContent.classList.remove('expanded');
    } else {
      workContent.style.height = workContent.scrollHeight + 'px';
      workContent.classList.add('expanded');
    }

    workContent.style.transition = 'height 0.5s ease';
  });
});