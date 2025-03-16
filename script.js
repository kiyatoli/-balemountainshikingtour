document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".contentBx ul li");
    const titleText = document.querySelector(".titleText");
    const imgBox = document.querySelector(".imgBx img");
    const descriptionBox = document.querySelector(".image-description"); // Add reference to the description element
  
    // Add click event listeners to all list items
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Get new title, image source, and description from the clicked list item
        const newTitle = item.getAttribute("data-title");
        const newImage = item.getAttribute("data-image");
        const newDescription = item.getAttribute("data-description"); // Get description from data attribute
  
        // Update the title, image, and description dynamically
        titleText.textContent = newTitle;
        imgBox.src = newImage;
        imgBox.alt = newTitle;
        descriptionBox.textContent = newDescription; // Update description text
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");

    // Toggle submenu on click (for mobile)
    dropdown.addEventListener("click", function (e) {
        // Only prevent default behavior if clicking the parent link (not submenu links)
        if (e.target === this.querySelector("a")) {
            e.preventDefault(); // Prevent default only for the parent link
            this.classList.toggle("active");
            const submenu = this.querySelector(".submenu");
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        }
    });

    // Close submenu when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            dropdown.classList.remove("active");
            const submenu = dropdown.querySelector(".submenu");
            submenu.style.display = "none";
        }
    });
});



document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let googleScriptURL = "YOUR_DEPLOYED_WEB_APP_URL_HERE";

  fetch(googleScriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, message: message })
  })
  .then(response => response.text())
  .then(data => {
      document.getElementById("successMessage").classList.remove("hidden");
      document.getElementById("contactForm").reset();
  })
  .catch(error => console.error("Error!", error));
});

