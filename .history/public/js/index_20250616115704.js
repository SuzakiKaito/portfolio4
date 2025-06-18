document.querySelector('.skillMenu a').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.skillContent').style.display = 'block';
  document.querySelector('.futureContent').style.display = 'none';
  window.scrollTo({ top: document.querySelector('.skillContent').offsetTop, behavior: 'smooth' });
});

document.querySelector('.futureMenu a').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.futureContent').style.display = 'block';
  document.querySelector('.skillContent').style.display = 'none';
  window.scrollTo({ top: document.querySelector('.futureContent').offsetTop, behavior: 'smooth' });
});


// DOMの読み込み後に実行
document.addEventListener("DOMContentLoaded", function () {
  // ボタンの要素を取得
  const skillBtn = document.querySelector(".skillMenu");
  const futureBtn = document.querySelector(".futureMenu");

  // 表示するセクションの要素を取得
  const skillContent = document.querySelector(".skillContent");
  const futureContent = document.querySelector(".futureContent");

  // スキルボタンがクリックされたとき
  skill.addEventListener("click", function () {
    skillContent.style.display = "block";
    futureContent.style.display = "none";

    // ボタンの状態切り替え
    skillBtn.classList.add("active");
    futureBtn.classList.remove("active");
  });

  // 今後についてボタンがクリックされたとき
  futureBtn.addEventListener("click", function () {
    skillContent.style.display = "none";
    futureContent.style.display = "block";

    // ボタンの状態切り替え
    skillBtn.classList.remove("active");
    futureBtn.classList.add("active");
  });

  // 初期表示（スキルを表示、今後についてを非表示）
  skillContent.style.display = "block";
  futureContent.style.display = "none";
  skillBtn.classList.add("active");
});



// document.addEventListener('DOMContentLoaded', function() {
//   const elements = document.querySelectorAll('.animated');

//   function checkVisibility() {
//     const windowHeight = window.innerHeight;

//     elements.forEach(element => {
//       const elementTop = element.getBoundingClientRect().top;

//       if (elementTop < windowHeight) {
//         element.classList.add('in-view');
//       }
//     });
//   }

//   window.addEventListener('scroll', checkVisibility);
//   window.addEventListener('resize', checkVisibility);

//   // ページが読み込まれた時点で一度実行しておく
//   checkVisibility();
// });

// //マウスストーカー
// const mouseStalker = document.querySelector(".mouse-stalker") 
// document.addEventListener('mousemove',function(event){
//   mouseStalker.style.transform = 'translate('+ event.clientX+'px,'+ event.clientY +'px)'
// })

// mouseStalker.addEventListener('mouseenter', () => {
//   mouseStalker.classList.add('hover');
// });

// mouseStalker.addEventListener('mouseleave', () => {
//   mouseStalker.classList.remove('hover');
// });

// //要素移動イベント
// const futureMenu = document.querySelector(".futureMenu")
// const workMenu = document.querySelector(".workMenu")
// const contactMenu = document.querySelector(".contactMenu")
// console.log(futureMenu,workMenu,contactMenu);

// futureMenu.addEventListener("click",future_event);
// function future_event() {
//   console.log("aaa");
//   window.scroll({top:0,behavior:'smooth'})
// }
// workMenu.addEventListener("click",work_event);
// function work_event() {
//   console.log("bbb");
//   window.scroll({top:1300,behavior:'smooth'})
// }
// contactMenu.addEventListener("click",contact_event);
// function contact_event() {
//   console.log("cc");
//   window.scroll({top:4100,behavior:'smooth'})
// }