// .workContent をすべて取得
const workContents = document.querySelectorAll('.workContent');

workContents.forEach((content) => {
  const anchorTag = content.querySelector('a');

  content.addEventListener('mouseover', () => {
    anchorTag.style.color = '#9f1e1e'; // ホバー時の色
  });

  content.addEventListener('mouseout', () => {
    anchorTag.style.color = '#eee'; // 元の色
  });
});

//backTopで一番上の画面まで戻る
document.querySelector('.backTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const backTop = document.querySelector('.backTop');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollY + windowHeight >= documentHeight - 2000) {
    // 表示とアニメーションを同時に制御
    backTop.style.display = 'block';
    backTop.classList.add('show'); // フェードイン
  } else {
    backTop.classList.remove('show'); // フェードアウト
    backTop.style.display = 'none';
  }
});


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