// ======================================================
// ELEMENTOS
// ======================================================

const home = document.querySelector(".home");

const pages = document.querySelectorAll(".page");

const links = document.querySelectorAll("[data-project]");

const homeLink = document.querySelector(".home-link");


// ======================================================
// HOME
// ======================================================

showHome();

homeLink.addEventListener("click", (event) => {

    event.preventDefault();

    showHome();

});


// ======================================================
// NAVEGACIÓN
// ======================================================

links.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const project = link.dataset.project;

        showPage(project);

    });

});


// ======================================================
// FUNCIONES
// ======================================================

function showHome(){

    home.hidden = false;

    pages.forEach(page => {

        page.hidden = true;

    });

    clearActiveLinks();

}


function showPage(project){

    home.hidden = true;

    pages.forEach(page => {

        page.hidden = page.dataset.content !== project;

    });

    clearActiveLinks();

    document
        .querySelector(`[data-project="${project}"]`)
        ?.classList.add("active");

}


// ======================================================
// ACTIVE
// ======================================================

function clearActiveLinks(){

    links.forEach(link => {

        link.classList.remove("active");

    });

}


// ======================================================
// VIDEO
// ======================================================

document
.querySelectorAll(".video-player")
.forEach(player => {

    player.addEventListener("click", () => {

        const type = player.dataset.video;

        const id = player.dataset.id;

        let iframe;

        if(type === "youtube"){

            iframe = document.createElement("iframe");

            iframe.src =
                `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

        }

        if(type === "vimeo"){

            iframe = document.createElement("iframe");

            iframe.src =
                `https://player.vimeo.com/video/${id}?autoplay=1`;

        }

        if(!iframe) return;

        iframe.width = "100%";

        iframe.height = "700";

        iframe.frameBorder = "0";

        iframe.allow =
            "autoplay; fullscreen; picture-in-picture";

        iframe.allowFullscreen = true;

        player.replaceWith(iframe);

    });

});