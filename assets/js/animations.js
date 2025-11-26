// assets/js/animations.js
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize all animations
function initAnimations() {
  // ========== HERO SECTION ANIMATIONS ==========
  const heroTimeline = gsap.timeline();

  heroTimeline
    .fromTo(
      "#logo",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(
      "#contact-btn",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(
      "#hero-heading",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .fromTo(
      "#hero-heading-2",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    )
    .fromTo(
      "#hero-subheading",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(
      "#hero-cta",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    )
    .fromTo(
      "#header-wave",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

  // ========== SCROLL TRIGGER ANIMATIONS ==========

  // Signature Suites Section
  gsap.fromTo(
    "#section-heading",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#section-heading",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    }
  );

  // Animate cards with stagger
  gsap.fromTo(
    ["#card-1", "#card-2", "#card-3"],
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".sm\\:grid-cols-3",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Hotel Amenities Section
  gsap.fromTo(
    "#rainbow-image",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#rainbow-image",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    "#rainbow-content",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#rainbow-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Dining Experience Section
  gsap.fromTo(
    "#door-image",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#door-image",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    "#door-content",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#door-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Hotel Gallery Section
  const lampTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#lamp-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  lampTimeline
    .fromTo(
      "#lamp-image",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    )
    .fromTo(
      "#shadow-image",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(
      "#bag-image",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.3"
    );

  // Contact Section
  const contactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  contactTimeline
    .fromTo(
      "#contact-top-wave",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      "#contact-info",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.5"
    )
    .fromTo(
      "#contact-form",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.5"
    )
    .fromTo(
      "#contact-bottom-wave",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

  // ========== MICRO-INTERACTIONS ==========

  // Add hover animations to buttons
  const buttons = document.querySelectorAll('a, input[type="submit"]');
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
  });

  // Add subtle parallax to hero background
  gsap.to("header", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: "header",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  initAnimations();
});

// Refresh ScrollTrigger on resize
window.addEventListener("resize", function () {
  ScrollTrigger.refresh();
});
