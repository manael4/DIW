var video = document.getElementById("video");
var play = document.getElementById("play");
var soundImg = document.getElementById("soundImg");
var videotitle = document.getElementById("videoTitle");
var showTime = 3;
function videoplay(){
    if (video.paused) {
        video.play();
        play.innerHTML = "Pause";
    } else {
        video.pause();
        play.innerHTML = "Play";
    }
}
function videomute() {
    if (video.muted) {
        video.muted=false;
        soundImg.src="volume.png";
        soundImg.alt="Sound On";
    } else {
        video.muted=true;
        soundImg.src="mute.png";
        soundImg.alt= "Sound Off";
    }
}
video.addEventListener("timeupdate",function(){
    if (video.currentTime >= showTime && video.currentTime < showTime + 5) {
        videotitle.style.display="block";        
    } else {
        videotitle.style.display="none";
    }
});