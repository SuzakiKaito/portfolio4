document.querySelector('.skillMenu').addEventListener('click', (e) => {
  e.preventDefault();
  const workContent = document.querySelector('.workContent');
  workContent.innerHTML = `
    <section id="skillSection" style="padding: 5rem; background: #eee; color: #222; font-size: 1.6rem; line-height: 2; height: 100vh;">
      <div style="width:100%; display:flex; align-items:center; justify-content:left;">
        <h3 style="font-size: 2.4rem; margin-bottom:2rem;">Skill</h3>
        <img src="img/skill.png" alt="Skill" style="width: 200px; margin:0 0 2rem 3rem;">
      </div>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 8rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="img/engneer.png" alt="Engineer Skill" style="width: 80px;">
          <strong style="font-size: 1.6rem;">フロントエンド実装</strong>
        </div>
        <p style="margin: 0.5rem 0 0 0; font-size: 1.4rem; line-height: 1.6;">
          HTML、CSS、JavaScriptを用いたWebサイトやLP（ランディングページ）のコーディングに慣れており、デザインカンプに忠実な再現が可能です。レスポンシブ対応やアニメーションの実装にも対応しており、FigmaやPhotoshopから書き出した素材を使って、ピクセル単位での調整も行います。また、SCSSを活用して効率的にスタイルを管理し、保守性の高いコードを書くよう心がけています。
        </p>
        </li>

        <li style="margin-bottom: 8rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="img/design.png" alt="Engineer Skill" style="width: 80px;">
          <strong style="font-size: 1.6rem;">ビジュアルデザイン</strong>
        </div>
        <p style="margin: 0.5rem 0 0 0; font-size: 1.4rem; line-height: 1.6;">
          Adobe Illustrator、Photoshop、Figmaを用いて、名刺・ロゴ・バナー・ポスターなどのビジュアルデザインや、Webサイト制作に必要なワイヤーフレーム・カンプを制作してきました。Figmaでは主にUI設計を行い、デザイン意図をチームで共有しやすくする工夫も行いました。IllustratorやPhotoshopでは、レイヤー管理に注意しながら、目的やターゲットに合ったデザイン制作を心がけています。
        </p>
        </li>

        <li style="margin-bottom: 8rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <img src="img/plan.png" alt="Engineer Skill" style="width: 80px;">
          <strong style="font-size: 1.6rem;">課題解決・企画立案</strong>
        </div>
        <p style="margin: 0.5rem 0 0 0; font-size: 1.4rem; line-height: 1.6;">
          学校の授業を通じて、社会や日常生活に存在する多様な課題を自ら発見し、それらの問題を解決するための企画立案に取り組みました。ユーザーの視点に立ち、現状分析を含めて実際のニーズや問題点を細かく分析することで、具体的かつ実用的な解決策を検討しました。さらに、その企画を基に独創的で効果的なアイデアを具体的な形にする方法を学び、チームでのディスカッションやプレゼンテーションを重ねながら、企画力とコミュニケーション力を磨いています。この経験により、課題発見から企画立案までの一連のプロセスを実践的に理解し、ユーザーの課題に寄り添った創造的な提案力を身につけることができました。
        </p>
        </li>
      </ul>
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

//containerの高さを100vhに
const skillSection = document.querySelector('.skillSection');
const container = document.querySelector('.container');
console.log(skillSection,container);


// skillSectionが表示されたらcontainerにクラスを付ける
const observer = new MutationObserver(() => {
  if (getComputedStyle(skillSection).display !== 'none') {
    container.classList.add('skill-active');
  } else {
    container.classList.remove('skill-active');
  }
});

observer.observe(skillSection, { attributes: true, attributeFilter: ['style'] });


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