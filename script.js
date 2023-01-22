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
});

