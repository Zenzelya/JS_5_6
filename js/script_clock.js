var mSecods = 0,
	switcher = 0;


function reset() {
	switcher = 0;
	mSecods = 0;
	document.getElementById('clock').innerHTML = "00:00:00:0";
	document.getElementById('start').innerHTML = "Start button";
	
}

function startOrePause () {
	if (switcher == 0){
		switcher = 1;
		clock();
		document.getElementById('start').innerHTML = "Pause button";
	} else {
		switcher = 0;
		document.getElementById('start').innerHTML = "Continue button";
	}

}

function clock () {
	
	mSecods++;
	var sec = Math.floor(mSecods * 4 / 1000 % 60);
	var min = Math.floor(mSecods* 4 / 1000 /60) %60;
	var hour = Math.floor(mSecods *4 / (1000 * 60 * 60)% 24);
	var tenth = Math.floor(mSecods* 4 % 1000);
	
	if(sec < 10){
		sec = "0" + sec;
	}
	if(min < 10){
		min = "0" + min;
	}
	
	if(hour < 10) {
		hour = "0" + hour;
	}
	
	document.getElementById('clock').innerHTML = hour + ' : ' + min + ' : ' + sec + ' : ' + tenth;
	// document.getElementById('tenth').innerHTML = tenth;
	if(switcher == 1){
		setTimeout(clock, 1);
	}
	
}

 

document.getElementById('start').addEventListener('click', startOrePause);

document.getElementById('clear').addEventListener('click', reset);