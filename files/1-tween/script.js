const tl = gsap.timeline();

const tl1 = tl.to("h1", {
    y: 0,
    duration: 1,
    opacity : 1,
}).from("h2", {
    y: 100,
    duration: 1,
    opacity: 0,
}).fromTo("p", {
    y: 100,
    opacity: 0,
    duration: 1,
}, {
    y: 0,
    opacity: 1,
})