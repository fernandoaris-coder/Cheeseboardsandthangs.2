// Modal
const modal = document.getElementById('bookModal');
const openers = ['bookBtnHeader','bookBtnHero','bookBtnCta','bookBtnAbout','bookBtnProducts','bookBtnContact']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const closeModal = document.getElementById('closeModal');
const closeX = document.getElementById('closeX');

openers.forEach(btn => btn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}));
[closeModal, closeX].forEach(el => el && el.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}));
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && modal.classList.contains('show')){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  }
});

// Carousel
const slidesTrack = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prevSlide');
const next = document.getElementById('nextSlide');
let idx = 0;
function updateSlide(){ slidesTrack.style.transform = `translateX(-${idx * 100}%)`; }
if(prev && next){
  prev.addEventListener('click', () => { idx = (idx - 1 + slides.length) % slides.length; updateSlide(); });
  next.addEventListener('click', () => { idx = (idx + 1) % slides.length; updateSlide(); });
}
setInterval(() => { idx = (idx + 1) % slides.length; updateSlide(); }, 5000);
