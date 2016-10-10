var mSecods = 0,
	secondsX = 0, 
	secondsY = 0,
	minetsX = 0,
	minetsY = 0,
	hourX = 0,
	hourY = 0;

var timer = document.getElementById("clock");
console.log(timer);
console.log(hourX + "" + hourY + " : " + minetsX + "" + minetsY + " : " +  secondsX + "" + secondsY + " : " + mSecods);
//document.getElementById('clock').innerHTML = hourX + "" + hourY + " : " + minetsX + "" + minetsY + " : " +  secondsX + "" + secondsY + " : " + mSecods;
// (hourX, hourY, + " : " + minetsX, minetsY + " : " +  secondsX,  + " : " + mSecods);
 


function setMoliSeconds () {
	this.mSecods = 0;
	if (mSecods == 10) {
		setSeconds();
		mSecods = 0;
	}
	console.log(document.getElementById('clock').innerHTML = hourX + "" + hourY + " : " + minetsX + "" + minetsY + " : " +  secondsX + "" + secondsY + " : " + mSecods);
	mSecods = mSecods + 1;
}

 
 setInterval(setMoliSeconds, 100);