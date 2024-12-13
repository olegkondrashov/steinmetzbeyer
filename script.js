const wrapper = document.querySelector(".slider-wrapper");
const images = document.querySelectorAll(".slider-wrapper img");
const prevBtn = document.querySelector(".prev-arrow");
const nextBtn = document.querySelector(".next-arrow");


const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});



//Zoom image in Materialien

// Elemente selektieren
//const galleryItems = document.querySelectorAll('.gallery-item img');
//const viewer = document.getElementById('image-viewer');
//const viewerImg = document.getElementById('viewer-img');
//const closeViewer = document.getElementById('close-viewer');

// Klick auf ein Bild in der Galerie
//galleryItems.forEach((img) => {
//    img.addEventListener('click', () => {
//        viewerImg.src = img.src; // Bildquelle setzen
//        viewer.style.display = 'flex'; // Vollbild aktivieren
//    });
//});

// Schließen der Vollbildansicht
//closeViewer.addEventListener('click', () => {
//    viewer.style.display = 'none'; // Vollbild schließen
//});

// Schließen bei Klick außerhalb des Bildes
//viewer.addEventListener('click', (e) => {
//    if (e.target !== viewerImg) {
//        viewer.style.display = 'none'; // Vollbild schließen
//    }
//});

//End Zoom image in Materialien



function createImageViewer(props) {
    const gallerySelector = props.gallerySelector || '.gallery-item img';
    const viewerSelector = props.viewerSelector || '#image-viewer';
    const viewerImgSelector = props.viewerImgSelector || '#viewer-img';
    const closeButtonSelector = props.closeButtonSelector || '#close-viewer';

    const galleryItems = document.querySelectorAll(gallerySelector);
    const viewer = document.querySelector(viewerSelector);
    const viewerImg = document.querySelector(viewerImgSelector);
    const closeViewer = document.querySelector(closeButtonSelector);

    if (!galleryItems.length || !viewer || !viewerImg || !closeViewer) {
        console.error('Invalid selectors provided to createImageViewer');
        return;
    }

    // Klick auf ein Bild in der Galerie
    galleryItems.forEach((img) => {
        img.addEventListener('click', () => {
            viewerImg.src = img.src; // Bildquelle setzen
            viewer.style.display = 'flex'; // Vollbild aktivieren
        });
    });

    // Schließen der Vollbildansicht
    closeViewer.addEventListener('click', () => {
        viewer.style.display = 'none'; // Vollbild schließen
    });

    // Schließen bei Klick außerhalb des Bildes
    viewer.addEventListener('click', (e) => {
        if (e.target !== viewerImg) {
            viewer.style.display = 'none'; // Vollbild schließen
        }
    });
}

createImageViewer({
    gallerySelector: '.gallery-item img', // Selektor für die Bilder der Galerie
    viewerSelector: '#image-viewer',        // Selektor für den Viewer
    viewerImgSelector: '#viewer-img',       // Selektor für das Bild im Viewer
    closeButtonSelector: '#close-viewer'    // Selektor für den Schließen-Button
});

createImageViewer({
    gallerySelector: '.image-container img', // Selektor für die Bilder der Galerie
    viewerSelector: '#image-viewer',        // Selektor für den Viewer
    viewerImgSelector: '#viewer-img',       // Selektor für das Bild im Viewer
    closeButtonSelector: '#close-viewer'    // Selektor für den Schließen-Button
});

createImageViewer({
    gallerySelector: '.section img', // Selektor für die Bilder der Galerie
    viewerSelector: '#image-viewer',        // Selektor für den Viewer
    viewerImgSelector: '#viewer-img',       // Selektor für das Bild im Viewer
    closeButtonSelector: '#close-viewer'    // Selektor für den Schließen-Button
});



