//Question: https://www.hackerrank.com/challenges/js10-date/problem



// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    var d=new Date(dateString);
   var week=new Array(7);
   week[0]="Sunday";
   week[1]="Monday";
   week[2]="Tuesday";
   week[3]="Wednesday";
   week[4]="Thursday";
   week[5]="Friday";
   week[6]="Saturday";
   var dayName=week[d.getDay()];
    
    return dayName;
}

