
// let pagesHeader = document.getElementById('pages-header');

// PageHeaders===========
// pageFooters============
// let pagesFooter = document.querySelector('.pages-footer');
async function loadContent() {
    try {
      // Load the index.html page
      const response = await fetch('index.html');
      const data = await response.text();
  
      // Extract the head content and inject it into the current page
    //   const headDoc = new DOMParser().parseFromString(data, 'text/html');
    //   const headElement = headDoc.querySelector('#head');
    //   const headDocElContent = headElement.innerHTML;
    //   document.querySelector('.about-head').innerHTML = headDocElContent;
  
      // Extract the header content and inject it into the current page
      const htmlDoc = new DOMParser().parseFromString(data, 'text/html');
      const element = htmlDoc.querySelector('#header');
      const elementContent = element.innerHTML;
      const pagesHeader = document.getElementById('pages-header');
      pagesHeader.innerHTML = elementContent;
  
      // Extract the footer content and inject it into the current page
      const footerDoc = new DOMParser().parseFromString(data, 'text/html');
      const footerElement = footerDoc.querySelector('.ft');
      const footerElementContent = footerElement.innerHTML;
      const pagesFooter = document.querySelector('.pages-footer');
      pagesFooter.innerHTML = footerElementContent;
  
    } catch (error) {
      console.log(error);
    }
  }
  
  loadContent();
  


  