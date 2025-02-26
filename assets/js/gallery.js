// gallery.js
class GallerySlider {
  constructor(galleryElement) {
    this.gallery = galleryElement;
    this.slides = Array.from(this.gallery.querySelectorAll("a"));
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;

    // Create navigation elements
    this.createNavigation();

    // Initialize the gallery
    this.initializeGallery();

    // Add event listeners
    this.addEventListeners();
  }

  createNavigation() {
    // Create navigation buttons
    const prevButton = document.createElement("button");
    prevButton.className = "gallery-nav prev";
    prevButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';

    const nextButton = document.createElement("button");
    nextButton.className = "gallery-nav next";
    nextButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';

    // Create counter
    const counter = document.createElement("div");
    counter.className = "gallery-counter";

    // Add elements to gallery
    this.gallery.appendChild(prevButton);
    this.gallery.appendChild(nextButton);
    this.gallery.appendChild(counter);

    // Store references
    this.prevButton = prevButton;
    this.nextButton = nextButton;
    this.counter = counter;
  }

  initializeGallery() {
    // Hide all slides except the first one
    this.slides.forEach((slide, index) => {
      slide.style.display = index === 0 ? "block" : "none";
      slide.style.opacity = index === 0 ? "1" : "0";
    });

    this.updateCounter();
  }

  updateCounter() {
    this.counter.textContent = `${this.currentIndex + 1} / ${this.totalSlides}`;
  }

  goToSlide(index) {
    // Hide current slide
    this.slides[this.currentIndex].style.opacity = "0";
    setTimeout(() => {
      this.slides[this.currentIndex].style.display = "none";

      // Show new slide
      const nextSlide = this.slides[index];
      nextSlide.style.display = "block";
      setTimeout(() => {
        nextSlide.style.opacity = "1";
      }, 50);

      this.currentIndex = index;
      this.updateCounter();
    }, 300);
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }

  previousSlide() {
    const prevIndex =
      (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
  }

  addEventListeners() {
    // Navigation buttons
    this.prevButton.addEventListener("click", () => this.previousSlide());
    this.nextButton.addEventListener("click", () => this.nextSlide());

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.previousSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    // Touch events
    let touchStartX = 0;
    let touchEndX = 0;

    this.gallery.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      false
    );

    this.gallery.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      },
      false
    );

    // Handle swipe
    this.handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.previousSlide();
        }
      }
    };
  }
}

// Initialize all galleries on page load
document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach((gallery) => new GallerySlider(gallery));
});
