/* Your Code Here */

function createEmployeeRecord(array) {
    return {
        firstName: array[0], // Populate firstName from the 0th element
        familyName: array[1], // Populate familyName from the 1th element
        title: array[2], // Populate title from the 2th element
        payPerHour: array[3], // Populate payPerHour from the 3th element
        timeInEvents: [], // Initialize an empty array for timeInEvents
        timeOutEvents: [] // Initialize an empty array for timeOutEvents
    };
}
function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord); // Use map to convert an array of arrays into an array of employee records
}
function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' '); // Split dateTime into date and hour parts

    employee.timeInEvents.push({
        type: "TimeIn", // Set type to "TimeIn"
        hour: parseInt(hour, 10), // Parse the hour part as an integer
        date: date // Set the date
    });

    return employee; // Return the updated employee record
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

