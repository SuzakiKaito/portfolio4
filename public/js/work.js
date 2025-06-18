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