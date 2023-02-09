// header

window.addEventListener('scroll', ()=>{
    document.querySelector('#header').classList.toggle('active');
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



// footer Date

let footerDate = document.querySelector(".date");

const date = new Date().getFullYear();

footerDate.textContent = date;