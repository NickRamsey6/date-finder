// Import css, bootstrap and jquery
import "./styles.css";
import 'bootstrap';
import $ from "jquery";
//import necessary variables and functions from datefinder.js
import {inputYear, inputNaNCheck, inputMonth, inputDay, limitInputRange, febChecker, monthToString, calendar, userDate, dayToString} from "./../src/datefinder.js";



//// UI LOGIC
//giant function to run all functions we built to hit specs
function superFunction(inputYear, inputMonth, inputDay){
  console.log(inputNaNCheck(inputYear));
  console.log(febChecker(inputMonth, inputDay, inputYear));
  //run inputNaNCheck to see if any NaN's were entered in each of the three inputs. Return error message if true.
  if (inputNaNCheck(inputYear) === true || inputNaNCheck(inputMonth) === true || inputNaNCheck(inputDay) === true) {
    return $(".day-of-week-output").text("Sorry! Please input a number");
    //run limitedInputRange to check for months >12 and <1, days >31 and <1. Rounds all decimal points up (via .ceil method) then tests rounded number vs. inputted number to prevent decimals. Checks if the month is February and the day is >29. Returns error for any falses.
  } else if (limitInputRange(inputYear, inputMonth, inputDay) === false) {
    return $(".day-of-week-output").text("Please enter a valid date range");
    //Runs febChecker to see if the month is February and the date is >28. If true, runs the leapYearDetector. If leapYearDetector runs and returns false (not a leap year), then error message.
  } else if (febChecker(inputMonth, inputDay, inputYear) === false) {
    console.log(febChecker(inputMonth, inputDay, inputYear));
      return $(".day-of-week-output").text("Please enter a valid date");
      //if date entered makes it through all checks, we convert the month to a string.
  } else{
    let convertedMonth = monthToString(inputMonth);
    console.log(convertedMonth + " " + inputDay + ", " + inputYear);
    //adds converted month to inputted day and year
    let userDate = new Date(convertedMonth + " " + inputDay + ", " + inputYear);
    //hot fix for years <1000 bug. Now if a year <1000 is entered, we manually set the year to be the inputYear.
    if (inputYear < 1000) {
      userDate.setFullYear(inputYear);
    }
    console.log(userDate);
    //converted the numeric number from .getDay to the actual name of the day set in the array.
    let dayOfWeek = dayToString(userDate.getDay());
    $(".day-of-week-output").text(dayOfWeek);

  }


}






$(document).ready(function(){

  $(".date-check").submit(function(event){
    event.preventDefault();
    console.log("Button got clicked!");
    let inputYear = parseInt($("#year").val());
    let inputMonth = parseInt($("#month").val());
    let inputDay = parseInt($("#day").val());
    console.log(inputYear);
    console.log(inputMonth);
    console.log(inputDay);
    superFunction(inputYear, inputMonth, inputDay);

  });


});
