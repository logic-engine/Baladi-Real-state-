// PRELOADER
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  }, 1000);
});

// STICKY NAVBAR
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'white';
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    nav.style.background = 'white';
  }
});

// SMOOTH SCROLL
document.querySelectorAll('.nav-link, .btn-primary, .btn-outline, .call-btn, .banner-btn').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks')?.classList.remove('active');
      }
    }
  });
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
  });
}

// PROJECTS DATA
const projects = [
  { 
    name: "Hayat Tower", 
    location: "Hyderabad", 
    price: "Call for Price", 
    installment: "Easy Installments Available",
    img: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&w=400",
    desc: "Mixed-use building with commercial shops and luxury apartments. 1st & 2nd Floor Commercial, Upper Floors Residential. 3 Bed & 4 Bed English Style Duplex available."
  },
  { 
    name: "Hayat English Residency", 
    location: "Hyderabad", 
    price: "Call for Price", 
    installment: "Flexible Payment Plan",
    img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&w=400",
    desc: "Premium English style residential project with modern amenities. Spacious apartments with elegant finishing."
  }
];

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projects.map(project => `
    <div class="project-card" data-name="${project.name}" data-location="${project.location}" data-price="${project.price}" data-installment="${project.installment}" data-desc="${project.desc}" data-img="${project.img}">
      <div class="project-img" style="background-image: url('${project.img}');"></div>
      <div class="project-info">
        <h3>${project.name}</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${project.location}</p>
        <div class="project-price">${project.price}</div>
        <p><i class="fas fa-calendar-alt"></i> ${project.installment}</p>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const modal = document.getElementById('projectModal');
      document.getElementById('modalBody').innerHTML = `
        <h2 style="color:#c9a03d">${card.dataset.name}</h2>
        <img src="${card.dataset.img}" style="width:100%; border-radius:12px; margin:15px 0;">
        <p><strong>Location:</strong> ${card.dataset.location}</p>
        <p><strong>Price:</strong> ${card.dataset.price}</p>
        <p><strong>Installment:</strong> ${card.dataset.installment}</p>
        <p><strong>Description:</strong> ${card.dataset.desc}</p>
        <a href="#contact" class="btn-primary" style="display:inline-block; margin-top:15px;">Contact for Details</a>
      `;
      modal.style.display = 'flex';
    });
  });
}

// SIZE SELECTOR FOR APARTMENTS
function setupSizeSelector() {
  // 3 Bed Size Selector
  const sizeBtns3Bed = document.querySelectorAll('#sizeSelector3Bed .size-btn');
  sizeBtns3Bed.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns3Bed.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.dataset.size;
      const infoDiv = document.getElementById('info3Bed');
      if (size === '1457') {
        infoDiv.innerHTML = `<p><strong>Price:</strong> Call for Price</p><p><strong>Installment:</strong> Easy Plans Available</p>`;
      } else if (size === '1800') {
        infoDiv.innerHTML = `<p><strong>Price:</strong> Call for Price</p><p><strong>Installment:</strong> Flexible Installments</p>`;
      } else {
        infoDiv.innerHTML = `<p><strong>Price:</strong> Call for Price</p><p><strong>Installment:</strong> Premium Plan Available</p>`;
      }
    });
  });
  
  // 4 Bed Size Selector
  const sizeBtns4Bed = document.querySelectorAll('#sizeSelector4Bed .size-btn');
  sizeBtns4Bed.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns4Bed.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const size = btn.dataset.size;
      const infoDiv = document.getElementById('info4Bed');
      if (size === '1800') {
        infoDiv.innerHTML = `<p><strong>Price:</strong> Call for Price</p><p><strong>Installment:</strong> Duplex Special Plan</p>`;
      } else {
        infoDiv.innerHTML = `<p><strong>Price:</strong> Call for Price</p><p><strong>Installment:</strong> Premium Duplex Plan</p>`;
      }
    });
  });
}

// PROJECT GALLERY
const galleryImages = [
  "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&w=400",
  "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&w=400",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=400",
  "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&w=400"
];

function renderGallery() {
  const galleryGrid = document.getElementById('projectGallery');
  if (!galleryGrid) return;
  galleryGrid.innerHTML = galleryImages.map(img => `
    <div class="gallery-img-card" style="background-image: url('${img}');" onclick="window.open('${img}', '_blank')"></div>
  `).join('');
}

// PROPERTY LISTINGS DATA
const properties = [
  { name: "Residential Plot", category: "Plots", location: "Naseem Nagar", price: "PKR 35 Lakh", img: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&w=400" },
  { name: "2 Bed Apartment", category: "Apartments", location: "Hayat Tower", price: "PKR 85 Lakh", img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&w=400" },
  { name: "Commercial Shop", category: "Commercial", location: "Hayat Tower 1st Floor", price: "PKR 1.2 Crore", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=400" },
  { name: "3 Bed Apartment", category: "Apartments", location: "Hayat English Residency", price: "PKR 1.1 Crore", img: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&w=400" },
  { name: "Corner Plot", category: "Plots", location: "Qasimabad", price: "PKR 55 Lakh", img: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&w=400" }
];

function renderProperties(filter = "all") {
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;
  const filtered = filter === "all" ? properties : properties.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(prop => `
    <div class="property-card">
      <div class="property-img" style="background-image: url('${prop.img}');"></div>
      <div class="property-info">
        <h4>${prop.name}</h4>
        <p><i class="fas fa-map-marker-alt"></i> ${prop.location}</p>
        <div class="property-price">${prop.price}</div>
        <button class="contact-property" onclick="window.location.href='#contact'">Contact for Details</button>
      </div>
    </div>
  `).join('');
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProperties(btn.dataset.filter);
  });
});

// CARS DATA
const cars = [
  { name: "Toyota Corolla 2020", price: "PKR 45 Lakh", img: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&w=400" },
  { name: "Honda Civic 2019", price: "PKR 52 Lakh", img: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&w=400" },
  { name: "Suzuki Alto 2022", price: "PKR 28 Lakh", img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&w=400" }
];

function renderCars() {
  const grid = document.getElementById('carsGrid');
  if (!grid) return;
  grid.innerHTML = cars.map(car => `
    <div class="car-card">
      <div class="car-img" style="background-image: url('${car.img}');"></div>
      <div class="car-info">
        <h4>${car.name}</h4>
        <div class="car-price">${car.price}</div>
        <button class="contact-property" onclick="window.location.href='#contact'">Call Now</button>
      </div>
    </div>
  `).join('');
}

// INVESTMENT CALCULATOR
const calculateBtn = document.getElementById('calculateBtn');
if (calculateBtn) {
  calculateBtn.addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('investmentAmount').value);
    const roi = parseFloat(document.getElementById('roiPercent').value);
    if (isNaN(amount) || isNaN(roi)) return;
    const returnAmount = (amount * roi) / 100;
    const totalValue = amount + returnAmount;
    document.getElementById('returnAmount').innerText = returnAmount.toLocaleString();
    document.getElementById('totalValue').innerText = totalValue.toLocaleString();
  });
  // Trigger initial calculation
  calculateBtn.click();
}

// TESTIMONIALS SLIDER
let currentTesti = 0;
const testimonialsContainer = document.getElementById('testimonialsContainer');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevTesti = document.getElementById('prevTesti');
const nextTesti = document.getElementById('nextTesti');

function updateTestiSlider() {
  if (testimonialsContainer) {
    testimonialsContainer.style.transform = `translateX(-${currentTesti * 100}%)`;
  }
}
if (nextTesti) {
  nextTesti.addEventListener('click', () => {
    currentTesti = (currentTesti + 1) % testimonialCards.length;
    updateTestiSlider();
  });
}
if (prevTesti) {
  prevTesti.addEventListener('click', () => {
    currentTesti = (currentTesti - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestiSlider();
  });
}

// CONTACT FORM TO WHATSAPP
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const phone = document.getElementById('contactPhone').value;
    const interest = document.getElementById('interestType').value;
    const message = document.getElementById('contactMessage').value;
    const whatsappMsg = `Hello Baladi Real Estate! I need more information.%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Interested In:* ${interest}%0A*Message:* ${message}`;
    window.open(`https://wa.me/923153661893?text=${whatsappMsg}`, '_blank');
  });
}

// MODAL CLOSE
document.querySelector('.close-modal')?.addEventListener('click', () => {
  document.getElementById('projectModal').style.display = 'none';
});
window.onclick = (e) => {
  if (e.target === document.getElementById('projectModal')) {
    document.getElementById('projectModal').style.display = 'none';
  }
};

// SCROLL ANIMATIONS
const faders = document.querySelectorAll('.fade-up, .fade-right, .fade-left');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('appear');
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Initialize all renders
renderProjects();
renderGallery();
renderProperties();
renderCars();
setupSizeSelector();
