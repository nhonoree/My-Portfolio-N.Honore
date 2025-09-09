// ====== MOBILE MENU ======
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// ====== TAB FUNCTIONALITY ======
function opentab(tabname) {
  let tabs = document.querySelectorAll(".tab-contents");
  let links = document.querySelectorAll(".tab-links button");

  tabs.forEach(tab => tab.classList.remove("active"));
  links.forEach(link => link.classList.remove("active"));

  document.getElementById(tabname).classList.add("active");
  event.currentTarget.classList.add("active");
}

// ====== NAV HIGHLIGHT ON SCROLL ======
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 120;

  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// ====== CONTACT FORM (FormSubmit API) ======
  // Initialize phone input with flags
  const phoneInput = document.querySelector("#phone");
  const iti = intlTelInput(phoneInput, {
    initialCountry: "auto",
    geoIpLookup: function(success, failure) {
      fetch("https://ipinfo.io/json?token=<YOUR_TOKEN>")
        .then(resp => resp.json())
        .then(resp => success(resp.country))
        .catch(() => success("US"));
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
  });

  // Form Submission
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Validation
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let service = document.getElementById("service").value;

    if(!name || !email || !service){
      alert("Please fill all required fields!");
      return;
    }

    // Show success message
    document.getElementById("formSuccess").style.display = "block";

    // Reset form
    this.reset();
  });
