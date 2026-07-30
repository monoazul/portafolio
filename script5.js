const home = document.querySelector("#home");

const content = document.querySelector(".content");

const homeLink = document.querySelector(".home-link");

const projectLinks = document.querySelectorAll("[data-project]");

const projects = document.querySelectorAll("[data-content]");

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
