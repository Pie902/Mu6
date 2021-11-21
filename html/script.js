console.log("Hey there!")

// To add new music: 
//  Copy a page,
//  Change Title
//  Change pdf references
//  Change audio references

var menupos = -320;
var menuOpen = false;

var PlayImage = new Image(); PlayImage.src = 'page/play.png';
var PauseImage = new Image(); PauseImage.src = 'page/pause.png';
var Vol0Image = new Image(); Vol0Image.src = 'page/vol0.png';
var Vol1Image = new Image(); Vol1Image.src = 'page/vol1.png';
var Vol2Image = new Image(); Vol2Image.src = 'page/vol2.png';
var Vol3Image = new Image(); Vol3Image.src = 'page/vol3.png';

var busy = false;
var rot = 0;
var mixer = document.getElementById("mixerMain");
var music = document.getElementById("musicMain");
var head = document.getElementById("head");
var maximized = false;

// Toggle on/off Volume
var altoOn = false;
var baritoneOn = false;
var bassOn = false;
var mezzosopranoOn = false;
var sopranoOn = false;
var tenorOn = false;
var fullOn = true;

// Audio
var altoVol = document.getElementById("audio0");
var baritoneVol = document.getElementById("audio1");
var bassVol = document.getElementById("audio2");
var mezzosopranoVol = document.getElementById("audio3");
var sopranoVol = document.getElementById("audio4");
var tenorVol = document.getElementById("audio5");
var fullVol = document.getElementById("audio6");

var altoCanplay = false
var baritoneCanplay = false
var bassCanplay = false
var mezzosopranoCanplay = false
var sopranoCanplay = false
var tenorCanplay = false
var fullCanplay = false

// Volume Control Bars
var altoVolc = document.getElementById("audio0c");
var baritoneVolc = document.getElementById("audio1c");
var bassVolc = document.getElementById("audio2c");
var mezzosopranoVolc = document.getElementById("audio3c");
var sopranoVolc = document.getElementById("audio4c");
var tenorVolc = document.getElementById("audio5c");
var fullVolc = document.getElementById("audio6c");

// Volume Icons
var altoIco = document.getElementById("audio0ico");
var baritoneIco = document.getElementById("audio1ico");
var bassIco = document.getElementById("audio2ico");
var mezzosopranoIco = document.getElementById("audio3ico");
var sopranoIco = document.getElementById("audio4ico");
var tenorIco = document.getElementById("audio5ico");
var fullIco = document.getElementById("audio6ico");

function toggleAlto() {altoOn = !altoOn}
function toggleBari() {baritoneOn = !baritoneOn}
function toggleBass() {bassOn = !bassOn}
function toggleMezzo() {mezzosopranoOn = !mezzosopranoOn}
function toggleSoprano() {sopranoOn = !sopranoOn}
function toggleTenor() {tenorOn = !tenorOn}
function toggleFull() {fullOn = !fullOn}

function seek() {
    busy = true
    var time = document.getElementById("seek").value;
    document.getElementById('audio0').currentTime = time;
    document.getElementById('audio1').currentTime = time;
    document.getElementById('audio2').currentTime = time;
    document.getElementById('audio3').currentTime = time;
    document.getElementById('audio4').currentTime = time;
    document.getElementById('audio5').currentTime = time;
    document.getElementById('audio6').currentTime = time;
    busy = false
}

function maximize() {
    if(maximized == true) {
        if(window.innerHeight < window.innerWidth) {music.style = "width: 65%";}
        mixer.style = "display: block";
        document.getElementById("maximizeIcon").src="page/maximize.png";
        window.scrollTo(0, 0);
        maximized = false;
    } else {
        music.style = "width: 98%";
        mixer.style = "display: none";
        document.getElementById("maximizeIcon").src="page/minimize.png";
        window.scrollTo(0, 100);
        maximized = true;
    }
}

function toggle() {
    if (document.getElementById("audio0").paused) {
        play();
    }
    else {
        pause();
    }
}

altoVol.addEventListener("canplaythrough", event => {altoCanplay = true});
baritoneVol.addEventListener("canplaythrough", event => {baritoneCanplay = true});
bassVol.addEventListener("canplaythrough", event => {bassCanplay = true});
mezzosopranoVol.addEventListener("canplaythrough", event => {mezzosopranoCanplay = true});
sopranoVol.addEventListener("canplaythrough", event => {sopranoCanplay = true});
tenorVol.addEventListener("canplaythrough", event => {tenorCanplay = true});
fullVol.addEventListener("canplaythrough", event => {fullCanplay = true});

function main() {
    rot += 2
    gui(altoVol, altoVolc, altoIco, altoCanplay, altoOn);
    gui(baritoneVol, baritoneVolc, baritoneIco, baritoneCanplay, baritoneOn);
    gui(bassVol, bassVolc, bassIco, bassCanplay, bassOn);
    gui(mezzosopranoVol, mezzosopranoVolc, mezzosopranoIco, mezzosopranoCanplay, mezzosopranoOn);
    gui(sopranoVol, sopranoVolc, sopranoIco, sopranoCanplay, sopranoOn);
    gui(tenorVol, tenorVolc, tenorIco, tenorCanplay, tenorOn);
    gui(fullVol, fullVolc, fullIco, fullCanplay, fullOn);
}
function updateSeek() {
    if(busy == false && !document.getElementById("audio0").paused) {
        document.getElementById("seek").value = document.getElementById("audio0").currentTime;
    }
}

// Display Correct Icon
function gui(Volume, Volumec, Icon, Playable, On) {
    if (Playable == true) {
        Icon.style.transform="rotate(0deg)"
        if (On == true) {
            if (Volumec.value >= 0.0) {Icon.src = "page/vol0.png"}
            if (Volumec.value >= 0.05) {Icon.src = "page/vol1.png"}
            if (Volumec.value >= 0.3) {Icon.src = "page/vol2.png"}
            if (Volumec.value >= 0.6) {Icon.src = "page/vol3.png"}
            Volume.volume = Volumec.value
        }
        else {
            Icon.src = "page/vol0.png"
            Volume.volume = 0
        }
    }
    else {
        Icon.style.transform="rotate("+rot+"deg)"
    }
}

//Pause All
function pause() {
    document.getElementById("playButton").src = "page/play.png";
    document.getElementById('audio0').pause();
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
    document.getElementById('audio6').pause();
    seek();
}
//Play All
function play() {
    document.getElementById("playButton").src = "page/pause.png";    
    document.getElementById('audio0').play();
    document.getElementById('audio1').play();
    document.getElementById('audio2').play();
    document.getElementById('audio3').play();
    document.getElementById('audio4').play();
    document.getElementById('audio5').play();
    document.getElementById('audio6').play();
    seek();
}

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
    if (menuOpen == true && menupos <= 5) {
        menupos += 7;
        document.getElementById("menu").style = "margin-top: "+menupos+"px";
      }
    if (menuOpen == false && menupos >= -320) {
        menupos -= 7;
        document.getElementById("menu").style = "margin-top: "+menupos+"px";
      }
}

setInterval("main();", 4);
setInterval("updateSeek();", 200);
setInterval("animatemenu();", 2);