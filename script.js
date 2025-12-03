// ==========================
// PAGE MENU TOGGLE
// ==========================
const pageMenu = document.getElementById('pageMenu');

pageMenu.addEventListener('click', () => {
  pageMenu.classList.toggle('active');
});

// ==========================
// FEATURED PROJECTS SCROLLER
// ==========================
const scroller = document.getElementById('featured-scroller');
let scrollAmount = 0;
const scrollStep = 320; // adjust depending on project card width

// Optional: if you add arrows in HTML later
function scrollLeft() {
  scroller.scrollBy({ left: -scrollStep, behavior: 'smooth' });
}
function scrollRight() {
  scroller.scrollBy({ left: scrollStep, behavior: 'smooth' });
}

// ==========================
// IMAGE POPOUT / LIGHTBOX
// ==========================
const popoutOverlay = document.getElementById('popout');
const popoutImg = document.getElementById('popout-img');

document.querySelectorAll('.project-card img, .project-detail img').forEach(img => {
  img.addEventListener('click', () => {
    popoutImg.src = img.src;
    popoutOverlay.classList.add('active');
  });
});

// Close popout when clicking overlay
popoutOverlay.addEventListener('click', () => {
  popoutOverlay.classList.remove('active');
});

// ==========================
// SCROLL TO PROJECT SECTIONS (Projects Page)
// ==========================
function scrollToProject(projectId) {
  const project = document.getElementById(projectId);
  if (project) {
    project.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==========================
// HIGHLIGHT TRANSITIONS (optional subtle)
document.querySelectorAll('.project-link, .back-top').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.style.backgroundColor = '#a0c4ff';
  });
  el.addEventListener('mouseout', () => {
    el.style.backgroundColor = '';
  });
});
