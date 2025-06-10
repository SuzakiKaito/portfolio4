document.querySelector('.skillMenu').addEventListener('click', (e) => {
  e.preventDefault();
  const workContent = document.querySelector('.workContent');
  workContent.innerHTML = `
    <section id="skillSection" style="padding: 4rem; background: #eee; color: #222; font-size: 1.6rem; line-height: 2; height: 100vh;">
  <h3 style="font-size: 2.4rem; margin-bottom: 2rem;">Skill</h3>

  <div style="display: flex; align-items: flex-start; gap: 1.5rem; margin-bottom: 2rem;">
    <img src="./img/engneer.png" alt="コーディング" style="width: 50px; height: 50px;">
    <div>
      <strong style="font-size: 1.8rem;">フロントエンド実装</strong><br>
      HTML、CSS、JavaScriptを用いたWebサイト・LPの実装に慣れており、デザイン意図を汲み取った再現性の高いコーディングが可能です。
      UIの細かな動きやレスポンシブ対応にも配慮しています。
    </div>
  </div>

  <div style="display: flex; align-items: flex-start; gap: 1.5rem; margin-bottom: 2rem;">
    <img src="./img/design.png" alt="デザイン" style="width: 50px; height: 50px;">
    <div>
      <strong style="font-size: 1.8rem;">ビジュアルデザイン</strong><br>
      Illustrator、Photoshop、Figmaを用いて、ロゴ・バナー・ポスターなどのデザイン制作を行っています。
      UI設計やプロトタイピングも含め、ユーザー視点を意識したデザインを心がけています。
    </div>
  </div>

  <div style="display: flex; align-items: flex-start; gap: 1.5rem;">
    <img src="./img/plan.png" alt="企画立案" style="width: 50px; height: 50px;">
    <div>
      <strong style="font-size: 1.8rem;">課題発見と企画提案</strong><br>
      課題の発見から企画・提案・Web化までを一貫して行う力を学校で養いました。
      社会や日常の問題をヒントに、アイデアを形にする力を身につけています。
    </div>
  </div>
</section>
  `;
});

document.querySelector('.futureMenu a[href="#top"]').addEventListener('click', (e) => {
  e.preventDefault();
  const workContent = document.querySelector('.workContent');
  workContent.innerHTML = `
    <div class="opus"></div>
  `;
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