const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav links info
let navLinks = document.getElementsByTagName("a");


// console.log(navLinks);

// console.log(navLinks[0]);

navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

let ctaH1 = document.querySelector("h1").textContent = siteContent["cta"]["h1"]; 
// ctaTextH1[0].textContent = siteContent["cta"]["h1"];

// console.log(document.querySelector("button"));

// button information
let ctaButton = document.querySelector("button").textContent = siteContent["cta"]["button"];

// cta image information
let ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute("src", siteContent["cta"]["img-src"]);

// top-content information
let topConTextConH4 = document.getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["features-h4"];
let topConTextConP = document.getElementsByTagName("p")[0].textContent = siteContent["main-content"]["features-content"];
let topConTextConAboutH4 = document.getElementsByTagName("h4")[1].textContent = siteContent["main-content"]["about-h4"];
let topConTextConAboutP = document.getElementsByTagName("p")[1].textContent = siteContent["main-content"]["about-content"];

// middle image source
let middleIMG = document.getElementById("middle-img");
middleIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// bottom-content infomation
// console.log(document.querySelectorAll(".text-content"));

let servicesConH4 = document.querySelectorAll(".text-content")[2].firstElementChild.textContent = siteContent["main-content"]["services-h4"];
let servicesConP = document.querySelectorAll(".text-content")[2].lastElementChild.textContent = siteContent["main-content"]["services-content"];
let productConH4 = document.querySelectorAll(".text-content")[3].firstElementChild.textContent = siteContent["main-content"]["product-h4"];
let productConP = document.querySelectorAll(".text-content")[3].lastElementChild.textContent = siteContent["main-content"]["product-content"];
let visionConH4 = document.querySelectorAll(".text-content")[4].firstElementChild.textContent = siteContent["main-content"]["vision-h4"];
let visionConP = document.querySelectorAll(".text-content")[4].lastElementChild.textContent = siteContent["main-content"]["vision-content"];

//contact question information
// console.log(document.querySelectorAll(".contact"));
let contactH4 = document.querySelectorAll(".contact")[0].firstElementChild.textContent = siteContent["contact"]["contact-h4"];
let contactAddress = document.querySelectorAll(".contact")[0].children[1].textContent = siteContent["contact"]["address"];
let contactPhone = document.querySelectorAll(".contact")[0].children[2].textContent = siteContent["contact"]["phone"];
let contactEmail = document.querySelectorAll(".contact")[0].children[3].textContent = siteContent["contact"]["email"];

//footer information
// console.log(document.getElementsByTagName("footer"));
let footer = document.getElementsByTagName("footer")[0].firstElementChild;
footer.textContent = siteContent["footer"]["copyright"];

let navLinksColorChanging = document.querySelectorAll("a");
navLinksColorChanging[0].style.color = "green";
navLinksColorChanging[1].style.color = "green";
navLinksColorChanging[2].style.color = "green";
navLinksColorChanging[3].style.color = "green";
navLinksColorChanging[4].style.color = "green";
navLinksColorChanging[5].style.color = "green";
console.log(navLinksColorChanging);
// navLinksColorChanging.style.color = "green";
