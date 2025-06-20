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
  const futureMenu = document.querySelector('.futureMenu a');
  const workContent = document.querySelector('.workContent');

  const setHeight = (height) => {
    workContent.style.height = height;
    workContent.style.transition = 'height 0.5s ease';
  };

  const isMobile = () => window.matchMedia('(max-width: 500px)').matches;

  skillMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if (isMobile()) {
      setHeight('130vh');
    }
  });

  futureMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if (isMobile()) {
      setHeight('130vh');
    }
  });
});

// const isMobile390 = () => window.matchMedia('(max-width: 390px)').matches;

// skillMenu.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (isMobile390()) {
//     setHeight('500vh');
//   }
// });



window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const scrollTo = params.get('scrollTo');

  if (scrollTo === 'skill') {
    document.querySelectorAll('.opus').forEach(el => el.style.display = 'none');
    document.querySelector('.skillSection').style.display = 'block';
    document.querySelector('.futureContent').style.display = 'none';
    document.querySelector('.skillSection').scrollIntoView({ behavior: 'smooth' });
  }

  if (scrollTo === 'future') {
    document.querySelectorAll('.opus').forEach(el => el.style.display = 'none');
    document.querySelector('.futureContent').style.display = 'block';
    document.querySelector('.skillSection').style.display = 'none';
    document.querySelector('.futureContent').scrollIntoView({ behavior: 'smooth' });
  }
});