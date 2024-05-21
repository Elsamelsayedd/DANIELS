// animation type

var typed = new Typed(".auto-type",{
    strings: ["Delveloper", " Designer" , "Larry Daniels"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


// counter 1
function animateCounter(element, startValue, endValue, duration) {
    let startTime = null;

    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1); 
        const value = Math.floor(startValue + (endValue - startValue) * progress);
        element.textContent = value;

        if (elapsedTime < duration) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

const counterElement = document.getElementById('counter');
const targetElement = document.getElementById(counterElement.dataset.target); 
const startValue = 0;
const endValue = 850; 
const duration = 1000; 


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            animateCounter(counterElement, startValue, endValue, duration);
            observer.unobserve(entry.target); 
        }
    });
});


observer.observe(targetElement);


// counter 2


const counterElement2 = document.getElementById('counter-2');
const targetElement2 = document.getElementById(counterElement2.dataset.target); 
const startValue2 = 0;
const endValue2= 230; 
const duration2 = 1000; 


const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            animateCounter(counterElement2, startValue2, endValue2, duration2);
            observer.unobserve(entry.target); 
        }
    });
});


observer2.observe(targetElement2);

// counter 3



const counterElement3 = document.getElementById('counter-3');
const targetElement3 = document.getElementById(counterElement3.dataset.target); 
const startValue3 = 0;
const endValue3= 9450; 
const duration3 = 1000; 


const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            animateCounter(counterElement3, startValue3, endValue3, duration3);
            observer.unobserve(entry.target); 
        }
    });
});


observer3.observe(targetElement3);


// counter 4




const counterElement4 = document.getElementById('counter-4');
const targetElement4 = document.getElementById(counterElement4.dataset.target); 
const startValue4 = 0;
const endValue4= 780; 
const duration4 = 1000; 


const observer4 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            animateCounter(counterElement4, startValue4, endValue4, duration4);
            observer.unobserve(entry.target); 
        }
    });
});


observer4.observe(targetElement4);