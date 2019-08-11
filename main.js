function generator(){
    var x=Math.floor((Math.random()*4)+1);
    document.getElementById("divimg").innerHTML='<img src="inspire${x}.jpg">';
}
