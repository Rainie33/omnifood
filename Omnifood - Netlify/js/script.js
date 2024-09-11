// 設定目前年份
let yearEl = document.querySelector('.year');
let currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// 使移動導航正常工作
let btnNavEl = document.querySelector('.btn-mobile-nav');
let headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

// ------------------------------------------------------ //
// 平滑滾動畫面 Smooth scrolling animation
let allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // 清除預設
    e.preventDefault();
    let href = link.getAttribute('href');

    // 滾動回頂部
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // 滾動到其他連結
    if (href !== '#' && href.startsWith('#')) {
      let sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
      console.log(sectionEl);
    }

    // 關閉手機導航選單
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

// ------------------------------------------------------ //
// 黏性導航 STICKY NAVIGATION

let sectionHeroEL = document.querySelector('.section-hero');

let obs = new IntersectionObserver(
  (entries) => {
    let ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    // 在視窗中的位置
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEL);
