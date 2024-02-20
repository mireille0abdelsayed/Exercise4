document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.pageX - 20 + "px";
    cursor.style.top = e.pageY - 20 + "px";
  });

  const galleryItems = document.querySelectorAll(".image-container .photo");
  const closeButton = document.getElementById("close");
  const modalImage = document.getElementById("modalImage");
  const textLinks = document.querySelectorAll(".image-container .image-text");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      cursor.classList.add("active");
      cursor.innerHTML = "view";
    });

    item.addEventListener("mouseout", function () {
      cursor.classList.remove("active");
      cursor.innerHTML = "";
    });
  });

  textLinks.forEach((item) => {
    item.addEventListener("mouseover", function () {
      cursor.style.mixBlendMode = "multiply";
    });

    item.addEventListener("mouseout", function () {
      cursor.style.mixBlendMode = "normal";
    });
  });

  closeButton.addEventListener("mouseover", function () {
    cursor.style.mixBlendMode = "difference";
  });

  closeButton.addEventListener("mouseout", function () {
    cursor.style.mixBlendMode = "normal";
  });

  modalImage.addEventListener("mouseover", function () {
    cursor.innerHTML = "View Link";
    bodyTag.style.cursor = "none";
  });

  modalImage.addEventListener("mouseout", function () {
    cursor.innerHTML = "";
  });
});

function openModal(imageSrc, targetLink) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const link = document.getElementById("target-link");
  link.style.cursor = "none";

  modal.style.display = "flex";
  modalImage.src = imageSrc;

  if (imageSrc == "image1.jpg") {
    link.href = "https://visit-gem.com/en/home";
  }

  if (imageSrc == "image2.jpg") {
    link.href = "https://visit-gem.com/en/children";
  }

  if (imageSrc == "image3.jpg") {
    link.href = "https://visit-gem.com/en/tut";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
