document.addEventListener('DOMContentLoaded', () => {
    const fadeItems = document.querySelectorAll('.fade-item');
    let current = 0;
    
    function fadeOut(item, callback) {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.display = 'none';
            callback();
        }, 1000); // Match the CSS transition duration
    }

    function fadeIn(item) {
        item.style.display = 'block';
        setTimeout(() => {
            item.style.opacity = 1;
        }, 10); // Small delay to ensure the display change is rendered
    }

    function showNextItem() {
        fadeOut(fadeItems[current], () => {
            current = (current + 1) % fadeItems.length;
            fadeIn(fadeItems[current]);
        });
    }

    fadeIn(fadeItems[current]); // Initial fade-in
    setInterval(showNextItem, 3000); // Change every 3 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    const bannerItems = document.querySelectorAll(".home-banner-item");
    const roomBoxes = document.querySelectorAll(".room-box");

    function handleScroll() {
        const elements = [...bannerItems, ...roomBoxes]; // Combine both NodeLists into an array

        elements.forEach(item => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight - 100) { // Adjust this value for when the effect triggers
                item.classList.add("visible");
            }
        });
    }

    // Trigger the effect on scroll
    window.addEventListener("scroll", handleScroll);

    // Trigger the effect on page load in case some items are already in view
    handleScroll();
});




// Gallery Scroll
document.querySelectorAll('.room-gallery-wrapper').forEach(wrapper => {
    const gallery = wrapper.querySelector('.room-gallery');
    const leftBtn = wrapper.querySelector('.left-btn');
    const rightBtn = wrapper.querySelector('.right-btn');

    leftBtn.addEventListener('click', () => {
        gallery.scrollBy({ left: -gallery.clientWidth, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        gallery.scrollBy({ left: gallery.clientWidth, behavior: 'smooth' });
    });
});

// For room-scrollto
const downArrow = document.getElementById('down-arrow');
if (downArrow) {
    downArrow.addEventListener('click', function() {
        const roomSection = document.getElementById('room-scrollto');
        roomSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// For contact section
const downArrowContact = document.getElementById('down-arrow-contact');
if (downArrowContact) {
    downArrowContact.addEventListener('click', function() {
        console.log('Down arrow clicked'); // Debugging line
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// For about-scrollto
const downArrowAbout = document.getElementById('down-arrow-about');
if (downArrowAbout) {
    downArrowAbout.addEventListener('click', function() {
        console.log('Down arrow clicked'); // Debugging line
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

