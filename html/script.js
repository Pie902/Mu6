console.log("Hey there!")

var PlayImage = new Image();
var PauseImage = new Image();
var Vol0Image = new Image();
var Vol1Image = new Image();
var Vol2Image = new Image();
var Vol3Image = new Image();
PlayImage.src = 'page/play.png';
PauseImage.src = 'page/pause.png';
Vol0Image.src = 'page/vol0.png';
Vol1Image.src = 'page/vol1.png';
Vol2Image.src = 'page/vol2.png';
Vol3Image.src = 'page/vol3.png';

var busy = false;
var rot = 0;
var mixerClosed = false;
var musicClosed = false;

var altoOn = document.getElementById("checkbox0");
var baritoneOn = document.getElementById("checkbox1");
var bassOn = document.getElementById("checkbox2");
var mezzosopranoOn = document.getElementById("checkbox3");
var sopranoOn = document.getElementById("checkbox4");
var tenorOn = document.getElementById("checkbox5");
var fullOn = document.getElementById("checkbox6");

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

var altoVolc = document.getElementById("audio0c");
var baritoneVolc = document.getElementById("audio1c");
var bassVolc = document.getElementById("audio2c");
var mezzosopranoVolc = document.getElementById("audio3c");
var sopranoVolc = document.getElementById("audio4c");
var tenorVolc = document.getElementById("audio5c");
var fullVolc = document.getElementById("audio6c");

var altoIco = document.getElementById("audio0ico");
var baritoneIco = document.getElementById("audio1ico");
var bassIco = document.getElementById("audio2ico");
var mezzosopranoIco = document.getElementById("audio3ico");
var sopranoIco = document.getElementById("audio4ico");
var tenorIco = document.getElementById("audio5ico");
var fullIco = document.getElementById("audio6ico");

function Mixer() {
    if (mixerClosed == false) {
        mixerClosed = true
        document.getElementById("mixerMain").style.transform = "scaleY(0)";
        document.getElementById("mixerMain").style.height = "0";
        document.getElementById("mixerMainico").style.transform = "scaleY(-1)";
    }
    else {
        mixerClosed = false
        document.getElementById("mixerMain").style.transform = "scaleY(1)";
        document.getElementById("mixerMain").style.height = "auto";
        document.getElementById("mixerMainico").style.transform = "scaleY(1)";
    }
}

function Music() {
    if (musicClosed == false) {
        musicClosed = true
        document.getElementById("musicMain").style.transform = "scaleY(0)";
        document.getElementById("musicMain").style.height = "0";
        document.getElementById("musicMainico").style.transform = "scaleY(-1)";        
    }
    else {
        musicClosed = false
        document.getElementById("musicMain").style.transform = "scaleY(1)";
        document.getElementById("musicMain").style.height = "auto";
        document.getElementById("musicMainico").style.transform = "scaleY(1)";
    }
}

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

function toggle() {
    if (document.getElementById("audio0").paused) {
        play();
        document.getElementById("button").src="page/pause.png";
    }
    else {
        pause();
        document.getElementById("button").src="page/play.png"
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

    if(busy == false) {
        document.getElementById("seek").value = document.getElementById("audio0").currentTime;
        console.log("updated");
    }
}

function gui(Volume, Volumec, Icon, Playable, On) {
    if (Playable == true) {
        Icon.style.transform="rotate(0deg)"
        if (On.checked == true) {
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

function pause() {
    document.getElementById('audio0').pause();
    document.getElementById('audio1').pause();
    document.getElementById('audio2').pause();
    document.getElementById('audio3').pause();
    document.getElementById('audio4').pause();
    document.getElementById('audio5').pause();
    document.getElementById('audio6').pause();
    seek();
}

function play() {
    document.getElementById('audio0').play();
    document.getElementById('audio1').play();
    document.getElementById('audio2').play();
    document.getElementById('audio3').play();
    document.getElementById('audio4').play();
    document.getElementById('audio5').play();
    document.getElementById('audio6').play();
    seek();
}

setInterval("main();", 4);
setInterval("mute();", 20)