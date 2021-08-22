const header = document.querySelector('.header');
const btnNav = document.querySelector('.btn-mobile-nav');
const allLinks = document.querySelectorAll('a:link');
const sectionHero = document.querySelector('.section-hero');

btnNav.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

allLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('main-nav-link'))
      header.classList.toggle('nav-open');
  });
});

// Sticky Navigation
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) document.body.classList.add('sticky');
    if (ent.isIntersecting === true) document.body.classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionHero);
