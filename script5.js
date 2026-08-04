const home = document.querySelector("#home");

const content = document.querySelector(".content");

const homeLink = document.querySelector(".home-link");

const projectLinks = document.querySelectorAll("[data-project]");

const projects = document.querySelectorAll("[data-content]");

const imageModal = document.getElementById("image-modal");
const imageModalImg = document.getElementById("image-modal-img");
const imageModalClose = document.querySelector(".image-modal-close");

function openImageModal(src, alt) {

    if (!imageModal || !imageModalImg) return;

    imageModalImg.src = src;
    imageModalImg.alt = alt || "";
    imageModal.hidden = false;
    document.body.style.overflow = "hidden";

}

function closeImageModal() {

    if (!imageModal) return;

    imageModal.hidden = true;
    document.body.style.overflow = "";

}

if (imageModal) {

    imageModal.addEventListener("click", event => {

        if (event.target === imageModal) {
            closeImageModal();
        }

    });

}

if (imageModalClose) {

    imageModalClose.addEventListener("click", closeImageModal);

}

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeImageModal();
    }

});

const photoImages = document.querySelectorAll("[data-content='photo'] img");

photoImages.forEach(img => {

    img.addEventListener("click", () => {

        openImageModal(img.currentSrc || img.src, img.alt);

    });

});

function showHome() {

    home.hidden = false;

    projects.forEach(project => {

        project.hidden = true;

    });

    content.scrollIntoView({ behavior: "smooth", block: "start" });

}

function showProject(projectName) {

    home.hidden = true;

    projects.forEach(project => {

        project.hidden = true;

    });

    const target = document.querySelector(
        `[data-content="${projectName}"]`
    );

    if (target) {

        target.hidden = false;

        content.scrollIntoView({ behavior: "smooth", block: "start" });

    }

}

projectLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        showProject(link.dataset.project);

    });

});

homeLink.addEventListener("click", event => {

    event.preventDefault();

    showHome();

});

/* videclip */

const cover = document.getElementById("coiffeur-video");

if (cover) {

    cover.addEventListener("click", () => {

        cover.outerHTML = `
            <iframe
                src="https://www.youtube.com/embed/uM_IBLBHyKA?autoplay=1&rel=0"
                title="Coiffeur"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const amistadCover = document.getElementById("amistad-video");

if (amistadCover) {

    amistadCover.addEventListener("click", () => {

        amistadCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/1214400960?autoplay=1&title=0&byline=0&portrait=0"
                title="Un ensayo sobre la amistad y el reencuentro"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const luisLeeCover = document.getElementById("luis-lee-video");

if (luisLeeCover) {

    luisLeeCover.addEventListener("click", () => {

        luisLeeCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/1214398288?autoplay=1&title=0&byline=0&portrait=0"
                title="Luis lee traduce un fragmento de Ectoplasm Feminism"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const incendioCover = document.getElementById("incendio-video");

if (incendioCover) {

    incendioCover.addEventListener("click", () => {

        incendioCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/1215571566?autoplay=1&title=0&byline=0&portrait=0"
                title="Incendio en Las Tuzas"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const orillasCover = document.getElementById("orillas-video");

if (orillasCover) {

    orillasCover.addEventListener("click", () => {

        orillasCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/1214403138?autoplay=1&title=0&byline=0&portrait=0"
                title="Todo es orilla ya no hay litoral"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const surfCover = document.getElementById("surf-video");

if (surfCover) {

    surfCover.addEventListener("click", () => {

        surfCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/1215573055?autoplay=1&title=0&byline=0&portrait=0"
                title="Surf San Martín"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const ojoPezCover = document.getElementById("ojo-pez-video");

if (ojoPezCover) {

    ojoPezCover.addEventListener("click", () => {

        ojoPezCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/1214395615?autoplay=1&title=0&byline=0&portrait=0"
                title="Ojo de Pez"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const murallaCover = document.getElementById("muralla-video");

if (murallaCover) {

    murallaCover.addEventListener("click", () => {

        murallaCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/1214395240?autoplay=1&title=0&byline=0&portrait=0"
                title="La gran muralla"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const eclipseCover = document.getElementById("eclipse-video");

if (eclipseCover) {

    eclipseCover.addEventListener("click", () => {

        eclipseCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/1214384004?autoplay=1&title=0&byline=0&portrait=0"
                title="Eclipse"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const comaCover = document.getElementById("coma-video");

if (comaCover) {

    comaCover.addEventListener("click", () => {

        comaCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/507077354?autoplay=1&title=0&byline=0&portrait=0"
                title="El coma más largo del mundo"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}

const malDeAlturaCover = document.getElementById("mal-de-altura-video");

if (malDeAlturaCover) {

    malDeAlturaCover.addEventListener("click", () => {

        malDeAlturaCover.outerHTML = `
            <iframe
                src="https://player.vimeo.com/video/506841567?autoplay=1&title=0&byline=0&portrait=0"
                title="Mal de altura"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;

    });

}
