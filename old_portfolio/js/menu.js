// Select the whole mobile navigation bar list
var mobileNavBar = document.querySelector(".nav-mobile ul");

// Select the hamburger button
var hamburgerButton = document.querySelector("#ham");

// Define the mobile navigation bar's style element
var inlineStyle = mobileNavBar.style;

// If the mobile menu is hidden, reveal it. If it is showing, hide it.
function revealMenu() {
  if (inlineStyle.display === "none") {
    inlineStyle.display = "block";
  } else {
    inlineStyle.display = "none";
  }
}

// Clicking on the hamburger hamburger button either reveals or hides the mobile navigation bar
hamburgerButton.onclick = revealMenu;
