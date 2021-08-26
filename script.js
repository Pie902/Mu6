console.log("Hey there!");

var open = false;

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