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

