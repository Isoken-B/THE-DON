// Navigation Toggle
document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
})

// // Highlight Active Link on Scroll
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("nav a");
// window.addEventListener("scroll", function() {
//     let current = "";
//     for (let i = 0; i <= sections.length -1, i++) {
//         console.log(sections{i});
//     }
// });

// Dynamic Project Gallery
const projects = [
    {
        title: "portfolio site",
        img: "/images/portfolio.jpg",
        link: "#",
        cat: "web"
    },
    {
        title: "Mobile App",
        img: "/images/app.jpg",
        link: "#",
        cat: "app"
    },
    {
        title: "portfolio site 02",
        img: "/images/portfolio02.jpg",
        link: "#",
        cat: "web"
    },
    {
        title: "Mobile App 02",
        img: "/images/app02.jpg",
        link: "#",
        cat: "web"
    }
]
const gallery = document.getElementById("project-gallery");
function displayProjects(f) {
    gallery.innerHTML = "";
    projects.filter(p => f === "all" || p.cat === f).forEach(p => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${p.img}" alt="${p.title}"><h3>${p.title}</h3>`;
        gallery.appendChild(card);
    })
    localStorage.setItem("lastCategory", f);
}
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => displayProjects(btn.dataset.cat))
    displayProjects(localStorage.getItem("lastCategory") || "all");
})

// 
const toggleBtn = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Testimonials Slider
const testimonials = [
    "Great work!",
    "Amazing developer",
    "Highly recommend",
    "Professional and efficient",
    "Fantastic experience",
    "Very satisfied with the results.",
    "Exceptional quality!"
]

let index = 0;
const testP = document.getElementById("testimonial");
function showtestimonial(i) {
    testP.textContent = testimonials[i];
}
showtestimonial(index);
document.getElementById("next-test").addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showtestimonial(index);
})
document.getElementById("prev-test").addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showtestimonial(index);
})
setInterval(() => {
    index = (index + 1) % testimonials.length;
    showtestimonial(index);
}, 5000);

// Form Validation
document.getElementById("contact-form").addEventListener("submit", e => {
    let valid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("name-error").textContent = name ? "" : "Name is required";
    document.getElementById("email-error").textContent = email.includes("@") ? "" : "Invalid email";
    document.getElementById("message-error").textContent = message ? "" : "Message cannot be empty";

    if (!name || !email.includes("@") || !message) valid = false;
    if (!valid) e.preventDefault();

    if (!e.defaultPrevented) {
        alert("Message sent successfully");
    }
});

