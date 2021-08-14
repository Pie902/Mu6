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

function ico() {
    if (altoOn.checked == true && altoVolc != 0 && document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio0ico").src = "page/vol3.png"}
    else if (document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio0ico").src = "page/vol0.png"}

    if (baritoneOn.checked == true && baritoneVolc != 0 && document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio1ico").src = "page/vol3.png"}
    else if (document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio1ico").src = "page/vol0.png"}

    if (bassOn.checked == true && bassVolc != 0 && document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio2ico").src = "page/vol3.png"}
    else if (document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio2ico").src = "page/vol0.png"}

    if (mezzosopranoOn.checked == true && mezzoVolc != 0 && document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio3ico").src = "page/vol3.png"}
    else if (document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio3ico").src = "page/vol0.png"}

    if (sopranoOn.checked == true && sopranoVolc != 0 && document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio4ico").src = "page/vol3.png"}
    else if (document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio4ico").src = "page/vol0.png"}

    if (tenorOn.checked == true && tenorVolc != 0 && document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio5ico").src = "page/vol3.png"}
    else if (document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio5ico").src = "page/vol0.png"}

    if (fullOn.checked == true && fullVolc != 0 && document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio6ico").src = "page/vol3.png"}
    else if (document.getElementById("audio0ico").src != "page/loading.png") {document.getElementById("audio6ico").src = "page/vol0.png"}
}

function mute0() {if (altoOn.checked == false) {altoOn.checked = true} else {altoOn.checked = false}}
function mute1() {if (baritoneOn.checked == false) {baritoneOn.checked = true} else {baritoneOn.checked = false}}
function mute2() {if (bassOn.checked == false) {bassOn.checked = true} else {bassOn.checked = false}}
function mute3() {if (mezzosopranoOn.checked == false) {mezzosopranoOn.checked = true} else {mezzosopranoOn.checked = false}}
function mute4() {if (sopranoOn.checked == false) {sopranoOn.checked = true} else {sopranoOn.checked = false}}
function mute5() {if (tenorOn.checked == false) {tenorOn.checked = true} else {tenorOn.checked = false}}
function mute5() {if (fullOn.checked == false) {fullOn.checked = true} else {fullOn.checked = false}}

altoVol.addEventListener("canplaythrough", event => {document.getElementById("audio0ico").onclick="mute0();"});
baritoneVol.addEventListener("canplaythrough", event => {document.getElementById("audio1ico").onclick="mute1();"});
bassVol.addEventListener("canplaythrough", event => {document.getElementById("audio2ico").onclick="mute2();"});
mezzosopranoVol.addEventListener("canplaythrough", event => {document.getElementById("audio3ico").onclick="mute3();"});
sopranoVol.addEventListener("canplaythrough", event => {document.getElementById("audio4ico").onclick="mute4();"});
tenorVol.addEventListener("canplaythrough", event => {document.getElementById("audio5ico").onclick="mute5();"});
fullVol.addEventListener("canplaythrough", event => {document.getElementById("audio6ico").onclick="mute6();"});


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
setInterval("mute();", 20);
setInterval("ico();", 20);