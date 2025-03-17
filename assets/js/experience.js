document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skill");
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.3 });
  skills.forEach(skill => {
      observer.observe(skill);
      skill.addEventListener("click", function () {
          alert(this.innerText + " - Clicked!");
          this.classList.add("active");
          setTimeout(() => this.classList.remove("active"), 500);
      });
  });
});