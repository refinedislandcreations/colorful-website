// assets/js/offers-animations.js
gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  // Hero animations
  const heroTimeline = gsap.timeline();
  heroTimeline
    .fromTo(
      "#logo",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(
      "#contact-btn",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      "#hero-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      "#hero-divider",
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(
      "#hero-subheading",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

  // Add hero badge animation if it exists
  const heroBadge = document.getElementById("hero-badge");
  if (heroBadge) {
    heroTimeline.fromTo(
      "#hero-badge",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.6 }
    );
  }

  heroTimeline
    .fromTo(
      "#hero-buttons",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(
      "#header-wave",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

  // Featured packages
  gsap.fromTo(
    "#section-heading",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: { trigger: "#section-heading", start: "top 80%" },
    }
  );

  gsap.fromTo(
    ["#package-1", "#package-2", "#package-3"],
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: { trigger: ".grid-cols-3", start: "top 80%" },
    }
  );

  // Seasonal offer
  gsap.fromTo(
    "#seasonal-content",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#seasonal-content", start: "top 80%" },
    }
  );

  gsap.fromTo(
    "#seasonal-side",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#seasonal-side", start: "top 80%" },
    }
  );

  // Corporate offers
  gsap.fromTo(
    "#corporate-heading",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: { trigger: "#corporate-heading", start: "top 80%" },
    }
  );

  gsap.fromTo(
    "#corporate-benefits",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#corporate-benefits", start: "top 80%" },
    }
  );

  gsap.fromTo(
    "#group-benefits",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#group-benefits", start: "top 80%" },
    }
  );

  gsap.fromTo(
    "#corporate-cta",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: { trigger: "#corporate-cta", start: "top 80%" },
    }
  );

  // Button hover effects
  document.querySelectorAll("a, button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.05, duration: 0.2 });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.2 });
    });
  });

  // Package card hover effects
  document.querySelectorAll(".group").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -5, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3 });
    });
  });

  // Countdown animation (simple example)
  setInterval(() => {
    const seconds = document.getElementById("seconds");
    if (seconds) {
      let current = parseInt(seconds.textContent);
      seconds.textContent = current > 0 ? current - 1 : 59;
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", initAnimations);
window.addEventListener("resize", () => ScrollTrigger.refresh());
