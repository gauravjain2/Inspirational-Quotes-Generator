var number_of_image=1;
function display_image(){

    if(number_of_image==1){
        document.getElementById("image1").style.display="block";
        ++number_of_image;
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
    }
    else if(number_of_image==2){
        document.getElementById("image2").style.display="block";
        ++number_of_image
        document.getElementById("image1").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image4").style.display="none";
    }
    else if(number_of_image==3){
        document.getElementById("image3").style.display="block";
        ++number_of_image
        document.getElementById("image2").style.display="none";
        document.getElementById("image1").style.display="none";
        document.getElementById("image4").style.display="none";
    }
    else if(number_of_image==4){
        document.getElementById("image4").style.display="block";
        number_of_image=1
        document.getElementById("image2").style.display="none";
        document.getElementById("image3").style.display="none";
        document.getElementById("image1").style.display="none";
    }
}