
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert(`Thank you for your message. We'll get back to you soon. Contact us through our social media handles for a faster response.`);
        contactForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prevTestimonial');
    const nextButton = document.getElementById('nextTestimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    nextButton.addEventListener('click', nextTestimonial);
    prevButton.addEventListener('click', prevTestimonial);

    // Show the first testimonial initially
    showTestimonial(currentTestimonial);
});