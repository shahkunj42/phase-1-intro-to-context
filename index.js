// Your code here
function createEmployeeRecord(array){
    return{
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
}

let createEmployeeRecords = function(array) {
    return array.map(function(row){
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent(employeeRecord, string){
    let array = string.split(' ')
    employeeRecord.timeInEvents.push({
        type: 'TimeIn',
        date: array[0],
        hour: parseInt(array[1])
    })
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, string){
    let array = string.split(' ')
    employeeRecord.timeOutEvents.push({
        type: 'TimeOut',
        date: array[0],
        hour: parseInt(array[1])
    })
    return employeeRecord
}