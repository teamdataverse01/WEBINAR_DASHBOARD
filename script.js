const webinarStart = new Date("2026-10-17T17:00:00+01:00").getTime();
const units = { days: 86400000, hours: 3600000, minutes: 60000, seconds: 1000 };
const countdownCells = document.querySelectorAll("[data-unit]");

function updateCountdown() {
  let remaining = Math.max(0, webinarStart - Date.now());
  const values = {};
  Object.entries(units).forEach(([name, ms]) => {
    values[name] = Math.floor(remaining / ms);
    remaining %= ms;
  });
  countdownCells.forEach((cell) => {
    cell.textContent = String(values[cell.dataset.unit]).padStart(2, "0");
  });
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Show the sticky register bar once the hero CTA has scrolled out of view
const stickyBar = document.querySelector("[data-sticky]");
const heroCta = document.getElementById("hero-cta");
if (stickyBar && heroCta) {
  let ticking = false;
  const updateStickyBar = () => {
    stickyBar.classList.toggle("show", heroCta.getBoundingClientRect().bottom < 0);
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateStickyBar);
    }
  }, { passive: true });
  updateStickyBar();
}
