//your JS code here. If required.
function daysOfAYear(year){
	if(year%4==0 || year%400==0)
		return 366;
	else
		return 365;
}
let days = daysOfAYear(2022);