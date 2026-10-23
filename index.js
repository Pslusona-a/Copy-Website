const images = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10","https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"]
let carosel = 0;
function left(){
    carosel--;
    if (carosel < 0){
        carosel = 2;
    }
    document.getElementById("c1").src = images[carosel];
}
function right(){
    carosel++;
    if (carosel > 2){
        carosel = 0;
    }
    document.getElementById("c1").src = images[carosel];
}
function hide(){
    document.getElementById("sidebar").hidden = false;
}
function sidebar(){
    if (document.getElementById("sidebar").hidden){
        document.getElementById("sidebar").hidden = false;
    }
    else {
        document.getElementById("sidebar").hidden = true;
    }
}
function show(){
    document.getElementById("course").hidden = false;
}
function courses(){
}