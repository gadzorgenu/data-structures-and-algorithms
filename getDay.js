//Task
//Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date. 
//Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.
// For example, the day name for the date 12/07/2016 is Wednesday.

function getDayName(givenDate) {
    let dayName;
    let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let date = new Date(givenDate)
    dayName = dayNames[date.getDay()]
    return dayName;
}

console.log(getDayName('07/03/2021'))