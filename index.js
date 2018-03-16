//reusables
// bakground image
function background_image(_image, id){
    document.getElementById(id).style.backgroundImage= "url('images/"+_image+".png')";
    
}

//slide
var start=2;
function slide(){
   background_image(start, "header");
    if(start==3){
        start=0;
    }
start=start+1;
}
setInterval(slide, 3000);