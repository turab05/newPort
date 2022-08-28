const nav = document.getElementById('navc');

window.addEventListener('scroll',()=>{
    if(window.scrollY>600){
nav.classList.add('active_nav')

    }else{
        nav.classList.remove('active_nav')
    }
    if (window.scrollY>1300) {
        nav.classList.remove('active_nav')

    }
})



