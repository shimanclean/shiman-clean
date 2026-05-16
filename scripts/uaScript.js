const openMobileMenu = document.querySelector('.open-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu-nav-link');

openMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.classList.add('no-scroll');
})

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
})

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
  });
});

const aboutText = document.getElementById("aboutText");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  aboutText.classList.toggle("collapsed");
  toggleBtn.textContent = aboutText.classList.contains("collapsed")
    ? "Читати більше"
    : "Згорнути";
});



const reviewSlides = document.getElementById("reviews-slides");

if (reviewSlides) {
  const reviewTotalSlides = reviewSlides.children.length;
  const reviewsNum = document.querySelector(".reviews-num");

  let reviewIndex = 0;

  function showSlide(i) {
    if (i < 0) reviewIndex = reviewTotalSlides - 1;
    else if (i >= reviewTotalSlides) reviewIndex = 0;
    else reviewIndex = i;

    reviewSlides.style.transform = `translateX(-${reviewIndex * 100}%)`;
    reviewsNum.textContent = `${reviewIndex + 1}/${reviewTotalSlides}`;
  }

  reviewsNum.textContent = `1/${reviewTotalSlides}`;

  document.querySelector(".prevSlide")?.addEventListener("click", () => {
    showSlide(reviewIndex - 1);
  });

  document.querySelector(".nextSlide")?.addEventListener("click", () => {
    showSlide(reviewIndex + 1);
  });
}

const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const plus = item.querySelector('.plus');

  function toggleAccordion() {
    const isActive = item.classList.contains('accordion-active');

    items.forEach(i => i.classList.remove('accordion-active'));

    if (!isActive) {
      item.classList.add('accordion-active');
    }
  }

  title.addEventListener('click', toggleAccordion);
  plus.addEventListener('click', toggleAccordion);
});

const contactBtn = document.querySelector('.contact-btn');
const contactBackdrop = document.querySelector('.contact-backdrop');
const contactClose = document.querySelector('.close-contact-modal');


contactBtn.addEventListener("click", () => {
  contactBackdrop.classList.add('active');
  document.body.classList.add('no-scroll');
});

contactClose.addEventListener("click", () => {
  contactBackdrop.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

const onTop = document.querySelector('.onTop');

onTop.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

const ourWorksSlides = document.querySelectorAll('.ourWorks-slide');

if (ourWorksSlides.length > 0) {
  let slidesCounter = 0;

  function showSlide(index) {
    ourWorksSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  showSlide(0);

  setInterval(() => {
    slidesCounter = (slidesCounter + 1) % ourWorksSlides.length;
    showSlide(slidesCounter);
  }, 3000);
}



