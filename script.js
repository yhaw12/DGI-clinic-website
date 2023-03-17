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


let bannerImage = document.querySelector('#currentimg');
let currentIndex = 0

let imagesArray = [
    "images/pexels-pix (2).jpg",
    "images/pexels-pix (3).jpg",
]


function changeSlider(){
    currentIndex =+1
    if (bannerImage > imagesArray.length){
        currentIndex = 0
    }

    bannerImage.src = imagesArray[currentIndex];
};

setInterval(changeSlider(), 1000);

// select the video

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


