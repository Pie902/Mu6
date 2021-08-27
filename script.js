console.log("Hey there!");

var open = false;
var value = 100;
var pos = -320;
var ypos = document.getElementById("menu");
var menuOpen = false;

function menu() {
    if (open == false) {
        open = true;
        console.log("open");
    }
    else {
        open = false;
        console.log("closed");
    }
    console.log("Checked")
}

//function open() {
//    if (open == false && value > 40) {
//        value -= 2
//        xpos = ""+value+"%";
//    }
//    if (open == true && value < 100) {
//        value += 2
//        xpos = ""+value+"%";
//    }
//}

//setInterval(open(), 5)

function updatemenu() {
    if (menuOpen == true) {
      menuOpen = false
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      menuOpen = true
      document.getElementById('menu').style.borderRadius = '10px';
    }
}

function animatemenu() {
    console.log(
        "Animating,  ",pos
    )
    if (menuOpen == true && pos <= 5) {
        pos += 7;
        document.getElementById("menu").style = "margin-top: "+pos+"px";
      }
    if (menuOpen == false && pos >= -320) {
        pos -= 7;
        document.getElementById("menu").style = "margin-top: "+pos+"px";
      }
}

setInterval("animatemenu();", 2);