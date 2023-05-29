var value = 0;
value = parseInt(localStorage.getItem("myValue"));
function goToPage(nextPage)
{
	localStorage.setItem("myValue", value);
	window.location.href = nextPage;
	location.replace(nextPage);
	
}

document.getElementById("button1").addEventListener("click", function() {
  growButton("button1");
});

document.getElementById("button2").addEventListener("click", function() {
  growButton("button2");
});

document.getElementById("button3").addEventListener("click", function() {
  growButton("button3");
});

document.getElementById("button4").addEventListener("click", function() {
  growButton("button4");
});

function growButton(buttonId) {
  var button = document.getElementById(buttonId);
  var fontSize = parseInt(window.getComputedStyle(button).fontSize);
  var newFontSize = fontSize + 2;
  button.style.fontSize = newFontSize + "px";
}

function sendEmail() {
     var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
      var subject = "Hindi Parichay Contact Form";
      var errorElement = document.getElementById("error"); 
      
      if (email === "" || message === "") {
        errorElement.textContent = "Please enter your email and/or message.";
      } else {
        errorElement.textContent = "";
        var mailtoLink = "mailto:sh.yogita@yahoo.com" +
                         "?subject=" + encodeURIComponent(subject) +
                         "&body=" + encodeURIComponent(message + "\n\nFrom: " + email);
      
        window.location.href = mailtoLink;
      }
}

const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
	alert("HELLO");
    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }

      slides.forEach(slide => {
        slide.style.display = 'none';
      });

      slides[slideIndex].style.display = 'block';
      currentSlide = slideIndex;
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    showSlide(currentSlide);

    // Add event listeners to the arrow elements
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');

    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);
