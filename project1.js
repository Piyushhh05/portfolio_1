function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){

    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML=elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = " ";
    elem.appendChild(parent);
});
}

revealToSpan();

var t1 = gsap.timeline();
t1
    .from(".child span",{
    x: 100,
    duration: 1.4,
    stagger: .2,
    delay: 1,
    ease: Power3.easeInOut
})

    .to(".parent .child",{
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})

    .to("#loader",{
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
})

    .to("#green",{
    height: "100%",
    top: 0,
    duration: 1,
    delay: -.8,
    ease: Circ.easeInOut
})

    .to("#green",{
    height: "0%",
    duration: 1,
    delay: -.2,
    ease: Circ.easeInOut
})