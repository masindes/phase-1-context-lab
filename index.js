// Function to create an employee record from an array
function createEmployeeRecord(array) {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Function to create multiple employee records from an array of arrays
  function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord);
  }
  
  // Function to create a timeIn event
  function createTimeInEvent(employeeRecord, dateTime) {
    const [date, hour] = dateTime.split(' ');
    const timeInEvent = {
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    };
    employeeRecord.timeInEvents.push(timeInEvent);
    return employeeRecord;
  }
  
  
  function createTimeInEvent(employeeRecord, dateTime) {
    // Split the dateTime string into date and hour
    const [date, hour] = dateTime.split(' ');
    
    // Create the timeIn event object
    const timeInEvent = {
      type: "TimeIn", // 1) creates the correct type
      hour: parseInt(hour), // 3) extracts the correct hour
      date: date // 2) extracts the correct date
    };
    // Test the createTimeInEvent function
function testCreateTimeInEvent() {
    // Create a sample employee record
    const employeeRecord = {
      firstName: "Loki",
      familyName: "Laufeyson",
      title: "God of Mischief",
      payPerHour: 20,
      timeInEvents: [],
      timeOutEvents: []
    };
  
    // Call the createTimeInEvent function
    const updatedRecord = createTimeInEvent(employeeRecord, "2023-10-01 0900");
  
    // Assertions
    console.assert(updatedRecord.timeInEvents.length === 1, "TimeInEvents should have 1 event");
    console.assert(updatedRecord.timeInEvents[0].type === "TimeIn", "Event type should be 'TimeIn'");
    console.assert(updatedRecord.timeInEvents[0].date === "2023-10-01", "Date should be '2023-10-01'");
    console.assert(updatedRecord.timeInEvents[0].hour === 900, "Hour should be 900");
  
    console.log("All tests passed!");
  }
  
  // Run the test
  testCreateTimeInEvent();
  
    // Push the event to the employee's timeInEvents array
    employeeRecord.timeInEvents.push(timeInEvent);
    
    // Return the updated employee record
    return employeeRecord;
  }
  // Function to create a timeOut event
  function createTimeOutEvent(employeeRecord, dateTime) {
    const [date, hour] = dateTime.split(' ');
    const timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(hour),
      date: date
    };
    employeeRecord.timeOutEvents.push(timeOutEvent);
    return employeeRecord;
  }
  
  // Function to calculate hours worked on a specific date
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100; // Convert to hours
  }
  
  // Function to calculate wages earned on a specific date
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
  }
  
  // Function to calculate all wages for an employee
  function allWagesFor(employeeRecord) {
    const dates = employeeRecord.timeInEvents.map(event => event.date);
    return dates.reduce((total, date) => total + wagesEarnedOnDate(employeeRecord, date), 0);
  }
  
  // Function to calculate total payroll for an array of employee records
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor(record), 0);
  }
  
  // Function to find an employee by first name
  function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
  }
  
  // Example usage with mock data
  const employeesData = [
    ["Loki", "Laufeyson", "God of Mischief", 20],
    ["Natalia", "Romanoff", "Black Widow", 27]
  ];
  
  const employeeRecords = createEmployeeRecords(employeesData);
  
  // Adding time in and time out events
  createTimeInEvent(employeeRecords[0], "2023-10-01 0900");
  createTimeOutEvent(employeeRecords[0], "2023-10-01 1100");
  
  createTimeInEvent(employeeRecords[1], "2023-10-01 1000");
  createTimeOutEvent(employeeRecords[1], "2023-10-01 1200");
  
  // Calculating payroll
  const totalPayroll = calculatePayroll(employeeRecords);
  console.log(totalPayroll); // Output the total payroll