function showBtn(){
    var nav=document.getElementById('nav');
    if(nav.style.left=="-300px"){
        nav.style.left="330px";
    }else{
        nav.style.left="-300px";
    }
}

function show(){
    document.getElementById("sidebar").classList.toggle('active');
}