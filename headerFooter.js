let pagesHeader = document.getElementById('pages-header');


// PageHeaders===========
fetch('index.html')
.then(res=>res.text())
.then(data=>{
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');
    const element = htmlDoc.querySelector('#header');
    const elementContent = element.innerHTML;

    // aboutPage Header
    pagesHeader.innerHTML =elementContent;   
})
.catch(error=>console.log(error))



// pageFooters============
let pagesFooter = document.querySelector('.pages-footer');

fetch('index.html')
.then(res=>res.text())
.then(data=>{
    const footerParser =new DOMParser();
    const footerDoc = footerParser.parseFromString(data, 'text/html');
    const footerElement =footerDoc.querySelector('.ft');
    const footerElementContent = footerElement.innerHTML;

    pagesFooter.innerHTML = footerElementContent;
    
})
.catch(error=>console.log(error))
