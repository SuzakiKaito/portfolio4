document.addEventListener('DOMContentLoaded', () => {
  const skillBtn = document.querySelector('.skillMenu');
  const opus = document.querySelector('.opus');
  const skill = document.querySelector('.skillSection');

  skillBtn.addEventListener('click', (e) => {
    e.preventDefault(); // aタグのデフォルト挙動を止める

    // コンテンツ切替
    opus.style.display = 'none';
    skill.style.display = 'block';
  });
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