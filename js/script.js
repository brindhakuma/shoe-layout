  let timer;
const hoverItem = document.getElementById("dropping");

hoverItem.addEventListener("mouseenter", () => {
    timer = setTimeout(() => {
        window.location.href = "women.html"; // next page
    }, 2000); // 2 seconds hover
});

hoverItem.addEventListener("mouseleave", () => {
    clearTimeout(timer); // cancel if hover removed
});

  let timers;
const hover = document.getElementById("shopping");

hover.addEventListener("mouseenter", () => {
    timers = setTimeout(() => {
        window.location.href = "men.html"; // next page
    }, 2000); // 2 seconds hover
});

hover.addEventListener("mouseleave", () => {
    clearTimeout(timers); // cancel if hover removed
});

 let time;
const hovers = document.getElementById("city");

hovers.addEventListener("mouseenter", () => {
    time = setTimeout(() => {
        window.location.href = "kids.html"; // next page
    }, 2000); // 2 seconds hover
});

hovers.addEventListener("mouseleave", () => {
    clearTimeout(time); // cancel if hover removed
});

let timing;
const how = document.getElementById("between");

how.addEventListener("mouseenter", () => {
    timing = setTimeout(() => {
        window.location.href = "women.html"; // next page
    }, 2000); // 2 seconds hover
});

how.addEventListener("mouseleave", () => {
    clearTimeout(timing); // cancel if hover removed
});


const yes = document.getElementById("house")
const no = document.getElementById("arrival")
yes.addEventListener("click",function(){
    if(no.style.display == "block"){
        no.style.display = "none";
    }else{
    no.style.display = "block";
    }
})

const alt = document.getElementById("home")
const shift = document.getElementById("kidney")
alt.addEventListener("click",function(){
    if(shift.style.display == "block"){
        shift.style.display = "none";
    }else{
    shift.style.display = "block";
    }
})

const dance = document.getElementById("events")
const music = document.getElementById("ratio")
dance.addEventListener("click",function(){
    if(music.style.display == "block"){
        music.style.display = "none";
    }else{
    music.style.display = "block";
    }
})

const port = document.getElementById("bus")
const calc = document.getElementById("train")
port.addEventListener("click",function(){
    if(calc.style.display == "block"){
        calc.style.display = "none";
    }else{
    calc.style.display = "block";
    }
})


const when = document.getElementById("course")
const note = document.getElementById("fat")
when.addEventListener("click",function(){
    if(note.style.display == "block"){
        note.style.display = "none";
    }else{
    note.style.display = "block";
    }
})

const shoe = document.getElementById("shots")
const socks = document.getElementById("desk")
shoe.addEventListener("click",function(){
    if(socks.style.display == "block"){
        socks.style.display = "none";
    }else{
    socks.style.display = "block";
    }
})