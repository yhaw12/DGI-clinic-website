
// header
window.addEventListener('scroll', ()=>{
    document.querySelector('.top').classList.toggle('active');
    document.querySelector('.down').classList.toggle('active');
});


// menu side section
let menuList = document.querySelector(".list");
let bars = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-close');


bars.addEventListener('click', ()=>{
    menuList.classList.toggle('show'); 
    bars.style.display = 'none';
    close.style.display = 'block'
    bars.style.transition = 'all 300ms ease'
});

close.onclick =()=>{
    menuList.classList.remove('show')
    bars.style.display = 'block'
    close.style.display = 'none'
    close.style.transition = 'all 300ms ease'
}


// select the displayed image

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.querySelectorAll(".media img");
//   var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].classList.add("active");
//   dots[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 5000);
}

// select the video
let bannerImage = document.querySelector('.bannerImages');
let videoBtn = document.getElementById('videoPlay');
let bannerVideo = document.getElementById('backVideo');

videoBtn.addEventListener('click', ()=>{
    bannerVideo.style.display = 'block';
    bannerImage.style.display = 'none';  
    closeBtn.style.display = 'block'
    videoBtn.style.display = 'none'
    videoBtn.style.transition = 'all 300ms ease'
});

let closeBtn = document.querySelector('.fa-circle-pause');

closeBtn.addEventListener("click", ()=>{
    bannerImage.style.display = 'block';
    bannerVideo.style.display = 'none';
    videoBtn.style.display ='block'
    closeBtn.style.display = 'none';
    closeBtn.style.transition = 'all 300ms ease';
})

// footer 

let footerDate = document.querySelector(".date");
let footerBtn = document.querySelector(".fa-arrow-up");

const date = new Date().getFullYear();
footerDate.textContent = date;

footerBtn.addEventListener('click', ()=>{
     window.scrollTo({
        top: 0,
        behavior: "smooth"
    })    
});

// popup................................
const popup = document.querySelector('.popup');
const popBtn = document.querySelector('#pop-btn');

let timeoutId;

window.addEventListener('load', () => {
    popup.style.display = 'flex';
});

// Function to close the popup
function closePopup() {
  popup.style.display = 'none';
}

// Close the popup after 5 seconds of inactivity
timeoutId = setTimeout(closePopup, 5000);

// Reset the timeout if there is any activity
function resetTimeout() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(closePopup, 5000);
}

document.addEventListener('mousemove', resetTimeout);
document.addEventListener('keydown', resetTimeout);

// Close the popup when the button is clicked
popBtn.addEventListener('click', closePopup);


// contact page
const form = document.getElementById('contact-form');
const status = document.getElementById('status');
console.log(status)


form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	fetch(form.getAttribute('action'), {
		method: 'POST',
		body: new URLSearchParams(formData)
	})
	.then(response => {
		if (response.ok) {
			form.reset();
			status.innerHTML = 'Thank you for your message!';
		} else {
			status.innerHTML = 'Oops! There was a problem.';
		}
	})
	.catch(error => {
		status.innerHTML = 'Oops! There was a problem.';
	});
});

