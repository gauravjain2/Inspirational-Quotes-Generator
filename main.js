var number_of_image=1;
function display_image(){

    if(number_of_image==1){
        document.getElementById("image1").style.display="block";
        ++number_of_image;
        hide_image(1)
    }
    else if(number_of_image==2){
        document.getElementById("image2").style.display="block";
        ++number_of_image
        hide_image(2)
    }
    else if(number_of_image==3){
        document.getElementById("image3").style.display="block";
        ++number_of_image
        hide_image(3)
    }
    else if(number_of_image==4){
        document.getElementById("image4").style.display="block";
        ++number_of_image
        hide_image(4)
    }
    else if(number_of_image==5){
        document.getElementById("image5").style.display="block";
        ++number_of_image
        hide_image(5)
    }
    else if(number_of_image==6){
        document.getElementById("image6").style.display="block";
        ++number_of_image
        hide_image(6)
    }
    else if(number_of_image==7){
        document.getElementById("image7").style.display="block";
        ++number_of_image
        hide_image(7)
    }
    else if(number_of_image==8){
        document.getElementById("image8").style.display="block";
        number_of_image=1
        hide_image(8)
    }

    function hide_image(id){
        var ele=document.getElementsByClassName("image")
        for(var i=1;i<=ele.length;++i){
            if(i!=id)
            document.getElementById("image"+i).style.display="none"
        }
    }
}