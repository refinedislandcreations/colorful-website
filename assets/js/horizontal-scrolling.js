gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes the horizontal scroll, pin, and fade animations.
 */
function initHorizontalScroll() {
  // Select elements
  const horizontalSection = document.querySelector("#horizontal-section");
  const items = horizontalSection.querySelectorAll("div > div"); // Select direct children of the wrapper div

  // 1. Set initial positions: Move all items except the first one off-screen to the right.
  items.forEach((item, index) => {
    if (index !== 0) {
      // xPercent: 100 moves the element 100% of its own width to the right
      gsap.set(item, { xPercent: 100, opacity: 0 });
    }
  });

  // 2. Create the main timeline for the scroll-controlled animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: horizontalSection,
      pin: true, // Crucial: Pins the section to the viewport
      start: "top top",
      // Calculate the scroll distance required: 100% of viewport height per item
      end: () => `+=${items.length * 100}%`,
      scrub: 1.5, // Increased scrub for a smoother, laggier effect
      invalidateOnRefresh: true,
      // markers: true, // Uncomment for debugging
    },
    // Removed default ease: "none" to allow for specific easing below
  });

  // 3. Loop through items to create the sequenced fade/slide animations
  items.forEach((item, index) => {
    // We only need to animate if there is a next item
    if (index < items.length - 1) {
      // PART A: Current Item Fades Out and Shrinks
      tl.to(
        item,
        {
          scale: 0.9,
          opacity: 0,
          ease: "power1.in", // Use an 'in' ease for the item fading away
        },
        `+=1`
      ) // Increased pause before the transition starts

        // PART B: Next Item Slides In
        .to(
          items[index + 1],
          {
            xPercent: 0, // Slides from 100% off-screen to 0% (center)
            opacity: 1,
            ease: "power2.out", // <-- New: Use a smooth 'out' ease for the incoming slide
          },
          "<"
        ) // Starts at the same time as PART A

        // PART C: Add an extra vertical scroll gap to keep the card visible
        .to(
          {},
          {
            duration: 2.0, // Increased hold time for the current card
          }
        );
    }
  });
}

// Run the setup function once the entire page is loaded
window.addEventListener("load", initHorizontalScroll);
