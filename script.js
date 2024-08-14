document.addEventListener('DOMContentLoaded', function() {
    function animateNumber(element) {
        let endValue = parseFloat(element.getAttribute('data-number'));
        let unit = element.getAttribute('data-unit') || ''; // Get the unit from data attribute
        let currentValue = 0;
        let interval = setInterval(() => {
            currentValue += endValue / 100;
            if (currentValue >= endValue) {
                currentValue = endValue;
                clearInterval(interval);
            }
            element.textContent = Math.floor(currentValue) + unit; // Append the unit
        }, 20);
    }

    const factsNumbers = document.querySelectorAll('.fact-number');
    const sectionOffsetTop = document.querySelector('.facts-figures-section').offsetTop;

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > sectionOffsetTop) {
            factsNumbers.forEach(element => {
                animateNumber(element);
            });
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
/* For Smooth Scrolling */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});