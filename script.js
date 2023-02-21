// header

window.addEventListener('scroll', ()=>{
    document.querySelector('.top').classList.toggle('active');
    document.querySelector('.down').classList.toggle('active');
});


let bars = document.querySelector('.fa-bars');

bars.addEventListener('click', ()=>{
    document.querySelector('.list').classList.toggle('show');
    bars.classList.add('fa-times');  
    
    document.querySelector('.fa-times').addEventListener('click', ()=>{
        bars.classList.replace('fa-times', 'fa-bars')   
    });
})



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
    videoBtn.innerHTML = '<i class="fas fa-close"></i>';

    let imageBtn = document.querySelector('.fa-close');

    imageBtn.addEventListener("click", ()=>{
        bannerImage.style.display = 'block';
        bannerVideo.style.display = 'none';
    })
});






// footer 

let footerDate = document.querySelector(".date");
let footerBtn = document.querySelector(".fa-forward");

const date = new Date().getFullYear();
footerDate.textContent = date;

footerBtn.addEventListener('click', ()=>{
     window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    
});


