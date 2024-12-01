let links=document.getElementById("links");
function showMenu(){
    links.style.right="0px";
    links.style.transition="1s ease-in-out";
}
function hideMenu(){
    links.style.right="-180px";
    links.style.transition="1s ease-in-out";
}