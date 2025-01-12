// Scroll to About Us section and animate it
document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    const aboutSection = document.querySelector('#about');

    // Smooth scroll to the About Us section
    aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });

    // Trigger animation
    setTimeout(() => {
        aboutSection.classList.add('swipe'); // Add animation class
    }, 300); // Delay for scroll animation

    // Remove animation class after it's complete
    setTimeout(() => {
        aboutSection.classList.remove('swipe');
    }, 800); // Duration of swipe animation + small buffer
});
function gotoq1(){
    setTimeout(function() {
        window.location.href = '../question1/question1.html'; // Replace with the actual URL of the next page
    }, 0);

}

// Add animation when the About Us section scrolls into view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('swipe'); // Add animation class when in view
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the element is visible
    }
);

// Observe the About Us section
observer.observe(document.querySelector('#about'));
function submitsuccess() {
    // Get form inputs
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Display success message
        alert("Thank you, " + name + "! Your message has been sent successfully.");

        // Optionally, you can clear the form after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        // If fields are missing, show an error message
        alert("Please fill in all fields before submitting.");
    }
}
// Scroll animation for Contact section when in view
window.addEventListener('scroll', function () {
    const contactSection = document.getElementById('contact');
    const contactPosition = contactSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (contactPosition < screenHeight - 100) {
        contactSection.classList.add('visible');
    }
});

// Optional: Function to handle form submission
function submitsuccess() {
    alert("Message submitted successfully!");
}


