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