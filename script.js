const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle('active');
});


// JavaScript for Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 2) { // 200vh
    scrollToTopBtn.classList.add('show');
    scrollToTopBtn.classList.remove('hide');
  } else {
    scrollToTopBtn.classList.add('hide');
    scrollToTopBtn.classList.remove('show');
  }
});

// Smooth scroll to top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function toggleToc() {
  const tocContainer = document.querySelector('.toc-container');
  tocContainer.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active"); // Toggle clicked item
    });
  });
});


