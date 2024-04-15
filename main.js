// let LeapYear (year) {
//     if ((year % 4 === 0 && year % 100 ! == 0) year % 400 === 0){
//         console.log(true);
//     }else {
//         console.log(false);
//     }
// }

let year = prompt ("Введіть рік:");

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

if (isLeapYear(year)) {
    console.log("Рік " + year + " є високосним.");
} else {
    console.log("Рік " + year + " не є високосним.");
}
