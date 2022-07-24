const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");
const paragraph = document.querySelector("p");

title.style.opacity = "100%";
title.style.transform = "translateY(0)";

title.addEventListener("transitionend", (e) => {
    console.log(e);
    subtitle.style.opacity = "100%";
    subtitle.style.transform = "translateY(0)";

    subtitle.ontransitionend = (e) => {
        console.log(e);
        paragraph.style.opacity = "100%";
        paragraph.style.transform = "translateY(0)";
    }

})