// main.js ফাইলে Google Analytics ট্র্যাকিং কোড যোগ করুন
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

// Google Analytics ইনিশিয়ালাইজ করুন
gtag('js', new Date());
gtag('config', 'G-QBD67LR4QF');



    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });





const downloadBtn = document.getElementById('downloadBtn');
const modal = document.getElementById('downloadModal');
const closeBtn = modal.querySelector('.close');

downloadBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  modal.style.display = 'block'; // Show modal
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none'; // Hide modal on close click
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; // Hide modal if clicked outside modal content
  }
});
