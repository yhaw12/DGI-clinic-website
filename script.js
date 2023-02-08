// header

window.addEventListener('scroll', ()=>{
    document.querySelector('.header').classList.toggle('active');
});


let bars = document.querySelector('.fa-bars');

bars.addEventListener('click', ()=>{
    document.querySelector('.list').classList.toggle('show');
    bars.classList.add('fa-times');  
    
    document.querySelector('.fa-times').addEventListener('click', ()=>{
        bars.classList.replace('fa-times', 'fa-bars')   
    });
})

// Image Slider

// let currentImg = document.getElementById('currentimg');

// let imgArray = [
//     "pexels-pix (3).jpg",
//     "images/pexels-pix (2).jpg",
//     "images/pexels-pix (3).jpg",
//     "images/pexels-pix (1).jpg",
//     "images/watch.jpg",
// ];

// let currentIndex = 0

// setInterval(() => {
//     currentIndex++    
//     if (currentImg >= imgArray.length){
//         currentIndex = 0
//     }
   
//     currentImg.src = imgArray[currentIndex];
// }, 1000);