const menuIcon=document.getElementById("menu-icon");
const slideoutMenu=document.getElementById("slideout-menu");
const searchIcon=document.getElementById("search-icon");
const searchbox=document.getElementById("searchbox");

searchIcon.addEventListener('click', function(){
    if(searchbox.style.top=='72px'){
        searchbox.style.top='24px';
        searchbox.style.pointerEvents='none';
    }else{
        searchbox.style.top='72px';
        searchbox.style.pointerEvents='auto';
    }
});

menuIcon.addEventListener('click', function (){
    if(slideoutMenu.style.opacity=="1"){
        slideoutMenu.style.opacity='0';
        slideoutMenu.style.pointerEvents='none';
    }else{
        slideoutMenu.style.opacity='1';
        slideoutMenu.style.pointerEvents='auto';
    }
});