const Employee = require('../lib/Employee');


jest.mock('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Bob Dole');


})