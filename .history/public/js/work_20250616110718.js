// .workContent 要素を取得
const workContent = document.querySelector('.workContent');
const anchorTag = workContent.querySelector('a');

// マウスが乗ったときに文字色を変更
workContent.addEventListener('mouseover', () => {
  anchorTag.style.color = '#FFD700'; // 例：ゴールド（お好みの色に変更OK）
});

// マウスが離れたときに元に戻す
workContent.addEventListener('mouseout', () => {
  anchorTag.style.color = '#eee'; // 元の色に戻す
});