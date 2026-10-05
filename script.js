const webinarStart = new Date("2026-10-10T17:00:00+01:00").getTime();
const timeElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

function updateCountdown() {
  const remaining = Math.max(0, webinarStart - Date.now());
  const units = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000
  };
  let value = remaining;
  Object.entries(units).forEach(([name, milliseconds]) => {
    const amount = Math.floor(value / milliseconds);
    timeElements[name].textContent = String(name === "days" ? amount : amount % (name === "hours" ? 24 : 60)).padStart(2, "0");
    value %= milliseconds;
  });
}

updateCountdown();
window.setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));