document.querySelectorAll(".carousel-item").forEach((item) => {
  item.addEventListener("click", function () {
    const modalTitle = this.getAttribute("data-title");
    const modalBody = this.getAttribute("data-body");
    document.getElementById("exampleModalLabel").textContent = modalTitle;
    document.querySelector(".modal-body p").textContent = modalBody;
  });
});

