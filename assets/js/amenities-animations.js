// assets/js/amenities-animations.js
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
    )
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

  // Featured amenities
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
    ["#amenity-1", "#amenity-2", "#amenity-3"],
    { opacity: 0, rotationY: 90 },
    {
      opacity: 1,
      rotationY: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: { trigger: ".grid-cols-3", start: "top 80%" },
    }
  );

  // Spa section
  gsap.fromTo(
    "#spa-content",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#spa-content", start: "top 80%" },
    }
  );

  gsap.fromTo(
    "#spa-image",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#spa-image", start: "top 80%" },
    }
  );

  // Business services
  gsap.fromTo(
    "#business-heading",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: { trigger: "#business-heading", start: "top 80%" },
    }
  );

  gsap.fromTo(
    "#business-center",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#business-center", start: "top 80%" },
    }
  );

  gsap.fromTo(
    "#concierge-services",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#concierge-services", start: "top 80%" },
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

  // Card hover effects
  document.querySelectorAll(".group").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3 });
    });
  });
}

document.addEventListener("DOMContentLoaded", initAnimations);
window.addEventListener("resize", () => ScrollTrigger.refresh());
