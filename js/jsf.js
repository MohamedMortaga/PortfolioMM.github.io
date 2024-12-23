document.querySelectorAll(".carousel-item").forEach((item) => {
  const showModal = function () {
    const modalTitle = this.getAttribute("data-title");
    const modalBody = this.getAttribute("data-body");
    const modalImageSrc = this.querySelector("img").getAttribute("src");

    document.getElementById("exampleModalLabel").textContent = modalTitle;
    document.querySelector(".modal-body img").setAttribute("src", modalImageSrc);
    document.querySelector(".modal-body p").textContent = modalBody;
  };

  // Add event listeners for both click and touchend
  item.addEventListener("click", showModal);
  item.addEventListener("touchend", showModal);
});
