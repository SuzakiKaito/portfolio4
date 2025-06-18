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

  if (scrollY + windowHeight >= documentHeight - 10) {
    // 一番下付近なら表示
    backTop.style.display = 'block';
  } else {
    // それ以外では非表示
    backTop.style.display = 'none';
  }
});

