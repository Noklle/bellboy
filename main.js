// clock
	// calls the showTime function every second
	setInterval(showTime, 1000);
	var time24 = false

	// showTime function
	function showTime() {
		//Get current time/date
		let time = new Date();
		let hour = time.getHours();
		let min = time.getMinutes();
		let sec = time.getSeconds();
		let month = time.getMonth() + 1;
		let day = time.getDate();
		am_pm = "AM";
		
		
		//Convert day number to word
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]
		
		let weekday = days[time.getDay()];
		
		//12hr format
		if (time24 == false) {
			if (hour >= 12) {
				hour -= 12;
				am_pm = "  PM";
			}
			else if (hour == 0) {
				hour = 12;
				am_pm = "  AM"; 
			}
		} else if (time24 == true) {
			am_pm = "";
		}
		
		//if the time value is single digit, add a leading zero
		//hour = hour < 10 ? "0" + hour: hour;
		min = min < 10 ? "0" + min: min;
		sec = sec < 10 ? "0" + sec: sec;
		

		let currentTime =
			hour +
			":" +
			min +
			":" +
			sec +
			am_pm;

		let currentDate =
			weekday +
			" " +
			day +
			"/" +
			month;
		
		 // Displaying the time
		document.getElementById(
			"clock"
		).innerHTML = currentTime;
		
		// Displaying the date
		document.getElementById(
			"date"
		).innerHTML = currentDate;
	}
	
	// call the function
	showTime();
// clock end

// 24 hour time Button
	function time24Toggle() {
		if (time24 == false) {
			time24 = true
		} else {
			time24 = false
		}
		showTime();
	}
// 24 hour time button end