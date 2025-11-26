// assets/js/rooms-animations.js
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

  // Room categories
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
    ["#card-1", "#card-2", "#card-3"],
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: { trigger: ".grid-cols-3", start: "top 80%" },
    }
  );

  // Featured suite
  gsap.fromTo(
    "#featured-content",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#featured-content", start: "top 80%" },
    }
  );

  gsap.fromTo(
    "#featured-image",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: { trigger: "#featured-image", start: "top 80%" },
    }
  );

  // Amenities
  gsap.fromTo(
    "#amenities-heading",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: { trigger: "#amenities-heading", start: "top 80%" },
    }
  );

  gsap.fromTo(
    ["#amenity-1", "#amenity-2", "#amenity-3", "#amenity-4"],
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: { trigger: ".grid-cols-4", start: "top 80%" },
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
}

document.addEventListener("DOMContentLoaded", initAnimations);
window.addEventListener("resize", () => ScrollTrigger.refresh());
