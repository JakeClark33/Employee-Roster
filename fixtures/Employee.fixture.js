// import Employee from '../lib/Employee'
const Employee = require('../lib/Employee')
class EmployeeFixture {
  static employee = () => {
    return new Employee('Bob Dole', 1234, 'bob.dole@dingis.com')
  }
}
module.exports = EmployeeFixture
