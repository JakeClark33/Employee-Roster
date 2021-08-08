// import Employee from '../lib/Employee'
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
class EmployeeFixture {
  static employee = () => {
    return new Employee('Bob Dole', 1234, 'bob.dole@dingis.com')
  }

  static engineer = () => {
    return new Engineer('Bob Dole', 1234, 'bob.dole@dingis.com', 'JakeClark33')
  }
}
module.exports = EmployeeFixture
