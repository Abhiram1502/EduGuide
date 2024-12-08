let links=document.getElementById("links");
let nav=document.getElementById("nav");
let topBtn=document.getElementById("topBtn");
function showMenu(){
    links.style.display="flex"
    links.style.right="0px";
    links.style.transition="1s ease-in-out";
}
function hideMenu(){
    links.style.right="-180px";
    links.style.transition="1s ease-in-out";
    links.style.display="none";
}
window.onscroll=function(){
    if(document.body.scrollTop>0 || document.documentElement.scrollTop>20){
        nav.style.backgroundColor="rgba(225,225,225,0.50)";
    }else{
        nav.style.backgroundColor="white";
    }
};

window.onscroll=function(){
    if(document.body.scrollTop>30|| document.documentElement.scrollTop>20){
        topBtn.style.display="flex";
    } else{
        topBtn.style.display="none";
    }
};

function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}