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
function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' '); // Split dateTime into date and hour parts

    employee.timeOutEvents.push({
        type: "TimeOut", // Set type to "TimeOut"
        hour: parseInt(hour, 10), // Parse the hour part as an integer
        date: date // Set the date
    });

    return employee; // Return the updated employee record
}
function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' '); // Split dateTime into date and hour parts

    employee.timeInEvents.push({
        type: "TimeIn", // Creates the correct type
        hour: parseInt(hour, 10), // Extracts the correct hour and converts it to an integer
        date: date // Extracts the correct date
    });

    return employee; // Return the updated employee record
}

function hoursWorkedOnDate(employee, date) {
    let timeIn = employee.timeInEvents.find(event => event.date === date); // Find the TimeIn event for the given date
    let timeOut = employee.timeOutEvents.find(event => event.date === date); // Find the TimeOut event for the given date

    return (timeOut.hour - timeIn.hour) / 100; // Calculate hours worked and convert to hours
}
function wagesEarnedOnDate(employee, date) {
    let hours = hoursWorkedOnDate(employee, date); // Get the number of hours worked on the given date
    return hours * employee.payPerHour; // Multiply hours worked by the employee's pay per hour
}
// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date; // Map to get all dates
//     });

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d); // Sum up wages for each date
//     }.bind(this), 0); // Bind this context to the callback

//     return payable;
// };

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
function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' '); // Split dateTime into date and hour parts

    employee.timeOutEvents.push({
        type: "TimeOut", // Creates the correct type
        hour: parseInt(hour, 10), // Extracts the correct hour and converts it to an integer
        date: date // Extracts the correct date
    });

    return employee; // Return the updated employee record
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((memo, rec) => {
        return memo + allWagesFor.call(rec); // Sum up all wages for all employees
    }, 0);
}
let employees = [
    ["Thor", "Odinsson", "God of Thunder", 20],
    ["Loki", "Laufeysson-Odinsson", "Evil Genius", 15]
];
function createTimeInEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' '); // Split dateTime into date and hour parts

    employee.timeInEvents.push({
        type: "TimeIn", // Creates the correct type
        hour: parseInt(hour, 10), // Extracts the correct hour and converts it to an integer
        date: date // Extracts the correct date
    });

    return employee; // Return the updated employee record
}
function createTimeOutEvent(employee, dateTime) {
    let [date, hour] = dateTime.split(' '); // Split dateTime into date and hour parts

    employee.timeOutEvents.push({
        type: "TimeOut", // Creates the correct type
        hour: parseInt(hour, 10), // Extracts the correct hour and converts it to an integer
        date: date // Extracts the correct date
    });

    return employee; // Return the updated employee record
}

let employeeRecords = createEmployeeRecords(employees); // Create employee records from array of arrays

createTimeInEvent(employeeRecords[0], "2021-11-01 0900"); // Add TimeIn event for Thor
createTimeOutEvent(employeeRecords[0], "2021-11-01 1700"); // Add TimeOut event for Thor
createTimeInEvent(employeeRecords[1], "2021-11-02 0800"); // Add TimeIn event for Loki
createTimeOutEvent(employeeRecords[1], "2021-11-02 1600"); // Add TimeOut event for Loki

console.log(allWagesFor.call(employeeRecords[0])); // Calculate wages for Thor
console.log(allWagesFor.call(employeeRecords[1])); // Calculate wages for Loki

console.log(calculatePayroll(employeeRecords)); // Calculate total payroll
