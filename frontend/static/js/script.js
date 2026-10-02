document.addEventListener("DOMContentLoaded",()=>{
const links=document.querySelectorAll(".nav-links a[href^='#']");
const sections=document.querySelectorAll("section[id]");
window.addEventListener("scroll",()=>{
let current="home";
sections.forEach(section=>{
if(window.scrollY>=section.offsetTop-180)current=section.id;
});
links.forEach(link=>{
link.classList.toggle("active",link.getAttribute("href")==="#"+current);
});
});
});