
document.addEventListener("DOMContentLoaded", function() {
    const images = ["project1.jpg", "project2.jpg", "project3.jpg"];
    let currentImageIndex = 0;

    const sliderImage = document.getElementById("slider-image");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    function updateImage() {
        sliderImage.src = images[currentImageIndex];
    }

    prevButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextButton.addEventListener("click", function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    });

    // Prototype-based inheritance
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function() {
        console.log("Hello, my name is " + this.name);
    };

    function Developer(name, language) {
        Person.call(this, name);
        this.language = language;
    }

    Developer.prototype = Object.create(Person.prototype);
    Developer.prototype.constructor = Developer;

    Developer.prototype.code = function() {
        console.log(this.name + " is coding in " + this.language);
    };

    const dev = new Developer("John Doe", "JavaScript");
    dev.greet();
    dev.code();
});
