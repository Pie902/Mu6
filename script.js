console.log("Hey there!");

var open = false;
var value = 100
var xpos = document.getElementById("menu").style.margin-left

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