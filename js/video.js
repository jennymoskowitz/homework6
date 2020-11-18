var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});


document.querySelector("#volumeSlider").oninput = function() {
	document.querySelector("#volume").innerHTML = this.value;
	video.volume = this.value/ 100;
};

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value;
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate-0.1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate+0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if ((video.currentTime +5) > 30) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime +5;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		video.volume = 0;
		document.querySelector("#volume").innerHTML = 0
		document.querySelector("#mute").innerHTML = "Unmute";
		document.querySelector("#volumeSlider").value = 0;
	}
	else{
		document.querySelector("#mute").innerHTML = "Mute";
		document.querySelector("#volume").innerHTML = 100;
		document.querySelector("#volumeSlider").value = 100;
		video.volume = 1;
	}
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});	

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});	