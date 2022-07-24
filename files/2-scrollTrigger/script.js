gsap.fromTo("#img1", {
        opacity: 0,
        x: -300,
    },
    {
    scrollTrigger: {
        trigger:".section1",
        start: "bottom 450px",
    },
        opacity: 1,
        x: 0,
})
gsap.fromTo("#img2", {
        opacity: 0,
    x: 300,
    },
    {
    scrollTrigger: {
        trigger:".section1",
        start: "bottom 150px",
    },
    opacity: 1,
    x: 0
})

