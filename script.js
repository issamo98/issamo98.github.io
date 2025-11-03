
  const fadeElements = document.querySelectorAll('.fade-up');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);



  const copyBtn = document.getElementById("copyEmail");
  const notif = document.getElementById("copyNotif");
  const email = "contact@builtbyissam.pro"; // Replace with your real email

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(email).then(() => {
      notif.classList.add("show");
      setTimeout(() => notif.classList.remove("show"), 2000);
    });
  });


  document.querySelector(".cta-btn").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth"
  });
});

document.querySelector(".about-btn").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});


const sliders = document.querySelectorAll('.project-image-slider');

sliders.forEach(slider => {
  const images = slider.querySelectorAll('img');
  let index = 0;

  images[index].classList.add('active');
  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 2500); // change every 2.5s
});


