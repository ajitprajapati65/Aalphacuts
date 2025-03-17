document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video-container");
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          }
      });
  }, { threshold: 0.3 });
  
  videos.forEach(video => {
      observer.observe(video);
  });
});