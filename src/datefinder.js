
// export let inputYear = 1995;
// export let inputMonth = 3;
// export let inputDay = 3;

//Built an array of months to be accessed via monthToString. Needed because we are using numeric inputted values but need the name of the month for .getDay to work.
const calendar = ["Nothinguary", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Built an array of days to be accessed via dayToString. Needed because get.Day returns a number corresponding to what day of the week. Sunday = 0.
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];





export function inputNaNCheck (input){
    if(isNaN(input) === true){
      return true;
    }else {
      return false;
    }
}

export function limitInputRange (year,month,day){
  console.log("Testing year: " + year);
  console.log("Testing month: " + month);
  console.log("Testing day: " + day);
  if (month > 12 || month < 1) {
    return false;
  }else if (day > 31 || day < 1) {
    return false;
  } else if (month === 2 && day > 29) {
    return false;
  } else if (Math.ceil(year) != year || Math.ceil(month)!= month || Math.ceil(day) != day ) {
    return false;
  }else {
    return true;
  }
}

export function febChecker (month, day, year) {
  console.log("febChecker! Go!");
  if (month === 2 && day > 28) {
    return leapYearDetector(year)
  }
}

export function leapYearDetector(year){
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

export function monthToString(month){
  let newMonth = "";
  newMonth = calendar[month];
  return newMonth;
}

export function dayToString(day){
  let newDay = "";
  newDay = daysOfWeek[day];
  return newDay;
}
