console.log("Hey there!")

var busy = false;
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

var altoVolc = document.getElementById("audio0c");
var baritoneVolc = document.getElementById("audio1c");
var bassVolc = document.getElementById("audio2c");
var mezzosopranoVolc = document.getElementById("audio3c");
var sopranoVolc = document.getElementById("audio4c");
var tenorVolc = document.getElementById("audio5c");
var fullVolc = document.getElementById("audio6c");

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

function mute() {
    if(altoOn.checked == true) {altoVol.volume = altoVolc.value}
    if(baritoneOn.checked == true) {baritoneVol.volume = baritoneVolc.value}
    if(bassOn.checked == true) {bassVol.volume = bassVolc.value}
    if(mezzosopranoOn.checked == true) {mezzosopranoVol.volume = mezzosopranoVolc.value}
    if(sopranoOn.checked == true) {sopranoVol.volume = sopranoVolc.value}
    if(tenorOn.checked == true) {tenorVol.volume = tenorVolc.value}
    if(fullOn.checked == true) {fullVol.volume = fullVolc.value}

    if(altoOn.checked == false) {altoVol.volume = "0.0"}
    if(baritoneOn.checked == false) {baritoneVol.volume = "0.0"}
    if(bassOn.checked == false) {bassVol.volume = "0.0"}
    if(mezzosopranoOn.checked == false) {mezzosopranoVol.volume = "0.0"}
    if(sopranoOn.checked == false) {sopranoVol.volume = "0.0"}
    if(tenorOn.checked == false) {tenorVol.volume = "0.0"}
    if(fullOn.checked == false) {fullVol.volume = "0.0"}
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

function main() {
    
    if(busy == false) {
        document.getElementById("seek").value = document.getElementById("audio0").currentTime;
        console.log("updated");
    }
}

altoVol.addEventListener("canplaythrough", event => {document.getElementById("audio0ico").src = "page/vol3.png"});
baritoneVol.addEventListener("canplaythrough", event => {document.getElementById("audio1ico").src = "page/vol3.png"});
bassVol.addEventListener("canplaythrough", event => {document.getElementById("audio2ico").src = "page/vol3.png"});
mezzosopranoVol.addEventListener("canplaythrough", event => {document.getElementById("audio3ico").src = "page/vol3.png"});
sopranoVol.addEventListener("canplaythrough", event => {document.getElementById("audio4ico").src = "page/vol3.png"});
tenorVol.addEventListener("canplaythrough", event => {document.getElementById("audio5ico").src = "page/vol3.png"});
fullVol.addEventListener("canplaythrough", event => {document.getElementById("audio6ico").src = "page/vol3.png"});


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

setInterval("main();", 4000);
setInterval("mute();", 20)