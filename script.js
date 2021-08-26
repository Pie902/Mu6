console.log("Hey there!");

var open = false;
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

function open() {
    if (open == true && xpos < 0%) {
        xpos += 2%;
    }
    if (open == false && xpos > -20%) {
        xpos -= 2%;
    }
}

setInterval(open(), 5)