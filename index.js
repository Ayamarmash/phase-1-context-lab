/* Your Code Here */
function createEmployeeRecord(employee){
    return{
        firstName : employee[0],
        familyName : employee[1],
        title : employee[2],
        payPerHour : employee[3],
        timeInEvents : [],
        timeOutEvents : []
    }
}
function createEmployeeRecords(employeeData){
    // console.log(employeeData) ---> array of arrays
    return employeeData.map((employee)=>{
        // console.log(employee) ---> array contains employee data
        return createEmployeeRecord(employee)
    })
}
function createTimeInEvent(dateAndTime){
    let timeInEventData = dateAndTime.split(' ')
    this.timeInEvents.push({
        type : 'TimeIn',
        hour : parseInt(timeInEventData[1], 10),
        date : timeInEventData[0],
    })
    return this
}
function createTimeOutEvent(dateAndTime){
    let timeOutEventData = dateAndTime.split(' ')
    this.timeOutEvents.push({
        type : 'TimeOut',
        hour : parseInt(timeOutEventData[1], 10),
        date : timeOutEventData[0],
    })
    return this
}
function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find((event)=>{
        return (event.date === date)
    })
    let timeOut = this.timeOutEvents.find((event)=>{
        return (event.date === date)
    })
    return ((timeOut.hour - timeIn.hour)/100)
}
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}
function calculatePayroll(employees){
    return employees.reduce((sum, employee)=> {
        return sum + allWagesFor.call(employee)
    }, 0)
}
function findEmployeeByFirstName(employees, firstName){
    return employees.find((employee)=>{
        return employee.firstName === firstName
    })
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

