const home = document.querySelector("#home");

const homeLink = document.querySelector(".home-link");

const projectLinks = document.querySelectorAll("[data-project]");

const projects = document.querySelectorAll("[data-content]");

function showHome() {

    home.hidden = false;

    projects.forEach(project => {

        project.hidden = true;

    });

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

const segundoVideo = document.getElementById("segundo-video");

