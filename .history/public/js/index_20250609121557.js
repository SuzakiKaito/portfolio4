document.querySelector('.skillMenu').addEventListener('click', (e) => {
  e.preventDefault();
  const workContent = document.querySelector('.workContent');
  workContent.innerHTML = `
    <section id="skillSection" style="padding: 4rem; color: white; font-size: 1.6rem; line-height: 2;">
      <h3>Skill</h3>
      <p>
        ・HTML、CSS、JavaScriptを用いたWebサイト、LPの扱いに慣れており、デザインに沿った実装が可能です。<br>
        ・Adobe Illustrator、Adobe Photoshop、Figmaの操作方法を学び、各種デザイン制作（ロゴ、バナー、ポスター、ワイヤーフレーム、カンプ）に関する知識を身につけました。<br>
        ・学校では、課題の発見から企画、デザイン、コーディング、公開まで、Web制作の流れを実践的に学びました。日常や社会にある課題を見つけ出し、自分なりのアイデアでWeb上の解決策を考える経験を積んでいます。
      </p>
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