const arrowIcon = document.querySelectorAll("[data-cell]");
const featuresNavs = document.querySelectorAll(".featuresNav > li");
const webPageSec1 = document.querySelector(".webPageSec1");
const sec3RightH1 = document.querySelector(".sec3Right > h1");
const sec3RightP = document.querySelector(".sec3Right > p");
const sec3LeftImg = document.querySelector(".sec3Left > img");
const burger = document.querySelector(".burger");
const bars = document.querySelectorAll(".bar");
const navLinks = document.querySelector(".navLinks");


//Display drop down on Arrow click
arrowIcon.forEach(arrow => {
    arrow.addEventListener("click", (e)=>{
        e.target.parentElement.nextElementSibling.classList.toggle("show")
    })
})


//Change active border bottom
featuresNavs.forEach(featuresNav=>{
    featuresNav.addEventListener("click", (e)=>{
        var el = featuresNavs[0];
        while (el){
            if (el.tagName === "LI"){
                el.firstChild.classList.remove("active");
            }
            el = el.nextSibling;
        }
        e.target.parentElement.firstChild.classList.add("active");
    })
});


//Change sec3 contents 
featuresNavs[0].addEventListener("click", ()=>{
    sec3LeftImg.src = "/img/webPage2Sec2.jpg";
    sec3RightH1.innerText = "Bookmark with ease";
    sec3RightP.innerText = "Ghfuy jkbiu gcuy hvyu hfgiu jhvuy gcyu jhg7 yu jhvyu yuvv8v rs iu hvtd ghs4 hiohin kiio jhv ghcre gcrs gcyt jhvuyf uff vgc ghctr fcxw eartrv cctyy.";
});

featuresNavs[1].addEventListener("click", ()=>{
    sec3LeftImg.src = "/img/webPageSec2.jpg";
    sec3RightH1.innerText = "Bookmark in one click";
    sec3RightP.innerText = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manange your favourite sites.";
});

featuresNavs[2].addEventListener("click", ()=>{
    sec3LeftImg.src = "/img/webPage3Sec2.jpg";
    sec3RightH1.innerText = "Share Bookmark easily";
    sec3RightP.innerText = "Wtduyi hkviu jhvyuf ghcty cftrs chtt ghyu. Tuvyb vyu jhvyyt cgcty ghcty jhyui gctyc xaw xdtrty jhyyu hgvyfb ftyuy tfytf ytfyu htfyf yf tyfu tydrtf.";
});



//Cross burger on click
burger.addEventListener("click", ()=>{
    bars[0].classList.toggle("cross");
    bars[1].classList.toggle("cross");
    bars[2].classList.toggle("cross");
    navLinks.classList.toggle("showNavLinks")
})