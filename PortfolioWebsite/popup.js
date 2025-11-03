document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var closeButton = document.getElementsByClassName("close")[0];

    var images = document.querySelectorAll('.project-image');

    // iterate through each image
    images.forEach(function (image) {
        image.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // close modal when close button is clicked
    closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
 